import amqp from "amqplib/callback_api";
const config = require("config");

let ch = null;
amqp.connect(config.get("rabbitConfig.conn_url"), function(err, conn) {
  conn.createChannel(function(err, channel) {
    ch = channel;
  });
});

export const publishToCompetitionExchange = async (topic, data) => {
  ch.publish("competition", topic, Buffer.from(data));
  console.log("sent message to " + topic);
};

export const publishToRaceExchange = async (topic, data) => {
  ch.publish("race", topic, Buffer.from(data));
  console.log("sent message to " + topic);
};

process.on("exit", code => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
