<template>
  <el-row :gutter="10">
    <el-col :span="6">
      <Card title="销售额" count="￥ 126560">
        <template slot="firstCard">
          <div  class="firstCard">
            <span>周同比 56.66% <i class="el-icon-caret-top" style="color: red"></i></span>
            <span>同日比 19.676%<i class="el-icon-caret-bottom" style="color: green"></i></span>
          </div>
        </template>
        <template slot="firstData">
          <span style="font-size:14px">日销售额 ￥12345</span>
        </template>
      </Card>
    </el-col>
    <el-col :span="6">
      <Card title="访问量" count="88460">
        <template slot="secondCard">
          <SecondChart/>
        </template>
        <template slot="secondData">
          <span style="font-size:14px">日访问量 98732</span>
        </template>
      </Card>
    </el-col>
    <el-col :span="6">
      <Card title="支付笔数" count="8843">
        <template slot="thirdCard">
          <ThirdChart/>
        </template>
        <template slot="thirdData">
          <span style="font-size:14px">转化率 98%</span>
        </template>
      </Card>
    </el-col>
    <el-col :span="6">
      <Card title="运营启动效果" count="78%">
        <template slot="fourthCard">
          <FourthChart/>
        </template>
        <template slot="fourthData">
          <div class="fourthData">
            <span>周同比 12%<i class="el-icon-caret-top" style="color:red"></i></span>
            <span>日同比 33%<i class="el-icon-caret-bottom" style="color:green"></i></span>
          </div>
        </template>
      </Card>
    </el-col>
  </el-row>
</template>

<script>
import Card from './Card'
import SecondChart from './Card/SecondChart'
import ThirdChart from './Card/ThirdChart'
import FourthChart from './Card/FourthChart'
export default {
    name:'TopCard',
    components:{Card,SecondChart,ThirdChart,FourthChart}
}
</script>

<style scoped>
  .firstCard span{
    display: inline-block;
    font-size: 14px;
    margin: 20px 8px;
  }
  .fourthData span{
    font-size: 14px;
    display: inline-block;
    margin:0 10px;
  }
</style>