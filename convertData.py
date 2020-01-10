import pandas as pd
import numpy as np
from datetime import datetime
import time


def splitDateInColumns(df):
    for index, row in df.iterrows():
        date_object = datetime.strptime(row["Date"], '%d.%m.%Y')
        df.at[index, 'Day'] = date_object.day
        df.at[index, 'Month'] = date_object.month
        df.at[index, 'Year'] = date_object.year
    return df


def cleanColumns(df):
    df = df.dropna(subset=['Date', 'Person 1', 'Person 2',
                           'split time 1', 'split time 2', 'split time 3', 'Total Time'])
    return df


def createTeams(df):
    for index, row in df.iterrows():
        name1 = df["Person 1"]
        name1.str.capitalize()
        name1.str.strip(",")
        name2 = df["Person 2"]
        name2.str.capitalize()
        name2.str.strip(",")
        df["Team"] = name1 + "_" + name2


# Solution from : https://stackoverflow.com/questions/32854677/how-to-deal-with-multiple-date-string-formats-in-a-python-series
def timeToSeconds(timestr):
    for fmt in ("%M:%S.%f", "%S.%f", "%S:%f", "%M:%S:%f"):
        try:
            t = datetime.strptime(timestr, fmt)
            seconds = (t.minute * 60) + t.second + (t.microsecond * 1e-6)
            return round(seconds)
            break
        except ValueError:
            pass


def convertTimes(df):
    for index, row in df.iterrows():
        df.at[index, "split time 1"] = timeToSeconds(row["split time 1"])
        df.at[index, "split time 2"] = timeToSeconds(row["split time 2"])
        df.at[index, "split time 3"] = timeToSeconds(row["split time 3"])
        df.at[index, "Total Time"] = timeToSeconds(row["Total Time"])


def createCompetitionColumns(df):
    df = pd.get_dummies(df,columns=['Competiton Type','Competition Round'], dtype=bool)
    return df

def createDeltaTimes(df):
     for index, row in df.iterrows():
        df.at[index,"D0"] = row["split time 1"]
        df.at[index,"D1"] = pd.to_numeric(row["split time 2"])-pd.to_numeric(row["split time 1"])
        df.at[index,"D2"] = pd.to_numeric(row["split time 3"])-pd.to_numeric(row["split time 2"])
        df.at[index,"D3"] = pd.to_numeric(row["Total Time"])-pd.to_numeric(row["split time 3"])




# CSV uploaden
df = pd.read_csv("C:/Users/Bram Sikkens/Desktop/AI-Final Work/wres2.csv",
                 error_bad_lines=False, sep=";")
# Datum opschonen
df = cleanColumns(df)
# Datum opsplitens in verschillende columns
df = splitDateInColumns(df)
# Maak van de personen 1 team
createTeams(df)
# Convert alle tijden naar seconden
convertTimes(df)
#Make columns of categorial columns
df = createCompetitionColumns(df)

createDeltaTimes(df)

df.to_csv("K2_MEN_DATASET.csv")
