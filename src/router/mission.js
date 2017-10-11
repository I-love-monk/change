import Mission from '../views/mission/mission.vue';
import Index from '../views/mission/index.vue';
import Get from '../views/mission/get.vue';
import Errs from '../views/mission/errs.vue';
import Upload from '../views/mission/upload.vue';
import Search from '../views/mission/search.vue';

export default {
  path: '/mission',
  component: Mission,
  children: [
    {
      path: '/',
      component: Index
    },
    {
      path: 'get',
      component: Get
    },
    {
      path: 'errs',
      component: Errs
    },
    {
      path: 'upload',
      component: Upload
    },
    {
      path: 'search',
      component: Search
    }
  ]
};
