<template>
  <div class="hello">
    <h1>{{userinfo.age}}--{{pA}}--{{$store.getters.money_us}}</h1>
    <h2>{{money_us}}</h2>
    <hr />
    <h1>{{userinfo.nickname}}</h1>
    <button @click="addAge({num:5})">+1</button>
  </div>
</template>

<script>
import { MUTATION_ADD_AGE } from '@/store'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    pA() {
      return this.price / 7
    },
    ...mapGetters(['money_us']),
    // ...mapState(['age', 'nickname']),
    ...mapState(['userinfo']),
  },
  data() {
    return {
      price: 200,
    }
  },
  created() {
    let res = this.getUserInfo()
    // res.then((res) => {
    //   console.log(res)
    // })
  },
  methods: {
    ...mapActions(['getUserInfo']),
    ...mapMutations([MUTATION_ADD_AGE]),
    // addAge() {
    //   this.$store.commit('addAge', { num: 5 })
    // },
    //调试工具监测不到
    // addAge() {
    //   this.$store.state.money += 5
    // },
  },
}
</script>

<style scoped>
</style>
