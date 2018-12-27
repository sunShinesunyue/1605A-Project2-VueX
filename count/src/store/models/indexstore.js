/**
 * 其中一个命名空间
 */

// 模块中存储的数据
const state = {
    number:1000
}

// 模块中的同步改变
const mutations = {
    assignment(state,action) {
        state.number = action.payload ==='+'? state.number+1 : state.number-1
    }
}

// 抛出
export default {
    namespaced:true, // 命名空间
    state,
    mutations //返回出去
}
