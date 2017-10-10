import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;  // form传输
// Vue.http.headers.post['Content-Type'] = 'multipart/form-data';
const API_ROOT = 'http://192.168.1.120:8080/api/';
export default Vue.resource(API_ROOT + '{api}' + '/');
