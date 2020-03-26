import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import ReadAloud from '../components/ReadAloud.vue';
import SecondAndThirdReads from '../components/SecondAndThirdReads.vue';
import FourthAndFifthReads from '../components/FourthAndFifthReads.vue';
// import Readaloud from '../components/Readaloud.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/readaloud',
    name: 'ReadAloud',
    component: ReadAloud,
  },
  {
    path: '/readaloud/secondandthirdreads',
    name: 'SecondAndThirdReads',
    component: SecondAndThirdReads,
  },
  {
    path: '/readaloud/fourthandfifthreads',
    name: 'FourthAndFifthReads',
    component: FourthAndFifthReads,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
