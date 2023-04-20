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

      SubsongList: [],
      icom1: true,
      songlist1: [],
      songlist2: [],
      // 所有歌曲
      songList: [],
    };
  },
  mounted() {
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
        });
    });
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

<template></template>
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
