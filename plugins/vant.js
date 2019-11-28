/* // 按需引入van组件
import Vue from 'vue';
import Button from 'vant/lib/button/index';
import Toast from 'vant/lib/toast/index';
// import Navbar from 'vant/lib/navbar/index';
import Field from 'vant/lib/field/index';
import CellGroup from 'vant/lib/cell-group/index'

import 'vant/lib/toast/index.css';
import 'vant/lib/button/index.css';
import 'vant/lib/field/index.css';
import 'vant/lib/cell-group/index.css';
// import 'vant/lib/navbar/index.css'

Vue.use(Button);
Vue.use(Toast);
// Vue.use(NavBar);
Vue.use(Field);
Vue.use(CellGroup); */

import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);