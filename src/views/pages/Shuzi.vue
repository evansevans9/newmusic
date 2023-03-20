<script>
// 数字专辑
export default {
  name: "shuzi"
};
</script>

<template>
  <div class="shuzi">
    <!-- <div class="shuzi1"></div>
    <div class="shuzi2"></div>
    <div class="shuzi3"></div> -->
    <div class="shuzi1">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="周榜" name="1">
          <div class="shuzi1-c0">
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </el-collapse-item>
      </el-collapse>



      <el-collapse v-model="activeNames" @change="handleChange" class="el-collapse-item__header1">
        <el-collapse-item title="本周最新" name="1">
          <div class="shuzi1-c0">
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </el-collapse-item>
      </el-collapse>



      <el-collapse v-model="activeNames" @change="handleChange" class="el-collapse-item__header1">
        <el-collapse-item title="本周最热" name="1">
          <div class="shuzi1-c0">
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </el-collapse-item>
      </el-collapse>

      <el-collapse v-model="activeNames" @change="handleChange" class="el-collapse-item__header1">
        <el-collapse-item title="原创专辑" name="1">
          <div class="shuzi1-c0">
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="shuzi1-c1">
            <div class="page3">
              <div>
                <img
                  src="../../assets/img/shuzi.png"
                  class="page3-img"
                  alt=""
                />
              </div>
              <div>
                <ul>
                  <li><span>Perfect(Cadillac X DONGHAE0</span></li>
                  <li>歌手--xxxxxx</li>
                  <li>发行时间：2017年12月27日</li>
                  <li>收藏:99</li>
                </ul>
                <div class="btn0">
                  <span class="btn0-pri">￥ 15</span>
                  <el-button type="small">购买</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<style lang="less" scoped>
.shuzi {
  height: 4416px;
  background-color: #cdcdcd;
  width: 100vw;
  .shuzi1 {
    padding: 20px;
    /deep/ .el-collapse-item__header {
      padding-left: 20px;
    }
    .shuzi1-c0{
      display: flex;
      flex-wrap: wrap;
    }
 
  }
}
.page3 {
  width: 300px;
  height: 450px;
  border: 1px solid blanchedalmond;
  background-color: rgb(224, 202, 202);
  margin: 20px;
  .page3-img {
    width: 100%;
    height: 100%;
    background-size: 100%;
  }
  ul li:nth-child(2) {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #999999;
  }
  ul li:nth-child(3) {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #999999;
  }
  ul li:nth-child(4) {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #999999;
  }

  .btn0 {
    margin-left: 120px;
    // margin-top: ;
    .btn0-pri {
      width: 31px;
      height: 14px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #fe0000;
    }
  }
}
/deep/ .el-collapse-item__header1{
  margin-top: 20px;
}
</style>
