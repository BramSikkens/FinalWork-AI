import sys
import pandas as pd
from datetime import datetime
import numpy as np


def cleanColumns(df):
    df = df.dropna(subset=["result_totalTime"])
    df["competition_StartDate"] = pd.to_datetime(df["competition_StartDate"])
    df["competition_EndDate"] = pd.to_datetime(df["competition_EndDate"])
    return df


def splitDateInColumns(df):
    for index, row in df.iterrows():
        date_object = row["competition_StartDate"]
        df.at[index, "Day"] = date_object.day
        df.at[index, "Month"] = date_object.month
        df.at[index, "Year"] = date_object.year
    return df


# Time To Seconds
def timeToSeconds(timestr):
    for fmt in ("%M:%S.%f", "%S.%f", "%S:%f", "%M:%S:%f"):
        try:
            t = datetime.strptime(timestr, fmt)
            seconds = (t.minute * 60) + t.second + (t.microsecond * 1e-6)
            return round(seconds)
        except ValueError:
            pass


def convertTimes(df):
    for index, row in df.iterrows():
        df.at[index, "result_totalTime"] = timeToSeconds(row["result_totalTime"])
    return df


def oneHotEncoding(df):
    dummies = pd.get_dummies(
        df[["race_Category", "race_Sex", "race_distance", "race_BoatType"]], dtype=bool,
    )
    df = pd.concat([df, dummies], axis=1)
    return df


# Create CompetitionColumns
def createCompetitionColumns(df):
    dummies = pd.get_dummies(
        df[["competition_Type", "race_competitionRound"]], dtype=bool
    )
    df = pd.concat([df, dummies], axis=1)
    return df


def dropColumns(df):
    df = df.drop(
        columns=[
            "competition_createdById",
            "race_createdById",
            "result_createdById",
            "athlete_createdById",
            "user_id",
            "user_username",
            "user_email",
            "user_password",
            "user_role",
            "athlete_userId",
            "race_competitionId",
            "result_raceId",
        ],
        axis=1,
    )
    return df


# Bereken de gemiddelde Totaal Tijd van de eerste 3 boten in een race
def createAVGTIMETOP3(df):
    # behoud enkel de boten die in de top 3 zijn geraakt per race
    filterTop3 = df[(df["result_rank"] < 4)]
    # Tijd naar nummer converteren
    filterTop3["result_totalTime"] = pd.to_numeric(filterTop3["result_totalTime"])
    # Groepeer per race en neem het gemiddelde van deze groep(race)
    groupbyRace = (
        filterTop3.groupby("race_Id")["result_totalTime"]
        .mean()
        .to_frame(name="Top3Avg")
        .reset_index()
    )
    # Merge  gemiddelden met dataset
    df = pd.merge(df, groupbyRace, how="outer")
    return df


# Creeer de snelste tijd in de Heats per Competitie
def createFastestHeatTimeInCompetition(df):
    # behoud enkel de heats
    filterHeat = df[(df["race_competitionRound_HEAT"] == True)]
    # groepeer per Competitie(Plaat,Jaar) en neem de kleinste totaal tijd
    raceGroups = (
        filterHeat.groupby("competition_Id")["result_totalTime"]
        .min()
        .to_frame(name="N1THeatCompetition")
        .reset_index()
    )
    # Merge de data set
    df = pd.merge(df, raceGroups, on="competition_Id")
    return df


# Creeer de snelste tijd in de Semi Finals per Competitie
def createFastestSemiTimeInCompetition(df):
    # behoud enkel de semis
    filterSemi = df[(df["race_competitionRound_SEMIFINAL"] == True)]
    # groepeer per Competitie(Plaat,Jaar) en neem de kleinste totaal tijd
    raceGroups = (
        filterSemi.groupby("competition_Id")["result_totalTime"]
        .min()
        .to_frame(name="N1TSemiCompetition")
        .reset_index()
    )
    # Merge de data set
    df = pd.merge(df, raceGroups, on="competition_Id")
    return df


# Creeer de snelste tijd in de A finale per Competitie
def createFastestFinalTimeInCompetition(df):
    # behoud enkel de A Finales
    filterFinal = df[(df["race_competitionRound_FINAL A"] == True)]
    # groepeer per Competitie(Plaat,Jaar) en neem de kleinste totaal tijd
    raceGroups = (
        filterFinal.groupby("competition_Id")["result_totalTime"]
        .min()
        .to_frame(name="N1TFinalACompetition")
        .reset_index()
    )
    # Merge de data set
    df = pd.merge(df, raceGroups, on="competition_Id")
    return df


def createFastestTimeInCompetition(df):
    raceGroups = (
        df.groupby("competition_Id")["result_totalTime"]
        .min()
        .to_frame(name="N1TCompetition")
        .reset_index()
    )

    print(raceGroups)
    # Merge de data set
    df = pd.merge(df, raceGroups, on="competition_Id")
    return df


def create_Reached_Semi(df):
    # Loop over elke row
    for index, row in df.iterrows():
        # check of ploeg in row i in de Semi komt
        dataCount = df.loc[
            (df["race_competitionRound_SEMIFINAL"] == True)
            & (df["competition_Id"] == row["competition_Id"])
            & (df["athlete_Name"] == row["athlete_Name"])
        ].shape[0]
        # als ploeg in de a finale geraakt
        if dataCount >= 1:
            df.at[index, "Reached_SEMI"] = True
        else:
            df.at[index, "Reached_SEMI"] = False
    return df


def create_Reached_FinalA(df):
    # Loop over elke row
    for index, row in df.iterrows():
        # check of ploeg in row i in de a finale komt
        dataCount = df[
            (df["race_competitionRound_FINAL A"] == True)
            & (df["competition_Id"] == row["competition_Id"])
            & (df["athlete_Name"] == row["athlete_Name"])
        ].shape[0]
        # als ploeg in de a finale geraakt
        if dataCount >= 1:
            df.at[index, "Reached_FINAL_A"] = True
        else:
            df.at[index, "Reached_FINAL_A"] = False
    return df


def rankeRaces(df):
    Results = pd.DataFrame(
        columns=[
            "race_Id",
            "TT1",
            "TT2",
            "TT3",
            "TT4",
            "TT5",
            "TT6",
            "TT7",
            "TT8",
            "TT9",
        ]
    )
    racesGrouped = df.groupby("race_Id")

    for name, group in racesGrouped:
        race = group.reset_index()
        race = race.drop_duplicates(["result_Id"])
        race = race.sort_values(by="result_totalTime")["result_totalTime"].to_numpy()
        race = np.append(race, np.full(9 - race.size, -1))
        Results = Results.append(
            {
                "race_Id": name,
                "TT1": race[0],
                "TT2": race[1],
                "TT3": race[2],
                "TT4": race[3],
                "TT5": race[4],
                "TT6": race[5],
                "TT7": race[6],
                "TT8": race[7],
                "TT9": race[8],
            },
            ignore_index=True,
        )

    df = pd.merge(df, Results, on="race_Id")
    return df


def createRaceTyp(df):
    for index, row in df.iterrows():
        df.at[index, "RaceType"] = (
            df.at[index, "race_BoatType"]
            + "-"
            + df.at[index, "race_Sex"]
            + "-"
            + df.at[index, "race_distance"]
        )
    return df


# GET DATA FROM JSON
df = pd.read_json(
    "http://localhost:3000/competition/" + sys.argv[1] + "/full/raw", orient="columns",
)

# df = pd.read_json(
#     "http://localhost:3000/competition/0943febc-a275-4e7f-9e98-4fa2b23024b9/full/raw",
#     orient="columns",
# )

df = cleanColumns(df)
convertTimes(df)
df = splitDateInColumns(df)
df = createCompetitionColumns(df)
df = oneHotEncoding(df)
df = createAVGTIMETOP3(df)
df = createFastestHeatTimeInCompetition(df)
df = createFastestSemiTimeInCompetition(df)
df = createFastestFinalTimeInCompetition(df)
df = createFastestTimeInCompetition(df)
df = rankeRaces(df)
df = create_Reached_Semi(df)
df = create_Reached_FinalA(df)
df = createRaceTyp(df)
df = dropColumns(df)


Competetition_Analasys_Dataset = (
    df[
        [
            "competition_Id",
            "N1THeatCompetition",
            "N1TSemiCompetition",
            "N1TFinalACompetition",
            "N1TCompetition",
        ]
    ]
    .copy()
    .drop_duplicates()
)

Competition_DataSet = (
    df[
        [
            "competition_Id",
            "competition_Place",
            "competition_Year",
            "competition_Title",
            "competition_StartDate",
            "competition_EndDate",
            "competition_Type",
        ]
    ]
    .copy()
    .drop_duplicates()
    .set_index("competition_Id")
    .to_json("./temp/Competition_Dataset.json", orient="index")
)


Race_Analysis_Dataset = (
    (
        df[
            [
                "race_Id",
                "competition_Id",
                "TT1",
                "TT2",
                "TT3",
                "TT4",
                "TT5",
                "TT6",
                "TT7",
                "TT8",
                "TT9",
            ]
        ]
    )
    .copy()
    .drop_duplicates()
    .to_json("./temp/Race_Analysis_Dataset.json", orient="records")
)

Athlete_Result_Dataset = (
    (
        df[
            [
                "athlete_Name",
                "race_Id",
                "competition_Id",
                "race_Date",
                "RaceType",
                "result_lane",
                "result_rank",
                "result_splitTimes",
                "result_totalTime",
                "race_competitionRound",
            ]
        ]
    )
    .copy()
    .drop_duplicates()
    .to_json("./temp/Athlete_Result_Dataset.json", orient="records")
)

Athlete_Competition_Analysis_Dataset = (
    (
        df[
            [
                "competition_Id",
                "athlete_Name",
                "Reached_SEMI",
                "Reached_FINAL_A",
                "race_competitionRound",
                "race_distance",
                "race_BoatType",
                "race_Sex",
                "race_Category",
                "RaceType",
            ]
        ]
    )
    .copy()
    .drop_duplicates()
    .to_json("./temp/Athlete_Competition_Analysis_Dataset.json", orient="records")
)

Competetition_Analasys_Dataset.to_json(
    "./temp/Competition_Analasis_Dataset.json", orient="index"
)


df.to_json("./temp/result.json", orient="index")
