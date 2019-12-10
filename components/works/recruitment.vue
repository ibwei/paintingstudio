<template>
  <div id="recruitment">
    <div class="recruitment">
      <div class="title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <div class="recruitment-content">
        <div
          v-for="(item, index) of recruitments"
          :key="index"
          class="word"
          @click="navToCourse(item)"
        >
          <div class="img">
            <img :src="item.imgUrl" alt width="100%" class="pc_imgUrl" />
            <img :src="item.phone_imgUrl" alt heihgt="100%" class="phone_imgUrl" />
          </div>
          <div class="cont">
            <div class="cont-title" v-html="item.title"></div>
            <div class="cont-info">
              <span class="tag">课程性质：</span>
              <tag :infos="item.infos" />
            </div>
            <div class="cont-intr" v-html="item.intrduce"></div>
            <div class="cont-rate">
              <span class="rate">学生评分：</span>
              <van-rate
                v-model="item.rate"
                :size="18"
                readonly
                allow-half
                color="#ee0a24"
                void-color="#e00"
              />
            </div>
            <div class="cont-number">
              <span>
                已有
                <span class="number">{{ item.number }}</span>
                人加入学习
              </span>
              <div class="button">了解详情</div>
            </div>
          </div>
        </div>
      </div>
      <div class="phone-content">
        <div
          v-for="(item, index) of recruitments"
          :key="index"
          class="phone-word"
          :style="{ 'background-color': item.color }"
          @click="navToCourse(item)"
        >
          <div class="icon iconfont" v-html="item.icon"></div>
          <div class="phone-title">{{ item.title }}</div>
          <span class="line">为兴趣,就现在</span>
          <span v-if="index!==0" class="icon iconfont1">&#xe61c;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTitle from '../common/vTitle';
import tag from './components/tagrandtype.vue';
export default {
  components: {
    vTitle,
    tag
  },
  data () {
    return {
      initTtile: {
        cnTitle: '热门课程',
        enTitle: 'Hot Course Availabel',
        mode: 'red',
        icon: '&#xe680;'
      },

      recruitments: [
        {
          index: 1,
          phoneColor: '#fff',
          icon: '&#xe672;',
          imgUrl: require('../../assets/images/index/国画.jpg'),
          phone_imgUrl: require('../../assets/images/index/国画_phone.jpg'),
          title: '油画定制课',
          intrduce:
            '油画定制课专属于你的艺术油画定制课专属于你的艺术短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: 'rgb(250,76,51)',
          number: 599,
          rate: 3,
          infos: ['有趣', '有技术含量', '从零开始']
        },
        {
          index: 2,
          phoneColor: '#fff',
          icon: '&#xe60c;',
          imgUrl: require('../../assets/images/index/留学生.jpg'),
          phone_imgUrl: require('../../assets/images/index/留学生_phone.jpg'),
          title: '体验课进行时',
          intrduce:
            '体验课进行时素描、水彩任你选体验课进行时素描、水彩任你选短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: '#FFB900',
          number: 599,
          rate: 3.5,
          infos: ['有趣', '有技术含量', '从零开始']
        },
        {
          index: 3,
          phoneColor: '#fff',
          icon: '&#xe624;',
          imgUrl: require('../../assets/images/index/艺术生.jpg'),
          phone_imgUrl: require('../../assets/images/index/艺术生_phone.jpg'),
          title: '绘画兴趣班',
          intrduce:
            '短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: 'rgb(0,172,236)',
          number: 599,
          rate: 5,
          infos: ['有趣', '有技术含量', '从零开始']
        }
      ]
    };
  },
  methods: {
    navToCourse (item) {
      this.$router.push({ path: 'course', params: item })
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');

#recruitment {
  width: 100%;
  background: #fff;
  padding-bottom: 30px;
  padding: 15px;
  padding-top: 30px;
}
.recruitment {
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1200px;
  margin: 0px auto;
}
.recruitment-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
}
.phone-content {
  display: none;
}
.img {
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
  width: 100%;
}
.word {
  margin: 0px 15px;
  width: 330px;
  min-height: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.cont {
  width: 100%;
  padding: 0px 15px 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.word:hover {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
}

.cont-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  margin-top: 5px;
  color: #e00;
}
.cont-rate {
  margin-top: 10px;
  align-self: flex-start;
}
.cont-info {
  margin-top: 4px;
  align-self: flex-start;
}
.cont-intr {
  margin-top: 8px;
  letter-spacing: 0.07em;
  line-height: 1.4em;
}
.number {
  font-weight: 600;
  color: #e00;
  font-size: 16px;
}
.cont-number {
  align-self: flex-start;
  margin-top: 5px;
}
.button {
  margin: 10px 0px 0px 30px;
  cursor: pointer;
  padding: 4px 8px;
  color: #e00;
  border: 1px solid #e00;
  display: inline-block;
}

.tag-info {
  margin-top: 8px;
}
.phone_imgUrl {
  display: none;
}
.pc_imgUrl {
  display: block;
}
@media screen and (max-width: 1000px) {
  .word {
    width: 32%;
    margin: 0px 5px;
  }
}
@media screen and (max-width: 900px) {
  .phone_imgUrl {
    display: block;
  }
  .pc_imgUrl {
    display: none;
  }
  .recruitment-content {
    flex-direction: column;
    align-items: center;
  }
  .word {
    width: 93%;
    margin: 15px 0px;
    flex-direction: row;
    height: 300px;
  }
  .img {
    max-height: 100%;
  }
}
@media screen and (max-width: 720px) {
  .iconfont1 {
    color: @color-brand;
    font-size: 36px;
    position: absolute;
    top: -4px;
    right: -2px;
  }
  #recruitment {
    width: 100%;
    background: #fff;
    padding: 0;
    box-sizing: border-box;
  }
  .recruitment-content {
    display: none;
  }
  .title {
    display: none;
  }
  .phone-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 5px 0;
  }
  .phone-word {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 32%;
    padding: 10px 0px 35px 0px;
    line-height: 1.2;
    margin: 0;
    border-radius: 1px;
    box-shadow: 1px 1px 5px rgba(169, 169, 169);
  }
  .phone-word:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(169, 169, 169);
  }
  .phone-content > .iconfont {
    font-size: 40px;
  }
  .iconfont {
    margin-top: 10px;
    font-size: 45px;
  }
  .phone-title {
    font-size: 16px;
    margin-top: 5px;
  }
  .phone-button {
    margin-top: 10px;
    font-size: 14px;
    color: #e00;
    padding: 4px 6px;
    border: 1px solid #e00;
  }
  .line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
}
</style>
