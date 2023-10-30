const TUYA_ACCOUNT = process.env.tuya_app_account;
const TUYA_UID = process.env.tuya_uid;
const TUYA_PROJECT_CODE = process.env.tuya_project_code;
const TUYA_ACCESS_ID = process.env.tuya_access_id;
const TUYA_ACCESS_SECRET = process.env.tuya_access_secret;
const TUYA_URL = 'https://openapi.tuyaus.com'
const API_VERSION = 'v2.0'
const DEFAULT_HEADERS = {
  'sign_method': 'HMAC-SHA256',
  'mode': 'cors',
  'Content-Type': 'application/json',
  't': '',
  'client_id': '',
  'sign': '',
  'access_token': ''
};

function makeUrl(call, param) {
  const URL = `${TUYA_URL}/${API_VERSION}/${call}?${param}`;
  const HEADERS = Object.assign({}, DEFAULT_HEADERS);
  return {
    URL, HEADERS
  };
}

async function getDevices(size = 20) {
  const API_CALL = '/cloud/thing/device';
  const API_PARAM = `page_size=${size}`;
  const CALL = makeUrl(API_CALL, API_PARAM);
}