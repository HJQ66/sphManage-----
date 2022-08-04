<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <FooterSearch/>
    </el-col>
    <el-col :span="12">
      <FooterSale/>
    </el-col>
  </el-row>
</template>

<script>
import FooterSearch from './FooterSearch'
import FooterSale from './FooterSale'
export default {
    name:'FooterCard',
    components:{
      FooterSearch,
      FooterSale
    }
}
</script>

<style scoped>

</style>