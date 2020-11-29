<template>
  <div id="app">
    <Card bordered>
        <p slot="title">No border title</p>
        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
    </Card>
    <aa></aa>
    <bb></bb>
  </div>
</template>

<script>
import { aa, bb } from '@/components'
export default {
  name: 'App',
  components: { aa, bb },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
