import express from 'express';
import linebotRouter from './linebot/api';

const router = express.Router();
router.use('/linebot', linebotRouter);

export default router;