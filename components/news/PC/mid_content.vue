<template>
  <div class="mid-content">
    <div class="mid-cont-label">
      <div class="btn-1" :class="{'active-label':label==1}" @click="handleClickLabel(1)">最新更新</div>
      <div class="btn-2" :class="{'active-label':label==2}" @click="handleClickLabel(2)">热门推荐</div>
    </div>
    <div class="mid-cont-wrap">
      <div class="news-list-wrap">
        <div v-for="(item,index) of listnews" :key="index" class="news-wrap">
          <div class="user-wrap">
            <div class="user-img">
              <img :src="item.user.imgUrl" width="100%" />
            </div>
            <div class="user-name">{{ item.user.username }}</div>
            <div class="in">in</div>
            <div class="news-info">{{ item.info }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div v-if="index%2==0?true:false" class="img">
            <img :src="item.imgUrl" width="100%" />
          </div>
          <div class="title-wrap">{{ item.title_info }}</div>
          <div v-if="index%2==1?true:false" class="img" style="margin-top:15px;">
            <img :src="item.imgUrl" width="100%" />
          </div>
          <div class="word-wrap">{{ item.describe }}</div>
          <div class="state">
            <div class="left-btns">
              <div class="browse">
                <div class="iconfont icon">&#xe648;</div>
                <div class="word">{{ item.browse }}</div>
              </div>
              <div class="zan">
                <div class="iconfont icon">&#xe630;</div>
                <div class="word">{{ item.praise }}</div>
              </div>
              <div class="pl">
                <div class="iconfont icon">&#xe681;</div>
                <div class="word">{{ item.comments }}</div>
              </div>
            </div>
            <div class="right-btns">
              <div class="iconfont icon">&#xe667;</div>
              <div class="iconfont icon">&#xe666;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      label: 1,
      listnews: [
        {
          id: 1,
          praise: 39,
          browse: 23,
          comments: 23,
          user: {
            username: '程序员阿森',
            imgUrl: require('../../../assets/images/art/art1.jpg')
          },
          type: 1,
          title: '品贤画室招生呐！',
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          imgUrls: [
            { id: 1, imgUrl: require('../../../assets/images/art/art1.jpg') },
            { id: 2, imgUrl: require('../../../assets/images/art/art1.jpg') },
            { id: 3, imgUrl: require('../../../assets/images/art/art1.jpg') }
          ],
          info: '品贤画室',
          time: '2019-12-12'
        },
        {
          user: {
            username: '程序员阿森',
            imgUrl: require('../../../assets/images/art/art1.jpg')
          },
          id: 2,
          praise: 39,
          browse: 34,
          comments: 23,
          type: 1,
          title: '品贤画室招生呐！',
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          imgUrls: [{ id: 1, imgUrl: require('../../../assets/images/art/art1.jpg') }],
          info: '品贤画室',
          time: '2019-12-12'
        },
        {
          user: {
            username: '程序员阿森',
            imgUrl: require('../../../assets/images/art/art1.jpg')
          },
          id: 3,
          praise: 39,
          browse: 32,
          comments: 23,
          type: 1,
          title: '品贤画室招生呐！',
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          imgUrls: [{ id: 1, imgUrl: require('../../../assets/images/art/art1.jpg') }, { id: 2, imgUrl: require('../../../assets/images/art/art1.jpg') }],
          info: '品贤画室',
          time: '2019-12-12'
        }, {
          user: {
            username: '程序员阿森',
            imgUrl: require('../../../assets/images/art/art1.jpg')
          },
          id: 4,
          praise: 39,
          browse: 25,
          comments: 23,
          type: 1,
          title: '品贤画室招生呐！',
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          imgUrls: [{ id: 1, imgUrl: require('../../../assets/images/art/art1.jpg') }],
          info: '品贤画室',
          time: '2019-12-12'
        }, {
          user: {
            username: '程序员阿森',
            imgUrl: require('../../../assets/images/art/art1.jpg')
          },
          id: 5,
          praise: 39,
          browse: 64,
          comments: 23,
          type: 1,
          title: '品贤画室招生呐！',
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          imgUrls: [{ id: 1, imgUrl: require('../../../assets/images/art/art1.jpg') }, { id: 2, imgUrl: require('../../../assets/images/art/art1.jpg') }, { id: 3, imgUrl: require('../../../assets/images/art/art1.jpg') }],
          info: '品贤画室',
          time: '2019-12-12'
        }]
    }
  },
  methods: {
    handleClickLabel (val) {
      this.label = val;
    }
  }
}
</script>

<style scoped>
.mid-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei UI', 'Microsoft YaHei', 'Source Han Sans CN', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 670px;
}
/* tabel切换样式 */
.mid-cont-label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.btn-1,
.btn-2 {
  cursor: pointer;
  font-size: 14px;
  color: #818181;
  line-height: 22px;
}
.btn-2::before {
  content: '|';
  font-size: 14px;
  color: #818181;
  margin: 0px 8px;
  font-weight: 500;
}
.active-label {
  color: #000;
  font-weight: bold;
}
/* 文章列表样式 */
.news-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
.user-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  padding: 15px;
  position: relative;
}
.user-img {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background: #e26262;
}
.user-name {
  font-size: 14px;
  color: #2d2e2f;
  display: inline;
  margin-left: 10px;
  cursor: pointer;
}
.user-name:hover {
  color: #337ab7;
}
.in {
  color: #818181;
  margin: 0px 15px;
}
.news-info {
  color: #e00;
}
.time {
  float: right;
  position: absolute;
  right: 20px;
  top: 25px;
  color: #818181;
  font-size: 14px;
}
.img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.title-wrap {
  margin-top: 15px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
}
.word-wrap {
  margin-top: 15px;
  font-size: 12px;
  color: #818181;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.state {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.left-btns,
.right-btns {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.state .icon {
  font-size: 18px;
  margin-right: 2px;
  cursor: pointer;
}
.zan,
.browse,
.pl {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 10px 0px 5px;
}
.word {
  font-size: 14px;
  color: black;
}
</style>
