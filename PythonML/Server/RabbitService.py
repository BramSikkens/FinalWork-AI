import pika, os
import threading
from time import sleep

# Pika does not have any notion of threading in the code. If you want to use Pika with threading, make sure you have a Pika connection per thread, created in that thread. It is not safe to share one Pika connection across threads.


class RabbitService:
    def __init__(self):
        super().__init__()
        self.incomingMessages = []

    def setupConnection(self):
        # Setting up
        url = os.environ.get(
            "CLOUNDAMQP_URL",
            "amqp://rsmilhrs:6mzmPZPPUg_2U-pUFgen2JFlaDcmy9Xm@kangaroo.rmq.cloudamqp.com/rsmilhrs",
        )
        params = pika.URLParameters(url)
        params.socket_timeout = 5
        connection = pika.BlockingConnection(params)
        channel = connection.channel()
        print("[*] Rabbit Connection Created...")
        return channel

    def createCompetitionListener(self):
        channel = self.setupConnection()
        # Creating Channel connection
        channel.exchange_declare(
            exchange="competition", exchange_type="topic", durable=True
        )
        result = channel.queue_declare("", exclusive=True)
        queue_name = result.method.queue
        channel.queue_bind(
            exchange="competition", queue=queue_name, routing_key="event.competition.*"
        )

        print("[*] Waiting for Competition events... ")

        def callback(ch, method, properties, body):
            print(" [**] %r:%r" % (method.routing_key, body))
            self.incomingMessages.append(body)

        # Start consuming
        channel.basic_consume(
            queue=queue_name, on_message_callback=callback, auto_ack=True
        )
        channel.start_consuming()

    def createRaceListener(self):
        channel = self.setupConnection()
        # Creating Channel connection
        channel.exchange_declare(exchange="race", exchange_type="topic", durable=True)
        result = channel.queue_declare("", exclusive=True)
        queue_name = result.method.queue
        channel.queue_bind(
            exchange="race", queue=queue_name, routing_key="event.race.*"
        )

        print("[*] Waiting for Race events... ")

        def callback(ch, method, properties, body):
            print(" [**] %r:%r" % (method.routing_key, body))
            self.incomingMessages.append(body)

        # Start consuming
        channel.basic_consume(
            queue=queue_name, on_message_callback=callback, auto_ack=True
        )
        channel.start_consuming()

    def createTeamListener(self):
        channel = self.setupConnection()
        # Creating Channel connection
        channel.exchange_declare(exchange="team", exchange_type="topic", durable=True)
        result = channel.queue_declare("", exclusive=True)
        queue_name = result.method.queue
        channel.queue_bind(
            exchange="team", queue=queue_name, routing_key="event.team.*"
        )

        print("[*] Waiting for Team events... ")

        def callback(ch, method, properties, body):
            print(" [**] %r:%r" % (method.routing_key, body))
            self.incomingMessages.append(body)

        # Start consuming
        channel.basic_consume(
            queue=queue_name, on_message_callback=callback, auto_ack=True
        )
        channel.start_consuming()

    def handleIncomingMessages(self):
        while True:
            if len(self.incomingMessages) > 0:
                message = self.incomingMessages[0]  # FIFO
                yield self.incomingMessages[0]
                self.incomingMessages.pop(0)

            else:
                sleep(5)

