import express from 'express';
import bodyParser from 'body-parser';
import router from './router/api';
import bot from './service/linebot';

const {
  SERVER_PORT,
} = process.env;

const app = express();
const server = app.listen(SERVER_PORT || 8080, () => {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.use('/api', router);

app.post('/webhook', bot.parser());

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});
app.use(bodyParser.json());


export default app;