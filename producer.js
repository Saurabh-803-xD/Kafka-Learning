// producer is the one who produces the msg(data)
const { kafka } = require('./client')

async function init() {
    const producer = kafka.producer();

    console.log("producer connecting..")
    await producer.connect();

    console.log("Producer connected successfully.. ")

    // producer is sending some data to topic "rider-updates"
    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                partition:0,
                key: 'location-update',
                value: JSON.stringify({name: "Tony",loc:"South"}),
            }
        ]
    })

    await producer.disconnect();
}

init();