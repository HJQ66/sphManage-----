<template>
  <el-card style="margin: 20px 0">
    <!-- 头部导航栏 -->
    <div class="headerNav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售额" name="saleCount"></el-tab-pane>
        <el-tab-pane label="访问量" name="visitCount"></el-tab-pane>
      </el-tabs>
      <div class="rightTime">
        <span @click="nowDay">今日</span>
        <span @click="nowWeek">本周</span>
        <span @click="nowMonth">本月</span>
        <span @click="nowYear">本年</span>
        <!-- 日期选择器 -->
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          style="width:250px;margin-left:20px"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <el-row :gutter="10">
        <el-col :span="18">
          <h4>{{barTitle}}趋势</h4>
          <!-- 中间矩形图表 -->
          <div class="echarts" ref="echarts"></div>
        </el-col>
        <el-col :span="6">
          <h4>门店{{barTitle}}</h4>
          <ul class="saleList">
            <li>
              <span class="topthree">1</span>
              <span>肯德基</span>
              <span>8745432</span>
            </li>
            <li>
              <span class="topthree">2</span>
              <span>麦当劳</span>
              <span>6666666</span>
            </li>
            <li>
              <span class="topthree">3</span>
              <span>海底捞</span>
              <span>5554321</span>
            </li>
            <li>
              <span>4</span>
              <span>中国汉堡</span>
              <span>4567892</span>
            </li>
            <li>
              <span>5</span>
              <span>德克士</span>
              <span>4321233</span>
            </li>
            <li>
              <span>6</span>
              <span>汉堡王</span>
              <span>3211232</span>
            </li>
            <li>
              <span>7</span>
              <span>华莱士</span>
              <span>234321</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
import dayjs from 'dayjs'
export default {
  name: "sale",
  data() {
    return {
      //控制tab栏当前的哪一项
      activeName: "saleCount",
      //收集日期选择器的数据
      date:[],
      //矩形图表对象
      myEcharts:{},
      //存储柱状图的标题
      barTitle:'销售额',
      //中间矩形图表配置项
      myOptions:{
        xAxis:{
          show:true,
          type:'category',
          data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
        },
        yAxis:{},
        series:[
          {
            type:'bar',
            data:[100,200,600,150,250,700,300,400,250,300,700,100],
            //设置柱条的颜色
            itemStyle:{
              color:'skyblue'
            },
          }
        ],
        //设置坐标轴的位置
        grid:{
          right:30,
          top:10,
          bottom:40
        },
        //设置提示
        tooltip:{}
      }
    };
  },
  mounted(){
    //初始化图表
    this.myEcharts = echarts.init(this.$refs.echarts)
    this.myEcharts.setOption(this.myOptions)
  },
  methods: {
    //点击tab的回调
    handleClick(){
      this.barTitle = this.activeName=='saleCount'?'销售额':"访问量"
      if(this.activeName=="saleCount"){
        this.myOptions.series[0].data = [100,200,600,150,250,700,300,400,250,300,700,100]
        this.myEcharts.setOption(this.myOptions)
      }else{
        this.myOptions.series[0].data = [200,300,600,200,700,800,300,500,250,400,700,300]
        this.myEcharts.setOption(this.myOptions)
      }
    },
    //点击获取当天的日期
    nowDay(){
      this.date = []
      let day = dayjs().format("YYYY-MM-DD")
      this.date.push(day,day)
    },
    //点击获取本周的日期
    nowWeek(){
      this.date = []
      //获取本周星期一
      let start = dayjs().day(1).format("YYYY-MM-DD")
      //获取本周星期日
      let end = dayjs().day(7).format("YYYY-MM-DD")
      this.date.push(start,end)
      // this.date.push(end)
    },
    //点击获取本月的日期
    nowMonth(){
      this.date = []
      let start = dayjs().startOf("month").format("YYYY-MM-DD")
      let end = dayjs().endOf("month").format("YYYY-MM-DD")
      this.date.push(start,end)
    },
    //点击获取本年的日期
    nowYear(){
      this.date = []
      let start = dayjs().startOf("year").format("YYYY-MM-DD")
      let end = dayjs().endOf("year").format("YYYY-MM-DD")
      this.date.push(start,end)
    },
  },
};
</script>

<style scoped>
.headerNav {
  position: relative;
}
.rightTime {
  position: absolute;
  right: 0;
  top: 0px;
}
.rightTime span{
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
.content{
  height: 300px;
}
.echarts{
  height: 300px;
  width: 100%;
}
.saleList{
  margin: 0;
  padding: 0;
}
.saleList li{
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.saleList li span:nth-child(1){
  width: 20px;
  display: inline-block;
  text-align: center;
}
.saleList li span:nth-child(2){
  width: 120px;
  display: inline-block;
}
.saleList li span:nth-child(3){
  width: 80px;
  display: inline-block;
  text-align: right;
}
.topthree{
  width: 20px;
  height: 20px;
  display: inline-block;
  background: black;
  color: white;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
}
</style>