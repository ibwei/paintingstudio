<template>
  <div id="tag-list" :style="{'width':width,'height':height}">
    <van-tag
      v-for="(item, index) of taglist"
      :key="index"
      :color="item.color"
      :plain="item.plain"
    >
{{ item.info }}
</van-tag>
  </div>
</template>

<script>
export default {
  props: ['width', 'height'],
  data () {
    return {
      infos: ['田奇', '帅气老师', '优质环境', '技术过硬', '火爆课程', '葫芦娃', 'HTML5', 'CSS3', 'Vue2.X', 'Iview', 'JS', '疾风剑豪', '征服之海', '卡拉曼达', '孤儿之巅', '圣枪游侠', '精准弹幕', '大杀四方', '爱卡西亚暴雨', '深海潜行', '斩钢闪', '前端开发', '万磁王', 'X教授'],
      taglist: [{}],
      length: 7,
      colors: [
        { color: '#f2826a', plain: false },
        { color: '#f2826a', plain: true },
        { color: '#7232dd', plain: false },
        { color: '#7232dd', plain: true },
        { color: '#1989FA', plain: true },
        { color: 'rgb(7,193,96)', plain: false },
        { color: '#1989FA', plain: true }
      ]
    }
  },
  create () {
    let i;
    let a;
    // eslint-disable-next-line prefer-const
    for (let item of this.infos) {
      // eslint-disable-next-line prefer-const
      let obj = {
        plain: false,
        color: '',
        info: ''
      };
      i = Math.floor(Math.random() * this.length);
      obj.plain = this.colors[i].plain;
      obj.color = this.colors[i].color;
      obj.info = item;
      a.push(obj)
    }
    this.taglist = JSON.parse(JSON.stringify(a));
  },
  mounted () {
    this.$nextTick(() => {
      this.init();
    })
    this.init();
  },
  methods: {
    init () {
      const oDiv = document.getElementById('tag-list');
      const aA = oDiv.getElementsByTagName('span');
      console.log(aA[5]);
      const length = aA.length;
      let i;
      for (i = 0; i < length; i++) {
        aA[i].pause = 1;
        aA[i].time = null;
        initialize(aA[i]);
        aA[i].onmouseover = function () {
          this.pause = 0;
        };
        aA[i].onmouseout = function () {
          this.pause = 1;
        };
      }
      setInterval(starmove, 50);

      function starmove () {
        for (i = 0; i < length; i++) {
          if (aA[i].pause) {
            domove(aA[i]);
          }
        }
      }

      function domove (obj) {
        if (obj.offsetTop <= -obj.offsetHeight) {
          obj.style.top = oDiv.offsetHeight + 'px';
          initialize(obj);
        } else {
          obj.style.top = obj.offsetTop - obj.ispeed + 'px';
        }
      }

      function initialize (obj) {
        const iLeft = parseInt(Math.random() * oDiv.offsetWidth);
        const scale = Math.random() * 2 + 1;
        const iTimer = parseInt(Math.random() * 1500);
        obj.pause = 0;
        if ((iLeft - obj.offsetWidth) > 0) {
          obj.style.left = iLeft - obj.offsetWidth + 'px';
        } else {
          obj.style.left = iLeft + 'px';
        }
        clearTimeout(obj.time);
        obj.time = setTimeout(function () {
          obj.pause = 1;
        }, iTimer);
        obj.ispeed = Math.ceil(Math.random() * 4 + 1);
      }
    }
  }

}
</script>

<style>
#tag-list {
  background: #eee;
  position: relative;
  width: 350px;
  height: 260px;
  overflow: hidden;
  box-shadow: 0 0 10px #8e8e8e;
  -webkit-box-shadow: 0 0 10px #8e8e8e;
  -moz-box-shadow: 0 0 10px #8e8e8e;
}
#tag-list span {
  position: absolute;
  text-decoration: none;
  top: 260px;
  display: block;
  opacity: 0.8;
  font-size: 14px;
}
#tag-list span:hover {
  cursor: pointer;
  opacity: 1;
  font-weight: bold;
  font-size: 16px;
}
</style>
