import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import ReadAloud from '../components/ReadAloud.vue';
import SecondAndThirdReads from '../components/SecondAndThirdReads.vue';
import FourthAndFifthReads from '../components/FourthAndFifthReads.vue';
import MathRedirect from '../components/MathRedirect.vue';
import Grades23 from '../components/Grades23.vue';
import Grades456 from '../components/Grades456.vue';
import Parents from '../components/Parents.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/parents',
    name: 'Parents',
    component: Parents,
  },
  {
    path: '/readalouds',
    name: 'ReadAloud',
    component: ReadAloud,
  },
  {
    path: '/readalouds/grades23',
    name: 'SecondAndThirdReads',
    component: SecondAndThirdReads,
  },
  {
    path: '/readalouds/grades456',
    name: 'FourthAndFifthReads',
    component: FourthAndFifthReads,
  },
  {
    path: '/mathredirect',
    name: 'MathRedirect',
    component: MathRedirect,
  },
  {
    path: '/grades23',
    name: 'Grades23',
    component: Grades23,
  },
  {
    path: '/grades456',
    name: 'Grades456',
    component: Grades456,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
