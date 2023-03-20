<script>
export default {
  name: "paging",
  data() {
    return {

      SubsongList: [],
      icom1:true
    };
  },
  mounted() {
    this.$axios
      .get("/playlist/catlist", {
        params: { cookie: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res, "000000000000000");
        // console.log(res.data.sub, "11111111111111");
        this.SubsongList = res.data.sub
        console.log(this.SubsongList,'nnn')
        this.SubsongList =  this.SubsongList.slice(0,12)
        // console.log(this.SubsongList ,'fff')
      }).then(

      );

      this.$axios
      .get("/playlist/track/all", {
        params: { id:1,limit:10,offset:0 }
      })
      .then(res => {
        console.log(res, "3333333");
        console.log(res.data.sub, "44444444");
      });

  },
  methods: {
    huanIcon(){
      this.icom1 = !this.icom1
    }
  }
};
</script>

<template>
  <div class="page1">
    <div class="page2">
      <div class="page3" v-for="(item,index) of this.SubsongList" :key="index">
        <div>
          <img src="../../assets/img/page1.png" class="page3-img" alt="" />
        </div>
        <div class="page3-text"><span>{{ item.name }}</span></div>
        <div class="page4">
          <ul>
            <li>
              1 <span>某某歌曲</span> <span>张国荣</span>
              <i @click="huanIcon" :class="icom1 ? 'el-icon-caret-right' :'el-icon-delete'"></i> <i class="el-icon-plus"></i>
            </li>
            <li>
              2 <span>某某歌曲</span> <span>张国荣</span>
              <i @click="huanIcon" :class="icom1 ? 'el-icon-caret-right' :'el-icon-delete'"></i> <i class="el-icon-plus"></i>
            </li>
            <li>
              3 <span>某某歌曲</span> <span>张国荣</span>
              <i @click="huanIcon" :class="icom1 ? 'el-icon-caret-right' :'el-icon-delete'"></i> <i class="el-icon-plus"></i>
            </li>
            <li>
              4 <span>某某歌曲</span> <span>张国荣</span>
              <i @click="huanIcon" :class="icom1 ? 'el-icon-caret-right' :'el-icon-delete'"></i> <i class="el-icon-plus"></i>
            </li>
            <span class="page4-more">更多</span>
          </ul>
        </div>
      </div>
      <!-- <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div>
      <div class="page3"></div> -->
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
      .page3-img {
        width: 100%;
        height: 50%;
      }
      .page3-text {
        width: 180px;
        height: 100px;
        background-color: #0f8ece;
        opacity: 0.6;
        text-align: center;
        line-height: 100px;
        margin-top: -70px;
        margin-left: 40px;
        border-radius: 3px;
        span {
          width: 50px;
          height: 24px;
          font-size: 24px;
          font-family: FZFYSJW;
          font-weight: normal;
          color: #ffffff;
          line-height: 72px;
        }
      }
      .page4 {
        li {
          margin-left: 20px;
          margin-top: 5px;
        }
        .page4-more {
          margin-left: 100px;
        }
      }
    }
  }
}
</style>
