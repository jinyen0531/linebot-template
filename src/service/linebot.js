import { middleware } from '@line/bot-sdk';

const {
  LINEBOT_CHANNEL_ID,
  LINEBOT_CHANNEL_SECRET,
  LINEBOT_CHANNEL_ACCESS_TOKEN,
} = process.env;

class LineBot {
  constructor() {
    this.init();
  }

  init() { 
    // this.bot = linebot({
    //   channelId: LINEBOT_CHANNEL_ID,
    //   channelSecret: LINEBOT_CHANNEL_SECRET,
    //   channelAccessToken: LINEBOT_CHANNEL_ACCESS_TOKEN,
    // })
  }
}

export default LineBot;
