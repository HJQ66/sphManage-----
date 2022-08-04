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
          //设置最小值
          mini:0,
          //设置最大值
          max:100
        },
        yAxis:{
          //隐藏y轴
          show:false,
          //均分
          type:'category'
        },
        series:[
          {
            type:'bar',
            data: [78],
            barWidth:'10px',
            //设置背景颜色之前需要设置这个
            showBackground:true,
            //设置柱条的背景颜色
            backgroundStyle:{
              color:"#c0c0c0"
            },
            //是否显示标签
            label:{
              show:true,
              //设置标签的位置
              position:"right",
              //设置标签内容文字
              formatter:'|'
            }
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