import pandas as pd
from pandas.io.json import json_normalize
import urllib.parse

url = "http://localhost:3003/athlete/results"
athleteResults = pd.read_json(url)
athleteResults = json_normalize(athleteResults.result)

competitionCount = athleteResults["competition_Id"].nunique()
raceCount = athleteResults["race_Id"].nunique()


def createDisciplinepb(dataset):
    disciplineGroups = (
        dataset.groupby(["RaceType", "athlete_Name"])
        .min()["result_totalTime"]
        .to_frame(name="pb")
        .reset_index()
    )
    dataset = pd.merge(dataset, disciplineGroups, on=["RaceType", "athlete_Name"])
    return dataset


def createTotalCompetitions(df):
    print(df[["athlete_Name", "race_Id"]].value_counts())


def createTotalRace(df):
    for index, row in df.iterrows():
        results = df[(df["athlete_Name"] == row["athlete_Name"])]
        test = results.groupby(["race_Id"]).ngroups
        df.at[index, "RaceCount"] = test

    return df


def createDisciplineSeasonBest(dataset):
    for index, row in dataset.iterrows():
        dataset.at[index, "year"] = pd.to_datetime(row["race_Date"]).year

    disciplineGroups = (
        dataset.groupby(["RaceType", "year", "athlete_Name"])
        .min()["result_totalTime"]
        .to_frame(name="seasonsbest")
        .reset_index()
    )
    dataset = pd.merge(
        dataset, disciplineGroups, on=["RaceType", "year", "athlete_Name"]
    )
    return dataset


athleteResults = createDisciplinepb(athleteResults)
athleteResults = createDisciplineSeasonBest(athleteResults)
createTotalCompetitions(athleteResults)
athleteResults = athleteResults.drop_duplicates(["RaceType", "year", "athlete_Name"])

j = (
    athleteResults.groupby(["athlete_Name"])
    .apply(lambda x: x[["pb", "seasonsbest", "year", "RaceType"]].to_dict("r"))
    .reset_index()
    .rename(columns={0: "data"})
    .to_json("Athlete_Analysis_Dataset.json", orient="records")
)


print(athleteResults.tail(50))
