<template>
  <el-card>
    <div slot="header" class="header">
      <span>线上热门搜索</span>
    </div>
    <div>
      <!-- 中间图表内容 -->
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="chartsTitle">
            <span>搜索用户数<i class="el-icon-warning-outline"></i></span>
          </div>
          <div class="searchCount">
            <span>123123</span>
            <span
              >18.6<i class="el-icon-caret-top" style="color: red"></i
            ></span>
          </div>
          <!-- 图表 -->
          <div class="echart1" ref="echart1"></div>
        </el-col>
        <el-col :span="12">
          <div class="chartsTitle">
            <span>人均搜索次数<i class="el-icon-warning-outline"></i></span>
          </div>
          <div class="searchCount">
            <span>3.3</span>
            <span
              >28.6<i class="el-icon-caret-bottom" style="color: green"></i
            ></span>
          </div>
          <!-- 图表 -->
          <div class="echart2" ref="echart2"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" label="排名" width="80" align="center">
      </el-table-column>
      <el-table-column prop="name" label="搜索关键字"> </el-table-column>
      <el-table-column prop="address" label="用户数" sortable>
      </el-table-column>
      <el-table-column prop="address" label="周涨幅" sortable>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination layout="prev, pager, next" :pager-count="5" :total="100" style="text-align:center"> </el-pagination>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  name: "FooterSearch",
  data() {
    return {
      myEchart1: {},
      myEchart2: {},
      //配置图表的对象
      myOptions: {
        xAxis: {
          //隐藏x轴
          show: false,
          //均分
          type: "category",
        },
        yAxis: {
          //隐藏y轴
          show: false,
        },
        series: [
          {
            type: "line",
            lineStyle: {
              color: "skyblue",
            },
            //隐藏拐点
            itemStyle: {
              opacity: 0,
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
                    color: "skyblue", // 0% 处的颜色
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
        //设置提示
        tooltip: {},
        //设置坐标轴位置
        grid: {
          left: 0,
          top: 5,
          right: 0,
          bottom: 0,
        },
      },
      //图表1的数据
      echart1Data: [30, 10, 60, 30, 45, 50],
      //图表2的数据
      echart2Data: [40, 90, 80, 40, 45, 100],
      //存储表格的数据
      tableData: [{}],
    };
  },
  mounted() {
    //初始化图表1
    this.myEchart1 = echarts.init(this.$refs.echart1);
    //将图表1的数据合并到图表配置项中
    this.myOptions.series[0].data = this.echart1Data;
    this.myEchart1.setOption(this.myOptions);

    //初始化图表2
    this.myEchart2 = echarts.init(this.$refs.echart2);
    //将图表2的数据合并到图表配置项中
    this.myOptions.series[0].data = this.echart2Data;
    this.myEchart2.setOption(this.myOptions);
  },
};
</script>

<style scoped>
.header span {
  font-size: 14px;
  color: gray;
}
.chartsTitle {
  margin: 10px 0;
}
.chartsTitle span {
  font-size: 14px;
}
.searchCount span {
  display: inline-block;
  margin: 0 10px;
}
.echart1,
.echart2 {
  width: 100%;
  height: 60px;
}
</style>