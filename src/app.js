const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json);

const publicVapidKey = 'BF2y0VLMNrXADnoNovUBLJLAhV-L22mZaq7BUmLPueyFMt-ASp1SWnJNEQFNj2LpTNk8abZlU9kK0X42ncjJfT8';
const privateVapidKey = 'GxLLpO-ds0HK57D9VbPxaNWVeRahPFqKf4Qyyr9BIcA';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

/* app.post('/subscribe', (req, res)=> {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ 'title':'Hebele hubele'});

    webpush.sendNotification(subscription, "selam").catch(err => console.error(err));
}); */



subscription =
{
    'endpoint': 'https://fcm.googleapis.com/fcm/send/cl8VE2xOCDs:APA91bFKFVjBubecG7A2UfyGIwyRALp6VW-M1ZO_jdYiaoVEFpA5h-aXqOhpO7p94MjBqIS6axuiRCsKS9rbyeHiR9l2ToW02M6eIxFxNVyP4QmPTbmE91vvLZ4yl8q4c7ADn66e0dGv',
    'keys': { "auth": "SH4FCjTcmvyPNdSqfed7OA", "p256dh": "BNBUaUlTx8sxG6_-_0ImEp0dqjICC9_eMhDiVf4ibx3RUJ00dN68pBM2QTLvQGPWVxc2tflE3AHxT2XyCo50_bE" }
};

payload = {
    notification: {
        title: 'Baslik',
        body: 'Konu',
        icon: 'https://www.w3schools.com/bootstrap4/bird.jpg',
        vibrate: [100, 50, 100],
        url:'https://www.youtube.com/watch?v=2zHqTjyfIY8',
        actions: [{
            action: 'explore',
            url: 'https://www.youtube.com/watch?v=2zHqTjyfIY8',
            title: 'ABas',
            icon: 'https://www.w3schools.com/bootstrap4/bird.jpg',
        }

        ]  

    },
};

webpush.sendNotification(subscription, JSON.stringify(payload)).then(res => console.log("Oldu: ", res)).catch(err => console.error("Error: ", err));

const port = 5000;

app.listen(port, () => console.log(`SERVER BASLADI ${port}`));

