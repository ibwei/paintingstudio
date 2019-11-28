<template>
  <div class="recruitment">
    <div
      v-for="(item,index) of recruitments"
      :key="index"
      class="rec-demo"
      :style="{'background':item.color}"
    >
      <a href>
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
  data() {
    return {
      recruitments: [
        {
          index: 1,
          title: '招生简章',
          icon: '&#xe672;',
          word: '艺考及艺考&#10预备班通道',
          color: '#fa4c33'
        },
        {
          index: 2,
          title: '招生简章',
          icon: '&#xe60c;',
          word: '兴趣生通道',
          color: '#ffb900'
        },
        {
          index: 3,
          title: '招生简章',
          icon: '&#xe624;',
          word: '留学及考验\n小升初&nbsp;书法国画',
          color: '#00ACEC'
        }
      ],
      bgColor: '#4B494A'
    };
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.recruitment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.recruitment .rec-demo {
  text-align: center;
  width: 350px;
  height: 450px;
  color: black;
  margin-left: 2rem;
  cursor: pointer;
}
.rec-demo .title {
  font-size: 32px;
}
.rec-demo .word {
  font-size: 26px;
}
.rec-demo a {
  color: black;
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
    margin-top: 12px;
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
    font-size: 18px;
  }
}
@media screen and (max-width: 540px) {
  .recruitment {
    padding-top: 10px;
    justify-content: space-around;
  }
  .recruitment .rec-demo {
    height: 150px;
    width: 150px;
    margin: 0px 5px;
    border-radius: 2px;
  }
  .rec-demo .title {
    display: none;
  }
  .recruitment .rec-demo span {
    display: none;
  }
  .rec-demo .icon {
    margin-top: 20px;
  }
  .rec-demo .word {
    font-size: 16px;
  }
}
</style>
