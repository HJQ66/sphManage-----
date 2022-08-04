<template>
  <el-card>
    <div slot="header">
      <div class="headerTitle">
        <span>{{ title }}</span>
        <i class="el-icon-warning-outline"></i>
      </div>
      <span class="count">{{ count }}</span>
        <div class="mainChars">
            <slot name="firstCard">
            </slot>
            <slot name="secondCard">
            </slot>
            <slot name="thirdCard">
            </slot>
            <slot name="fourthCard">
            </slot>
        </div>
    </div>
    <div>
        <slot name="firstData"></slot>
        <slot name="secondData"></slot>
        <slot name="thirdData"></slot>
        <slot name="fourthData"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "count","footerData"],
};
</script>

<style scoped>
.headerTitle {
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 14px;
}
.count {
  display: inline-block;
  margin-top: 20px;
  font-size: 20px;
}
.mainChars{
    height: 40px;
}
</style>