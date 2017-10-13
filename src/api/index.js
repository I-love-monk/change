import {Message, Notification} from 'element-ui';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// 拦截器
Vue.http.interceptors.push(function (req, next) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('拦截req:', req);
  }
  // 拦截res
  next(function (res) {
    if (process.env.NODE_ENV === 'production') {
      if (res.body.status === 500) {
        Message.error(res.body.msg);
      }
    } else {
      console.log('拦截res:', res);
      if (res.status === 200 && res.body.status === 200) {
        Message('调用接口：' + res.url);
      } else if (res.body.status === 500) {
        console.log(res);
        Notification.error({
          title: '操作错误!',
          message: '接口:' + res.url + '。msg:' + res.body.msg
        });
      } else if (res.status === 500) {
        Notification.error({
          title: '接口通信错误!',
          message: '请查看Network详情！'
        });
      }
    }
  });
});

// Vue.http.options.xhr = {withCredentials: true}; // 携带cookie
Vue.http.options.credentials = true;  // 携带鉴权
Vue.http.options.emulateJSON = true;  // form传输
// Vue.http.headers.common['X-CSRFToken'] = {% croftoken %};
// Vue.http.headers.post['Content-Type'] = 'multipart/form-data';
const API_ROOT = 'http://192.168.1.143:8080/api/';
export default Vue.resource(API_ROOT + '{api}' + '/');

// 接口—— https://www.zybuluo.com/I-love-monk/note/902442
