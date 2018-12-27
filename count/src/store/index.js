/**
 * 1.入口，将所有的分着的命名空间引入过来
 */

// 引入
import Vue from 'vue';
import Vuex from 'vuex';

// 引入其中一个命名空间
import app from './models/app';

// 中间件挂载Vuex
Vue.use(Vuex)

// 开始实例 并 抛出
export default new Vuex.Store({
    modules : {
        app 
    }
})



