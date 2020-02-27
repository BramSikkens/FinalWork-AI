from dbService import dbService
import pandas as pd


class CompetitionAnalyser:
    def __init__(self):
        super().__init__()
        self._dbService = dbService()
        self._competitions = self.fetchCompetitionData
        print("[CompetitionAnalyser]: Created")

    def fetchCompetitionData(self):
        return self._dbService.getCompetitionDF()

    def fetchRaceData(self):
        return self._dbService.getRaceDF()

    def transformColumns():
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

    def N1TSemiCompetition(self):
        pass

