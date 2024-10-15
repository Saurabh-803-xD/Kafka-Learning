//admin setups the the infrastructure of kafka 
// like creating topics, partitions 
const {kafka} = require('./client')
async function init(){
   const admin = kafka.admin();
   console.log("Admin Connecting..");
   admin.connect();
   console.log("Admin connected successfully..");

   //yha pe topics aur partitions banayenge
   console.log("Creating topics [rider-updates]..")
   await admin.createTopics({
     topics:[{
        topic: 'rider-updates',
        numPartitions:2,

     }]
   })
   console.log("Topics created successfully [rider-updates]..")

   console.log("Admin disconnecting...")
   await admin.disconnect()
}

init();