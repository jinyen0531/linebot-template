import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
      res.send('linebot');
  } catch (error) {
      next(error);
  }
});

export default router;