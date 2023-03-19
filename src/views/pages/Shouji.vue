<script>
export default {
  name: "shouji"
};
</script>

<template>
  <div class="page1">
    <div class="page2">
      <div class="page3">
        <div><img src="../../assets/img/shoujipeijian.png" class="page3-img" alt=""></div>
        <div>
          <ul>
            <li><span>[全款预定xxx优惠]</span></li>
            <li>东方神起</li>
            <li>xxxxxxxxxxxxxxxxxxxxxx</li>
            <li>价格<span>46</span></li>
            <li>积分<span>2000</span></li>
          </ul>
          <div class="btn0">
            <el-button type="small">兑换</el-button>
            <el-button type="small">购买</el-button>
          </div>
        </div>
      </div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page1 {
  height: 1516px;
  background-color: #cdcdcd;
  width: 100vw;
  .page2 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 80px;
    padding-top: 30px;
    .page3 {
      width: 270px;
      height: 400px;
      border: 1px solid blanchedalmond;
      background-color: rgb(188, 162, 162);
      margin: 20px;
      .page3-img{
        width: 100%;
        height: 50%;
      }
      .page3-text{
        width: 180px;
        height: 100px;
        background-color: #0F8ECE ;
        opacity: .6;
        text-align: center;
        line-height: 100px;
        margin-top: -70px;
        margin-left: 40px;
        border-radius: 3px;
      }
      .page4{
        li{
          margin-left: 20px;
          margin-top: 5px;
        }
        .page4-more{
          margin-left: 100px;
        }
      }
      .btn0{
        margin-left: 120px;
        margin-top: -20px;
      }
    }
  }
}
</style>
