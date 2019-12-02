<template>
  <div id="teachers">
    <div class="teachers">
      <div class="title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <div class="content">
        <div class="left">
          <van-icon
            name="arrow-left"
            size="40px"
            color="#e00"
            @click="handlerLeftBtn()"
          />
        </div>
        <div class="mid-content">
          <div
            v-for="(item, index) of teachers"
            v-show="index + 1 === currIndex"
            :key="index"
            class="teacher"
          >
            <div class="word">
              <div class="word-name">
                <span class="name">昵称：</span>
                {{ item.name }}
              </div>
              <div class="word-infos">
                <span class="info">个人标签：</span>
                <tag :infos="item.infos" />
              </div>
              <div class="word-intrduce">{{ item.intrduce }}</div>
              <div class="word-reta">
                <span class="rate">学员评分：</span>
                <van-rate
                  v-model="item.rate"
                  icon="like"
                  void-icon="like-o"
                  color="#e00"
                  allow-half
                />
              </div>
              <div class="word-style">
                <span class="teach_style">教学风格：</span>
                {{ item.teach_style }}
              </div>
            </div>
            <div class="img">
              <img :src="item.imgUrl" width="100%" />
            </div>
          </div>
        </div>
        <div class="right">
          <van-icon
            name="arrow"
            size="40px"
            color="#e00"
            @click="handlerRightBtn()"
          />
        </div>
      </div>
      <div class="button">查看更多</div>
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
  data() {
    return {
      currIndex: 2,
      initTtile: {
        cnTitle: '师资力量',
        enTitle: 'Painting Studio News',
        mode: 'black',
        icon: '&#xe6d9;'
      },
      teachers: [
        {
          name: '田奇',
          intrduce:
            '资深项目经理、技术讲师、SUN SCJP、SCWCD、原工信部移动云计算教育培训中心教学总监。 十年软件开发经验：参与完成辽宁某高校远程教学管理系统、慧文信息门户系统、日本麦卡尔超市管理系统、崎玉市外来人口登记系统、深海视频会议管理系统、仙台市宫城县日常事务系统等项目的设计和开发。',
          rate: 5,
          lable: 1,
          infos: ['名校毕业', '女学员多', '好评如潮'],
          teach_style: '循序渐进，旁征博引,风趣幽默，大师风范',
          imgUrl: require('../../assets/images/index/user1.png')
        },
        {
          name: '小奇2号',
          intrduce:
            '行业老兵，IT教育风云人物。清华毕业，拥有九年大型项目开发和管理经验，曾任新浪网软件项目经理，使用PHP与JavaEE技术开发新浪网系统，北京点击科技公司高级软件工程师，用友软件股份有限公司U8事业部软件工程师。主持或参与《新浪邮件系统》、《橙红sns网站》、《点击科技协同软件群组服务器端(Linux/solaris平台)》、《总参语音监控系统》、《英语学习机系统》、《用友erp(u8产品)系统》等项目。',
          rate: 4.5,
          lable: 2,
          infos: ['名校毕业', '帅气', '好评如潮'],
          teach_style: '教法凶悍，厚积薄发，激发式教学，让你睡觉都觉得奢侈',
          imgUrl: require('../../assets/images/index/user2.png')
        }
      ]
    };
  },
  methods: {
    handlerRightBtn() {
      if (this.currIndex === this.teachers.length) {
        this.currIndex = 1;
      } else {
        this.currIndex++;
      }
    },
    handlerLeftBtn() {
      if (this.currIndex === 1) {
        this.currIndex = this.teachers.length;
      } else {
        this.currIndex--;
      }
    }
  }
};
</script>

<style style="less" scoped>
#teachers {
  width: 100%;
  background: #f8f8f9;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}
.teachers {
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
}
.teacher {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 395px;
}
.teacher:nth-child(2n + 0) {
  flex-direction: row-reverse;
}
.word {
  box-shadow: 1px 1px 3px #c8c7c7;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 20px 30px;
}
.word-name {
  font-size: 18px;
  color: #e00;
  align-self: flex-start;
  letter-spacing: 0.1em;
}
.name {
  font-size: 14px;
  color: #666;
}
.word-intrduce {
  line-height: 1.8em;
  letter-spacing: 0.07em;
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
}
.word-infos {
  margin-top: 10px;
}
.word-reta {
  margin-top: 10px;
}
.rate {
  color: #666;
  font-size: 12px;
}
.word-style {
  font-size: 12px;
  margin-top: 10px;
}
.teach_style {
  color: #666;
}
.img > img {
  width: 400px;
  display: block;
  transform: translateX(30px);
  z-index: -1;
}
.teacher:nth-child(2n + 1) img {
  display: block;
  transform: translateX(-30px);
  z-index: -1;
}
.button {
  color: #e00;
  border: 1px solid #e00;
  padding: 6px 12px;
  cursor: pointer;
}
@media screen and (max-width: 900px) {
  .img {
    width: 350px;
  }
}
</style>
