const amqp = require("amqplib");
import CompetitionAnalyser from "../Analysers/CompetitionAnalyser";
import { fetchFullCompetition } from "./BackendAPIService";
import AthleteAnalyser from "../Analysers/AthleteAnalyser";

class RabbitMQService {
  messageQueueConnectionString: string;
  constructor() {
    this.messageQueueConnectionString =
      "amqp://rsmilhrs:6mzmPZPPUg_2U-pUFgen2JFlaDcmy9Xm@kangaroo.rmq.cloudamqp.com/rsmilhrs";
  }

  async listenForCompetitionMessages() {
    let connection = await amqp.connect(this.messageQueueConnectionString);
    let channel = await connection.createChannel();
    let isExchangeAsserted = await channel.assertExchange(
      "competition",
      "topic",
      { durable: true }
    );
    let queue = await channel.assertQueue("", { exclusive: true });
    await channel.bindQueue(queue.queue, "competition", "event.competition.*");
    channel.consume(queue.queue, this.handleIncomingCompetitionMessages, {
      noAck: true,
    });
  }

  async handleIncomingCompetitionMessages(msg) {
    let competitionId = JSON.parse(msg.content.toString("utf-8")).savedObject;
    // HANDLE MESSAGES
    switch (msg.fields.routingKey) {
      case "event.competition.created": {
        // DIT MOET MSS NIET IN EEN COLLECTIE
        fetchFullCompetition(competitionId).then(async (data) => {});

        CompetitionAnalyser.startPythonScript(competitionId);
        // AthleteAnalyser.startPythonScript();
      }
    }
  }
}

export default new RabbitMQService();
