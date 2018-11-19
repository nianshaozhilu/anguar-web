//系统ajax请求地址
let ipAdress = window.location.protocol+"//"+window.location.host;
if(ipAdress.indexOf('localhost') >=1) {
    
    ipAdress = 'http://localhost:8090';
}
export const URL_NAME =ipAdress+'/api/v1.0';

export const USER_SERVICE = URL_NAME+'/userInfo';    //用户服务

export const USER_SERVICE_LOGIN = USER_SERVICE+'/login';