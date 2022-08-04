<template>
  <el-card>
    <div slot="header" class="header">
      <span>销售额类别占比</span>
      <div class="channelRadio">
        <el-radio-group v-model="channel" size="mini">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <!-- 图表内容区 -->
    <div class="content">
      <div class="echart" ref="echart"></div>
    </div>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  name: "FooterSale",
  data() {
    return {
      //收集单选框数据
      channel: "全部渠道",
      //配置图表的配置项
      myOptions: {
        tooltip: {
          trigger: "item",
        },
        //设置标题
        title:{
          text:"视频广告",
          left:'center',
          top:'middle',
          textStyle:{
            fontSize:18,
          },
          subtext:'1048',
          subtextStyle:{
            fontSize:14
          }
        },
        //图例组件
        legend: {
          left: "right",
          //图例列表垂直
          orient:'vertical',
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            data: [
              { value: 1048, name: "视频广告" },
              { value: 735, name: "搜索引擎" },
              { value: 580, name: "直接访问" },
              { value: 484, name: "邮件营销" },
              { value: 300, name: "联盟广告" },
            ],
          },
        ],
      },
      
    };
  },
  mounted() {
    let myEchart = echarts.init(this.$refs.echart);
    myEchart.setOption(this.myOptions);
    //给图表添加鼠标移动事件
    myEchart.on("mouseover",(params)=>{
      this.myOptions.title.text = params.data.name
      this.myOptions.title.subtext = params.data.value
      //重新设置option
      myEchart.setOption(this.myOptions)
    })
  },
};
</script>

<style scoped>
.header {
  position: relative;
}
.channelRadio {
  position: absolute;
  right: 0;
  top: -5px;
}
.header span {
  font-size: 14px;
  color: gray;
}
.content {
  width: 100%;
  height: 259px;
}
.echart {
  width: 100%;
  height: 100%;
}
</style>