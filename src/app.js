require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import router from './router/api';

const {
  SERVER_PORT,
  LINEBOT_CHANNEL_ID,
  LINEBOT_CHANNEL_SECRET,
  LINEBOT_CHANNEL_ACCESS_TOKEN,
} = process.env;

const linebot = require('linebot');
const express = require('express');

const bot = linebot({
  channelId: LINEBOT_CHANNEL_ID,
  channelSecret: LINEBOT_CHANNEL_SECRET,
  channelAccessToken: LINEBOT_CHANNEL_ACCESS_TOKEN,
});

const app = express();
app.listen(SERVER_PORT);

const server = app.listen(SERVER_PORT || 8080, () => {
  const port = server.address().port;
  console.log("App now running on port", port);
});

const linebotParser = bot.parser();
app.post('/', linebotParser);

bot.on('message', event => {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  event.reply(`你說了 ${event.message.text}`);
});

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.use('/api', router);
app.use(bodyParser.json())

export default app;