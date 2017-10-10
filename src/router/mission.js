import Mission from '../views/mission/mission.vue';
import Index from '../views/mission/index.vue';

export default {
  path: '/mission',
  component: Mission,
  children: [
    {
      path: '/',
      component: Index
    }
  ]
};
