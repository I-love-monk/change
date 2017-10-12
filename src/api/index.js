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
    if (process.env.NODE_ENV !== 'production') {
      console.log('拦截res', res);
      this.$message.error(res);
    }
  });
});

// Vue.http.options.xhr = {withCredentials: true}; // 携带cookie
Vue.http.options.credentials = true;  // 携带鉴权
Vue.http.options.emulateJSON = true;  // form传输
// Vue.http.headers.common['X-CSRFToken'] = {% croftoken %};
// Vue.http.headers.post['Content-Type'] = 'multipart/form-data';
const API_ROOT = 'http://192.168.1.107:8080/api/';
export default Vue.resource(API_ROOT + '{api}' + '/');
