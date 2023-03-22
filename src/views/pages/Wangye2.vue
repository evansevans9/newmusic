<script>

export default {
  name: "wangye2",
};
</script>

<template>
  <div class="page1">
    <div class="page1-top">

    </div>
  </div>
</template>
<style lang="less" scoped>

.page1 {
  height: 1516px;
  background-color: #cdcdcd;
  width: 100vw;
  .page1-top{
    width: 100vw;
    height: 400px;
    background-color: #fff;
  }
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
        // margin-top: ;
      }
    }
  }
}
</style>
