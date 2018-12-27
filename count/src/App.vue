<template>
  <div>
        <button @click="changeNumber('+')">+</button>
        <span>{{this.$store.state.app.number}}</span>
        <button @click="changeNumber('-')">-</button>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$store.state.app.number)
        },

        // 事件
        methods: {
            changeNumber(type) {
                console.log(type)
                this.$store.commit('app/assignment',{payload:type})
                //    this.$store.commit({
                //     type: 'assignment',
                //     payload: type
                // })
            }
        }
    }
</script>

<style lang="scss">

</style>
