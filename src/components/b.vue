<template>
  <div>
    {{XM}}
    <br />
    {{XB}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['realname']),
    XB() {
      return this.$store.state.gender
    },
    XM() {
      return this.$store.state.nickname
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
