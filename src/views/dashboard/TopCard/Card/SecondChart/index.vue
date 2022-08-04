<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "SecondChart",
  mounted() {
    let myEcharts = echarts.init(this.$refs.echarts);
    myEcharts.setOption({
      xAxis: {
        show: false,
        //均分
        type: "category",
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [100, 200, 150, 355, 230, 300, 200, 398],
          //设置拐点的样式
          itemStyle: {
            opacity: 0,
          },
          //设置线条颜色
          lineStyle: {
            color: "pink",
          },
          //设置区域填充样式
          areaStyle: {
            //将区域填充样式设置为渐变
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "pink", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "white", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      tooltip: {},
      //设置坐标轴的位置
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 5,
      },
    });
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 60px;
}
</style>