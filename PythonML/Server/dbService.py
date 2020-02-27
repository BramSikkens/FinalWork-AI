import mysql.connector
import pandas as pd


class dbService:
    def __init__(self):
        super().__init__()
        self.connection = self.setupDbConnection()

    def setupDbConnection(self):
        mydb = mysql.connector.connect(
            host="localhost", user="root", passwd="", database="Final Work"
        )
        print("[#] DbConnection Established")
        return mydb

    def getCompetitionDF(self):
        competitionDF = pd.read_csv(
            "/Users/BramSikkens/Desktop/AI-FinalWork/PythonML/Research/Data/Competition_Dataset.csv"
        )
        return competitionDF

    def getRaceDF(self):
        raceDF = pd.read_csv(
            "/Users/BramSikkens/Desktop/AI-FinalWork/PythonML/Research/Data/Race_Dataset.csv"
        )
        return raceDF

