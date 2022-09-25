require('dotenv').config();
import express from 'express';
import router from './router/api';

const app = express();
app.listen(8080);
app.get('/healthcheck', (req, res) => {
    res.send('OK');
});

app.use('/api', router);

export default app;