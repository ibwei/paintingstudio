<template>
  <div class="advantage">
    <div id="title">
      <div class="title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <div class="title-word">{{ title_word }}</div>
    </div>
    <div id="content">
      <div v-for="(item, index) of list" :key="index" class="word">
        <div
          class="icon iconfont"
          :style="{
            'background-color': '#fff'
          }"
          v-html="item.icon"
        />
        <div class="word-word">
          <div class="word-title">{{ item.title }}</div>
          <div class="word-cont">{{ item.word }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle';
export default {
  components: {
    vTitle
  },
  data () {
    return {
      initTtile: {
        cnTitle: '为什么选择品贤画室',
        enTitle: 'WHY CHOOSE US',
        mode: 'red',
        icon: '&#xe65b;'
      },
      title: '为什么选择品贤画室',
      title_en: 'Why Choose Us',
      title_word: '优秀的师资+完善的服务+个性化教学',
      list: [
        {
          title: '教学系统',
          icon: '&#xe63b;',
          word: '重视理论技巧同步',
          color: ''
        },
        {
          title: '独立的教学进度',
          icon: '&#xe663;',
          word: '根据学生实际情况安排内容​。',
          color: ''
        },
        {
          title: '私人订制',
          icon: '&#xe697;',
          word: '教学时间灵活，随到随学。',
          color: ''
        },
        {
          title: '优秀师资',
          icon: '&#xe66f;',
          word: '全老师美院毕业，耐心随和很好沟通。',
          color: ''
        }
      ],
      button: {
        title: '查看详情',
        link: '',
        color: '#cf2729'
      }
    };
  },
  methods: {
    /**
     * @method 点击查看更多按钮跳转到“优势”页面
     * @prams link 跳转连接路由地址
     * @author 程序员阿森
     * @returns void
     * */
    clickBtn (link) { }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.advantage {
  border: 1px soldi black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #fff;
  padding: 30px 0px;
  max-width: 1200px;
  margin: 0 auto;
}
#title {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#title .title-en {
  font-size: 16px;
  line-height: 150%;
  padding: 0 20px;
  margin-top: 5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #999;
}
#title .title-word {
  line-height: 150%;
  padding: 0 20px;
  margin-top: 5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #999;
  font-size: 14px;
}
#content {
  margin: 0px auto;
  align-items: center;
  justify-content: space-around;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#content .word {
  background: white;
  width: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
}
.word .iconfont {
  color: @color-brand;
  border: 2px solid @color-brand;
  font-weight: 100 !important;
  font-size: 48px;
  padding: 10px;
  border-radius: 2px;
}
.icon {
  font-weight: 100 !important;
}
.word .word-word {
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding-left: 15px;
}
.word-title {
  color: #333;
  font-weight: bold;
  margin: 0 0 10px 0;
  font-size: 18px;
  margin-top: 5px;
}
.word-cont {
  margin-bottom: 0;
  max-height: 50px;
  color: #999;
}
#button {
  margin-top: 30px;
}
.button2 {
  display: none;
}
.button1 {
  display: inline-block;
  border: 1px solid @color-brand;
  color: @color-brand;
  font-weight: 500;
  margin: 0px auto;
  border-radius: 0px;
  padding: 6px 12px;
  cursor: pointer;
}
.van-button--large {
  width: 80%;
  margin: 0px auto;
  height: 40px;
  line-height: 40px;
}

@media screen and (max-width: 720px) {
  .button2 {
    display: block;
  }
  .button1 {
    display: none;
  }
  #title .title {
    font-size: 24px;
  }

  #content .word {
    width: 85%;
    margin: 0px auto;
    padding: 10px;
  }
  .word .iconfont {
    font-size: 38px;
  }
  .word-title {
    margin: 0px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .word-cont {
    font-size: 14px;
  }
}
</style>
