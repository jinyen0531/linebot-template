import linebot from 'linebot';
import { handleLineUser } from './user';

const {
  LINEBOT_CHANNEL_ID,
  LINEBOT_CHANNEL_SECRET,
  LINEBOT_CHANNEL_ACCESS_TOKEN,
} = process.env;

const bot = linebot({
  channelId: LINEBOT_CHANNEL_ID,
  channelSecret: LINEBOT_CHANNEL_SECRET,
  channelAccessToken: LINEBOT_CHANNEL_ACCESS_TOKEN,
});

const MESSAGE_TYPE = {
  TEXT: 'text',
  STICKER: 'sticker',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  LOCATION: 'location',
  IMAGE_MAP: 'imagemap',
  TEMPLATE: 'template',
  FLEX: 'flex',
};

bot.on('message', event => {
  console.log('event', event);
  const { message, source, replyToken, reply } = event;

  if (source.type === 'user') {
    handleLineUser(source);
  }

  switch (message.type) {
    case MESSAGE_TYPE.TEXT:
      reply(`你說了 ${event.message.text}`);
      break;
    case MESSAGE_TYPE.STICKER:
      console.log('STICKER');
      break;
    case MESSAGE_TYPE.IMAGE:
      console.log('IMAGE');
      break;
    case MESSAGE_TYPE.VIDEO:
      console.log('VIDEO');
      break;
    case MESSAGE_TYPE.AUDIO:
      console.log('AUDIO');
      break;
    case MESSAGE_TYPE.LOCATION:
      console.log('LOCATION');
      break;
    case MESSAGE_TYPE.IMAGE_MAP:
      console.log('IMAGE_MAP');
      break;
    case MESSAGE_TYPE.TEMPLATE:
      console.log('TEMPLATE');
      break;
    case MESSAGE_TYPE.FLEX:
      console.log('FLEX');
      break;
  
    default:
      break;
  }
  
});

export default bot;
