export const daraja = {
  consumerKey:
    process.env.REACT_APP_DARAJA_CONSUMER_KEY ||
    "CFoLt3wvi0GTOjkGnwcdkVGWHlaWMplVTwxiXmZWhGYTAWhx",
  consumerSecret:
    process.env.REACT_APP_DARAJA_CONSUMER_SECRET ||
    "DxqKJ9dNd84VsyLb5wI5gDkG7UGs1jGYZQdFN2zfUNNpBsi05ZCSmXm92W8GO5ya",
  passKey: process.env.REACT_APP_DARAJA_PASS_KEY,
  businessShortCode: process.env.REACT_APP_DARAJA_BUSINESS_SHORT_CODE,
  environment: process.env.REACT_APP_DARAJA_ENVIRONMENT,
  TillNumber: process.env.REACT_APP_DARAJA_TILL_NUMBER,
  callbackUrl: process.env.REACT_APP_DARAJA_CALLBACK_URL,
};
