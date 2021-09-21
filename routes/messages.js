import express from 'express';

import Messages from '../models/messages.model.js';

const router = express.Router();

router.get('/', (req, res) => {
  Messages.find().then((data) => res.send(data));
});

router.post('/sendMessage', (req, res) => {
  const newMessage = new Messages(req.body);
  newMessage.save().then((data) => res.send({ message: 'Message sent' }));
});

export default router;
