import { get } from '../http/client';


const nonceStr = 'Mm3MZYTPz0wzccnM';

export async function config(callback) {
  const timestamp = new Date().getTime();
  wx.config({
    debug: false,
    appId: 'wxcd1ad2cfb81d38ef',
    timestamp,
    nonceStr,
    signature: await getSignature(timestamp),
    jsApiList: ['scanQRCode']
  });

  wx.ready(callback);
}

async function getSignature(timestamp) {
  const result = await get(`/oauth/wechat/signature?noncestr=${nonceStr}&timestamp=${timestamp}&rnd=${Math.random}`);
  if (!result.errcode) {
    return result.code;
  } else {
    console.error(result);
  }
}
