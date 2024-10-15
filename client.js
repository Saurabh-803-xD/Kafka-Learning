const { Kafka } = require("kafkajs")

exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.28.206:9092'],// also can give ip address 
  })