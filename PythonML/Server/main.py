import _thread
import time
from RabbitService import RabbitService
from dbService import dbService

_rabbitService = RabbitService()


def createRabbitListeners():
    _thread.start_new_thread(_rabbitService.createCompetitionListener, ())
    _thread.start_new_thread(_rabbitService.createRaceListener, ())
    _thread.start_new_thread(_rabbitService.createTeamListener, ())


def handleIncommingRabbitMessages():
    for message in _rabbitService.handleIncommingMessages():
        print(message)


if __name__ == "__main__":

    createRabbitListeners()
    _thread.start_new_thread(handleIncommingRabbitMessages, ())
    print("ok")
    while 1:
        time.sleep(0.1)
