<script>
export default {
  name: "paging",
  data(){
    return{

    }
  },
  mounted(){
    console.log('111111')
    this.$axios.get('/playlist/catlist',{cookie:res.data.cookie}).then((res)=>{
              console.log(res)
              console.log(res.data)
              
          })
  },
  methods:{
    
  }
};
</script>

<template>
  <div class="page1">
    <div class="page2">
      <div class="page3">
        <div><img src="../../assets/img/page1.png" class="page3-img" alt=""></div>
        <div class="page3-text"><span>流行</span></div>
       <div class="page4">
        <ul>
          <li>1 <span>某某歌曲</span> <span>张国荣</span>  <i class="el-icon-caret-right"></i>   <i class="el-icon-plus"></i></li>
          <li>2 <span>某某歌曲</span> <span>张国荣</span>  <i class="el-icon-caret-right"></i>   <i class="el-icon-plus"></i></li>
          <li>3 <span>某某歌曲</span> <span>张国荣</span>  <i class="el-icon-caret-right"></i>   <i class="el-icon-plus"></i></li>
          <li>4 <span>某某歌曲</span> <span>张国荣</span>  <i class="el-icon-caret-right"></i>   <i class="el-icon-plus"></i></li>
          <span class="page4-more">更多</span>
        </ul>
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
      height: 350px;
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
    }
  }
}
</style>
