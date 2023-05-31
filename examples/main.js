import Vue from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
Vue.use(Antd);

import TbComp, { utils } from '../lib/tb-comp.es';
import '../lib/style.css';
Vue.use(TbComp);

console.log('utils', utils);

new Vue({
	el: '#app',
	render: (h) => h(App),
});
