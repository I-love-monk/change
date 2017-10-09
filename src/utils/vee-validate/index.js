import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate';

import zh_CN from './zh_CN';

Validator.addLocale(zh_CN);
Vue.use(VeeValidate, { locale: 'zh_CN' });

// 自定义规则并设置错误信息
Validator.extend('mobile', {
  messages: {
    zh_CN: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
  }
});
