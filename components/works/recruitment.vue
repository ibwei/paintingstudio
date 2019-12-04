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
          :style="{ background: item.color }"
        >
          <div class="img">
            <img :src="item.icon" alt width="100%" class="pc_icon" />
            <img :src="item.phone_icon" alt heihgt="100%" class="phone_icon" />
          </div>
          <div class="cont">
            <div class="cont-title" v-html="item.title"></div>
            <div class="cont-info">
              <span class="tag">课程性质：</span>
              <tag :infos="item.infos" />
            </div>
            <div class="cont-intr" v-html="item.introduc"></div>
            <div class="cont-rate">
              <span class="rate">学生评分：</span>
              <van-rate
                v-model="item.rate"
                :size="18"
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
        icon: '&#xe6d9;'
      },

      recruitments: [
        {
          index: 1,
          icon: require('../../assets/images/index/国画.jpg'),
          phone_icon: require('../../assets/images/index/国画_phone.jpg'),
          title: '油画艺术班',
          introduc:
            '油画定制课专属于你的艺术油画定制课专属于你的艺术短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: '#fff',
          number: 599,
          rate: 3,
          infos: ['有趣', '有技术含量', '从零开始']
        },
        {
          index: 2,
          icon: require('../../assets/images/index/留学生.jpg'),
          phone_icon: require('../../assets/images/index/留学生_phone.jpg'),
          title: '留学班',
          introduc:
            '体验课进行时素描、水彩任你选体验课进行时素描、水彩任你选短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: '#fff',
          number: 599,
          rate: 3.5,
          infos: ['有趣', '有技术含量', '从零开始']
        },
        {
          index: 3,
          icon: require('../../assets/images/index/艺术生.jpg'),
          phone_icon: require('../../assets/images/index/艺术生_phone.jpg'),
          title: '绘画兴趣班',
          introduc:
            '短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生短期综合班为兴趣而生',
          color: '#fff',
          number: 599,
          rate: 5,
          infos: ['有趣', '有技术含量', '从零开始']
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');

#recruitment {
  width: 100%;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
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
.phone_icon {
  display: none;
}
.pc_icon {
  display: block;
}
@media screen and (max-width: 1000px) {
  .word {
    width: 32%;
    margin: 0px 5px;
  }
}
@media screen and (max-width: 900px) {
  .phone_icon {
    display: block;
  }
  .pc_icon {
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
@media screen and (max-width: 550px) {
  .phone_icon {
    display: none;
  }
  .pc_icon {
    display: block;
  }
  #recruitment {
    width: 100%;
    padding: 30px 10px 0px;
  }
  .word {
    width: 93%;
    margin: 15px 0px;
    flex-direction: column;
  }
  .cont-number {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cont-number > span {
    line-height: 3em;
    flex: 1;
    text-align: center;
  }
  .button {
    align-self: flex-end;
    margin: 0px 30px 5px 0px;
  }
}
</style>
