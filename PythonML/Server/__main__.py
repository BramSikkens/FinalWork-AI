import _thread
import time
from RabbitService import RabbitService
from Analysers.CompetitionAnalyser import CompetitionAnalyser
import pandas as pd


def createRabbitListeners():
    _thread.start_new_thread(_rabbitService.createCompetitionListener, ()) #Luister naar Competitie berichten
    #_thread.start_new_thread(_rabbitService.createRaceListener, ())
    #_thread.start_new_thread(_rabbitService.createTeamListener, ())


def handleIncomingRabbitMessages():
    _ca = CompetitionAnalyser()
    for message in _rabbitService.handleIncomingMessages():
        print(message)
        # DOE DB STUFF
        # IF OK -> GA VERDER
        # IF NOT OK push terug naar service
        #_ca.doAnalasing()


if __name__ == "__main__":
    _rabbitService = RabbitService()
    createRabbitListeners() #Luister naar rabbit messages 
    _thread.start_new_thread(handleIncomingRabbitMessages, ()) #Verwerk messages
    while 1:
        time.sleep(0.1)
