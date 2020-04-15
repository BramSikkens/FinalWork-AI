const amqp = require("amqplib");
import DataFrame from "dataframe-js";
import { AthleteAnalyser } from "../Analysers/AthleteAnalyser";
import Axios from "axios";
import { fetchFullCompetition } from "./BackendAPIService";
// KLASSE VAN MAKEN
export default async function setupCompetitionListener() {
  const messageQueueConnectionString =
    "amqp://rsmilhrs:6mzmPZPPUg_2U-pUFgen2JFlaDcmy9Xm@kangaroo.rmq.cloudamqp.com/rsmilhrs";
  let connection = await amqp.connect(messageQueueConnectionString);
  let channel = await connection.createChannel();
  let isExchangeAsserted = await channel.assertExchange(
    "competition",
    "topic",
    { durable: true }
  );
  let queue = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(queue.queue, "competition", "event.competition.*");
  channel.consume(
    queue.queue,
    async function (msg) {
      let competitionId = JSON.parse(msg.content.toString("utf-8")).savedObject;
      console.log();
      // HANDLE MESSAGES
      switch (msg.fields.routingKey) {
        case "event.competition.created": {
          // DIT MOET MSS NIET IN EEN COLLECTIE
          fetchFullCompetition(competitionId).then(async (data) => {
            let athleteAnalyser = new AthleteAnalyser();
            athleteAnalyser.Analyse(data);
          });
        }
      }
    },
    { noAck: true }
  );
}
