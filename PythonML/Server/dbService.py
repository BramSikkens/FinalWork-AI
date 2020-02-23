import mysql.connector


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

