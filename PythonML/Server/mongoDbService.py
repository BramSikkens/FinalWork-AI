import pandas as pd
from pymongo import MongoClient


class mongoDbService:
    def __init__(self):
        super().__init__()
        self.connection = self.setupDbConnection()
        print(self.connection)

    def setupDbConnection(self):
        myclient = MongoClient(
            "mongodb+srv://bramsikkens:<Kajabra1!>@cluster0-v1gpp.mongodb.net/test?retryWrites=true&w=majority"
        )
        myDb = myclient["FinalWork"]
        print(myDb.list_collection_names())
        return myDb
