<template>
  <div class="advantage">
    <div id="title">
      <div class="title">{{ title }}</div>
      <div class="title-en">{{ title_en }}</div>
      <div class="title-word">{{ title_word }}</div>
    </div>
    <div id="content">
      <div v-for="(item, index) of list" :key="index" class="word">
        <div
          class="icon iconfont"
          :style="{
            'background-color': item.color,
            border: '2px solid ' + item.color
          }"
          v-html="item.icon"
        />
        <div class="word-word">
          <div class="word-title">{{ item.title }}</div>
          <div class="word-cont">{{ item.word }}</div>
        </div>
      </div>
    </div>
    <div id="button">
      <van-button type="info" class="button2" size="large">
        {{ button.title }}
      </van-button>
      <div class="button1">{{ button.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '为什么选择品贤画室',
      title_en: 'Why Choose Us',
      title_word: '优秀的师资+完善的服务+严格的管理+个性化教学',
      list: [
        {
          title: '私人定制',
          icon: '&#xe63b;',
          word: '与高三文化课同步教学，优质的文化课师资。',
          color: '#1FD6FE'
        },
        {
          title: '文化课同步 双重保障',
          icon: '&#xe663;',
          word: '与高三文化课同步教学，优质的文化课师资。',
          color: '#1FD6FE'
        },
        {
          title: '安全完善的食宿',
          icon: '&#xe697;',
          word: '军事化食宿管理，饮食中每一道工序都有据可查。',
          color: '#1FD6FE'
        },
        {
          title: '24小时全方位服务',
          icon: '&#xe66f;',
          word: '全方位，高品质的服务体系，24小时响应，时刻服务好每一位同学。',
          color: '#1FD6FE'
        },
        {
          title: '多样化的教学',
          icon: '&#xe627;',
          word: '下乡写生、名校参观、校庆活动。',
          color: '#1FD6FE'
        },
        {
          title: '无忧的考试服务',
          icon: '&#xe65e;',
          word: '爱心送考、志愿填报指导会等一系列的后续服务。',
          color: '#1FD6FE'
        }
      ],
      button: {
        title: '查看详情 >>>',
        link: '',
        color: '#1FD6FE'
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
    clickBtn(link) {
      console.log(link);
    }
  }
};
</script>

<style lang="less" scope>
.advantage {
  border: 1px soldi black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #fafbfc;
  padding: 30px 0px;
}
#title {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#title .title {
  font-size: 36px;
  color: #333;
  line-height: 150%;
  margin: 0;
  padding: 0 20px;
}
#title .title:before {
  display: inline-block;
  height: 1px;
  background-color: #ddd;
  padding: 0;
  content: '';
  width: 100px;
  margin: 10px 15px;
}

#title .title::after {
  display: inline-block;
  height: 1px;
  background-color: #ddd;
  padding: 0;
  content: '';
  width: 100px;
  margin: 10px 15px;
}
#title .title-en {
  font-size: 12px;
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
  justify-content: center;
  width: 1200px;
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
  align-items: flex-start;
  margin: 10px 15px;
}
.word .iconfont {
  font-size: 60px;
  padding: 15px;
  border-radius: 5px;
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
  margin: 0 0 10px 0;
  font-size: 18px;
  margin-top: 5px;
}
.word-cont {
  margin-bottom: 0;
  max-height: 50px;
}
#button {
  margin-top: 30px;
}
.button2 {
  display: none;
}
.button1 {
  display: block;
  width: 200px;
  height: 50px;
  border: 2px solid #cc0000;
  font-size: 18px;
  color: #cc0000;
  line-height: 2em;
  margin: 0px auto;
  line-height: 50px;
  border-radius: 5px;
  cursor: pointer;
}
.van-button--large {
  width: 80%;
  margin: 0px auto;
  height: 40px;
  line-height: 40px;
}
@media screen and (max-width: 1199px) {
  #content {
    width: 100%;
  }
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
  #title .title::before,
  #title .title::after {
    display: none;
  }
  .word .iconfont {
    font-size: 40px;
  }
  .word-title {
    font-size: 16px;
  }
  .word-cont {
    font-size: 14px;
  }
  #content .word:nth-child(2n + 0) {
    display: none;
  }
}
</style>
