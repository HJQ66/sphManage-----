<template>
  <div class="dashboard-container">
    <TopCard/>
    <Sale/>
    <FooterCard/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopCard from './TopCard'
import Sale from './Sale'
import FooterCard from './FooterCard'
export default {
  name: 'Dashboard',
  components:{TopCard,Sale,FooterCard},
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
