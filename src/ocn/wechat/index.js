import { get } from '../http/client';


const nonceStr = 'Mm3MZYTPz0wzccnM';

export async function config(callback) {
  const timestamp = new Date().getTime();
  const auth = await getAuth(timestamp);
  wx.config({
    debug: false,
    appId: auth.appId,
    timestamp,
    nonceStr,
    signature: auth.code,
    jsApiList: ['scanQRCode']
  });

  wx.ready(callback);
}

async function getAuth(timestamp) {
  const result = await get(`/oauth/wechat/signature?noncestr=${nonceStr}&timestamp=${timestamp}&rnd=${Math.random}`);
  if (!result.errcode) {
    return result;
  } else {
    console.error(result);
    throw new Error(result.errmsg);
  }
}
