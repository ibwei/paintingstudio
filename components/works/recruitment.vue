<template>
  <div class="recruitment">
    <div
      v-for="(item,index) of recruitments"
      :key="index"
      class="rec-demo"
      :style="{'background':item.color}"
    >
      <a href="item.src">
        <div class="title">{{ item.title }}{{ item.isHover }}</div>
        <div class="icon iconfont" v-html="item.icon"></div>
        <div class="word" :style="{'font-size':item.fontSize}" v-html="item.word"></div>
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recruitments: [
        {
          index: 1,
          title: '招生简章',
          icon: '&#xe672;',
          word: '油画定制课\n专属于你的艺术',
          color: '#fa4c33'
        },
        {
          index: 2,
          title: '招生简章',
          icon: '&#xe60c;',
          word: '体验课进行时\n素描、水彩任你选',
          color: '#ffb900'
        },
        {
          index: 3,
          title: '招生简章',
          icon: '&#xe624;',
          word: '短期综合班\n为兴趣而生',
          color: '#00ACEC'
        }
      ],
      bgColor: '#4B494A'
    };
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
a {
  text-decoration: none;
}
.recruitment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  background: #fff;
  border-bottom: 1px solid #dcdee2;
}
.recruitment .rec-demo {
  text-align: center;
  width: 350px;
  height: 450px;
  color: black;
  cursor: pointer;
}
.rec-demo .title {
  font-size: 32px;
}
.rec-demo .word {
  font-size: 26px;
}
.rec-demo a {
  color: #17233d;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.rec-demo:nth-child(1) {
  margin-left: 0px;
}
.rec-demo .word {
  white-space: pre-line;
}
.recruitment .rec-demo span {
  display: block;
  width: 60px;
  border-radius: 2px;
  border: 2px solid black;
  margin-top: 20px;
}
.recruitment .iconfont {
  font-size: 200px;
}

.rec-demo:hover a,
.rec-demo:hover span {
  color: #f3f3f3;
  border-color: #f3f3f3;
}
.rec-demo .title {
  margin-top: 40px;
}
.rec-demo:nth-child(2) span {
  margin-top: 40px;
}
.rec-demo:nth-child(2) .word {
  margin-top: 15px;
}
@media screen and (max-width: 991px) {
  .rec-demo .iconfont {
    font-size: 100px;
    margin: 10px auto;
  }
  .rec-demo .title {
    margin-top: 30px;
    font-size: 24px;
  }
  .recruitment .rec-demo {
    width: 250px;
    height: 300px;
  }
  .rec-demo .word {
    font-size: 18px;
  }
  .rec-demo:nth-child(2) .word {
    font-size: 24px;
    margin-top: 0px;
  }
  .rec-demo:nth-child(2) span {
    margin-top: 30px;
  }
}
@media screen and (max-width: 768px) {
  .recruitment .rec-demo {
    height: 220px;
    width: 180px;
  }
  .rec-demo .title {
    font-size: 18px;
  }
  .rec-demo .icon {
    font-size: 50px;
  }
  .rec-demo .word {
    font-size: 16px;
  }
  .rec-demo:nth-child(2) .word {
    font-size: 16px;
  }
}
@media screen and (max-width: 540px) {
  .recruitment {
    padding: 5px;
    justify-content: space-around;
  }
  .recruitment .rec-demo {
    height: 130px;
    width: 150px;
    border-radius: 2px;
  }
  .rec-demo + .rec-demo {
    margin-left: 5px;
  }
  .rec-demo .title {
    display: none;
  }
  .recruitment .rec-demo span {
    display: none;
  }
  .rec-demo .icon {
    margin-top: 10px;
  }
  .rec-demo .word {
    font-size: 14px;
  }
  .rec-demo:nth-child(2) .word {
    font-size: 14px;
  }
}
</style>
