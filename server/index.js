// const express = require("express");
// const app = express();
// app.get("/",(req,res)=>{
//     res.send("working");
// })
// import Pusher from 'pusher-js';
// const pusher = new Pusher(APP_KEY, {
//   cluster: APP_CLUSTER,
//   channelAuthorization: {
//     endpoint: 'http://example.com/pusher/auth'
//   },
// });
// pusher.connection.bind( 'error', function( err ) {
//   if( err.data.code === 4004 ) {
//     log('Over limit!');
//   }
// });
// app.get("/message",(req,res)=>{
//     pusher.log=(message)=>{
//         res.send(message);
//     }
// })
// // pusher.disconnect();
// app.listen(1000,()=>{
//     console.log("working on port 1000");
// })
const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const pusher = new Pusher({
    app_id: "1638058",
    key: "4d4c4e9c6535336e307f",
    secret: "b383d987a573357c9ddf",
    cluster: "ap2",
    useTLS: true
});

app.post('/message', (req, res) => {
    const payload = req.body;
    try { pusher.trigger('chatapp', 'message', payload); } catch (err) { console.log("err"); }
    res.send(payload)
});
// const Pusher = require("pusher");

// const pusher = new Pusher({
//   appId: "1638058",
//   key: "4d4c4e9c6535336e307f",
//   secret: "b383d987a573357c9ddf",
//   cluster: "ap2",
//   useTLS: true
// });

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world"
// });
app.listen(5000, () =>
    console.log('Listening at 5000'))
