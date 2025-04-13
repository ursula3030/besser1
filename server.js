const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Raum erstellen
app.post('/api/create-room', (req, res) => {
    const { roomName } = req.body;
    const roomUrl = `rtmp://mail.localstreaming.example.com/live/${roomName}`;
    res.json({ roomUrl });
});

// Raum beitreten
app.get('/api/join-room/:roomName', (req, res) => {
    const roomName = req.params.roomName;
    const roomUrl = `rtmp://mail.localstreaming.example.com/live/${roomName}`;
    res.json({ roomUrl });
});

app.listen(port, () => {
    console.log(`Backend läuft auf http://localhost:${port}`);
});
