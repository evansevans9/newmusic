<script>
export default {
  name: "paging",
  data() {
    return {
      act: "",
      list1: [
        { names: "飙升榜", id: 19723756 },
        { names: "新歌榜", id: 3779629 },
        { names: "原创榜", id: 2884035 },
        { names: "云音乐说唱榜", id: 991319590 },
        { names: "云音乐古典榜", id: 71384707 },
        { names: "云音乐韩语榜", id: 745956260 },
        { names: "KTV唛榜", id: 21845217 },
        { names: "美国Billboard榜", id: 60198 },
        { names: "日本Oricon榜", id: 60131 },
        { names: "云音乐ACG动画榜", id: 3001835560 },
        { names: "听歌识曲榜", id: 6688069460 },
        { names: "云音乐摇滚榜", id: 1978921795 },
      ],
      // '原创榜',2884035,
      // '热歌榜',3778678,
      // '云音乐说唱榜',991319590,
      // '云音乐古典榜',71384707,
      // '云音乐电音榜',1978921795,
      // '云音乐ACG榜',71385702,
      // '云音乐韩语榜',745956260,
      // '云音乐国电榜',10520166,
      // 'UK排行榜周榜',180106,
      // 'KTV唛榜',21845217,
      // '美国Billboard榜',60198,
      // 'Beatport全球电子舞曲榜',3812895,
      // '日本Oricon榜',60131,
      // '云音乐欧美新歌榜',2809577409,
      // '法国NRJ Vos Hits周榜',27135204,
      // '云音乐ACG动画榜',3001835560,
      // '云音乐ACG游戏榜',3001795926,
      // '乡村音乐排行榜',3112516681,
      // '云音乐日语榜',5059644681,
      // '云音乐摇滚榜',1978921795,
      // '云音乐古风榜',5059642708,
      // '潜力爆款榜',5338990334,
      // '云音乐民谣榜',5059661515,
      // '听歌识曲榜',6688069460,
      // '网络热歌榜',6723173524,
      // '俄语榜',6732051320,
      // '越南语榜',6732014811

      SubsongList: [],
      icom1: true,
      songlist1: [],
      songlist2: [],
      // 所有歌曲
      songList: [],
    };
  },
  mounted() {
    // this.$axios
    //   .get("/playlist/catlist", {
    //     params: { cookie: localStorage.getItem("token") }
    //   })
    //   .then(res => {
    //     console.log(res, "000000000000000");
    //     console.log(res.data.sub, "11111111111111");
    //     this.SubsongList = res.data.sub
    //     console.log(this.SubsongList,'nnn')
    //     this.SubsongList =  this.SubsongList.slice(0,12)
    //     // console.log(this.SubsongList ,'fff')
    //   }).then(
    //   );
    this.list1.forEach((list) => {
      this.$axios
        .get("playlist/track/all", {
          params: { id: list.id, limit: 4, offset: 0 },
        })
        .then((res) => {
          this.songList.push({
            name: list.names,
            list: res.data.songs.map((song) => {
              return {
                id: song.id,
                name: song.name + (song.tns ? song.tns[0] : ""),
                singer: song.ar[0].name,
              };
            }),
          });
          // this.songlist1 = res.data.privileges;
          // this.songlist2 = res.data.songs;
          // console.log(this.songlist2,'0000000')
        });
    });
    // this.$axios
    //   .get("/playlist/track/all", {
    //     params: { id: 19723756, limit: 4, offset: 0 }
    //   })
    //   .then(res => {
    //     console.log(res, "3333333");
    //     this.songlist1 = res.data.privileges;
    //     this.songlist2 = res.data.songs;
    //     console.log(this.songlist2,'0000000')
    //   });
  },
  methods: {
    huanIcon(event) {
      this.icom1 = !this.icom1;
      console.log(e, "haha");
    },
    moreSonge() {},
  },
};
</script>

<template>
  <div class="page1">
    <div class="page2">
      <div v-for="songs in songList">
        <div>{{ songs.name }}</div>
        <div v-for="song in songs.list">
          <span>{{ song.name }}</span>
          <span>{{ song.singer }}</span>
        </div>
      </div>
      <!--      <div class="page3" v-for="(item, index) in list1" :key="index">-->
      <!--        <div>-->
      <!--          <img src="../../assets/img/page1.png" class="page3-img" alt="" />-->
      <!--        </div>-->
      <!--        <div class="page3-text">-->
      <!--          <span>{{ item.names }}</span>-->
      <!--        </div>-->
      <!--        <div class="page4">-->
      <!--          <ul >-->
      <!--            <li v-for="(item,index) in songList" :key='index'>-->
      <!--              <span>{{ item.name }}</span> <span>{{ item.singer }}</span>-->
      <!--              <i-->
      <!--              @click="huanIcon(item.id)"-->
      <!--                :class="icom1 ? 'el-icon-caret-right' : 'el-icon-video-pause'"-->
      <!--              ></i>-->
      <!--              <i class="el-icon-plus"></i>-->
      <!--            </li>-->
      <!--            &lt;!&ndash; <li>-->
      <!--              2 <span>某某歌曲</span> <span>张国荣</span>-->
      <!--              <i-->
      <!--                @click="huanIcon"-->
      <!--                :class="icom1 ? 'el-icon-caret-right' : 'el-icon-delete'"-->
      <!--              ></i>-->
      <!--              <i class="el-icon-plus"></i>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--              3 <span>某某歌曲</span> <span>张国荣</span>-->
      <!--              <i-->
      <!--                @click="huanIcon"-->
      <!--                :class="icom1 ? 'el-icon-caret-right' : 'el-icon-delete'"-->
      <!--              ></i>-->
      <!--              <i class="el-icon-plus"></i>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--              4 <span>某某歌曲</span> <span>张国荣</span>-->
      <!--              <i-->
      <!--                @click="huanIcon"-->
      <!--                :class="icom1 ? 'el-icon-caret-right' : 'el-icon-delete'"-->
      <!--              ></i>-->
      <!--              <i class="el-icon-plus"></i>-->
      <!--            </li> &ndash;&gt;-->
      <!--            <span class="page4-more" @click="moreSonge">更多</span>-->
      <!--          </ul>-->
      <!--        </div>-->
      <!--      </div>-->
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
