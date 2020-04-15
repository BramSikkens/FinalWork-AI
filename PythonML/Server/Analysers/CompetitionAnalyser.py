from mongoDbService import mongoDbService
import pandas as pd


class CompetitionAnalyser:
    def __init__(self):
        super().__init__()
        self._mongoDbService = mongoDbService()  # Create connection to db
        print("[CompetitionAnalyser]: Created")

    def fetchCompetitionData(self):
        return self._mongoDbService.getCompetitionDF()

    def fetchRaceData(self):
        return self._mongoDbService.getRaceDF()

    def transformColumns(self):
        pass

    def doAnalasing(self):
        competitionDf = self.fetchCompetitionData()
        raceDf = self.fetchRaceData()

        df = pd.merge(competitionDf, raceDf, how="outer")
        self.N1THeatCompetition(df)

    # Kolommen:
    # CompetitionRound
    # CompetitionID
    # Total Time
    def N1THeatCompetition(self, df):
        print(df[[""]].head())

    def N1TSemiCompetition(self):
        pass
