import Personal from '../views/personal/personal.vue';
import Essential from '../views/personal/essential.vue';
import PersonalMessage from '../views/personal/personalMessage.vue';
import Perfect from '../views/personal/perfect.vue';

export default {
  path: '/personal',
  component: Personal,
  children: [
    {
      path: 'essential',
      component: Essential
    },
    {
      path: 'personalMessage',
      component: PersonalMessage
    },
    {
      path: 'perfect',
      component: Perfect
    }
  ]
};
