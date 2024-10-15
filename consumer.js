const { Partitioners } = require('kafkajs');
const { kafka } = require('./client')

async function init(){
    const consumer = new kafka.consumer({ groupId: "user-1"})
        await consumer.connect();

        //consumer ko rider-updates se subscribe kra rhe hai mtlb ki
        // bss iske pas us topics se related data ayega
        await consumer.subscribe({topics: ["rider-updates"], fromBeginning:true});

        //processing the data received form toppics 
        //it triggers for each message received individually
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
                console.log(`[${topic}] : PART:${partition}`,message.value.toString());
            },
        });

        // await consumer.disconnect();
}

init();