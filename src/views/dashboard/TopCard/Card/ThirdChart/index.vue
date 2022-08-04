<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'ThirdChart',
    mounted(){
      let myEcharts = echarts.init(this.$refs.echarts)
      myEcharts.setOption({
        xAxis:{
          //隐藏x轴
          show:false,
          //均分
          type:'category'
        },
        yAxis:{
          //隐藏y轴
          show:false
        },
        series:[
          {
            type:'bar',
            data: [100, 200, 150, 355, 230, 300, 200, 398],
            //设置柱子的颜色
            color:'skyblue'
          }
        ],
        //设置坐标轴位置
        grid:{
          left:0,
          top:0,
          bottom:0,
          right:0
        },
        //提示
        tooltip:{}
      })
    }
}
</script>

<style scoped>
  .echarts{
    width: 100%;
    height: 60px;
  }
</style>