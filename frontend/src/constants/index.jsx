// export const API_BASE_URL = 'http://k7c204.p.ssafy.io:8080';
// export const API_BASE_URL = 'http://localhost:8080';
export const API_BASE_URL = 'https://k7c204.p.ssafy.io/api';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

// 로컬
// export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
// 배포
// export const OAUTH2_REDIRECT_URI = 'http://k7c204.p.ssafy.io:3000/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'https://k7c204.p.ssafy.io/oauth2/redirect'


export const KAKAO_AUTH_URL = API_BASE_URL + '/oauth2/authorize/kakao?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const NAVER_AUTH_URL = API_BASE_URL + '/oauth2/authorize/naver?redirect_uri=' + OAUTH2_REDIRECT_URI;
