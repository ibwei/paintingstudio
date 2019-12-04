<!-- 面包屑组件  需要手动配置breadListIm里面的内容-->
<template>
  <div class="bread">
    <span class="notice">您当前位置：</span>
    <div class="address">
      <template v-for="(item,index) of breadListName">
        <template v-if="index < length-1">
          <router-link :key="index" :to="breadListPath[index]">{{ item }}</router-link>
        </template>
        <template v-else>
          <a :key="index">{{ item }}</a>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 配置方法 path: 组件名称   name: 中文名称
      length: 0,
      breadListIm: [
        {
          path: 'news',
          name: '画室动态'
        },
        {
          path: 'course',
          name: '热门课程'
        },
        {
          path: 'contace',
          name: '联系我们'
        },
        {
          path: 'articleDetails',
          name: '动态详情'
        },
        {
          path: 'about',
          name: '画室详情'
        }
      ],
      breadListName: [],
      breadListPath: []
    };
  },

  mounted () {
    this.routerLoading();
  },

  methods: {
    /**
     * 获取当前路由，转换成对应的中文字段，获得每个具体面包屑地址对应的路由
     *  返回当前路由对应的面包屑地址和每个地址对应的路由
    */
    routerLoading () {
      this.readLoadName = this.$route.path.split('/');
      this.readLoadName.splice(0, 1);
      let item;
      let i;
      let str = '';
      for (item of this.readLoadName) {
        i = this.breadListIm.findIndex(function (value) {
          return value.path === item;
        });
        if (i === 'undefined') {
          console.log('路由配置出错，请您仔细查看');
        } else {
          str += '/' + this.breadListIm[i].path;
          this.breadListName.push(this.breadListIm[i].name);
          this.breadListPath.push(str);
        }
      }
      this.length = this.breadListPath.length;
    }
  }
};
</script>
<style>
.bread {
  margin: 0px auto;
  display: flex;
  max-width: 1200px;
  flex-direction: row;
}
.notice {
  font-size: 12px;
}
a {
  font-size: 12px;
  text-decoration: none;
  background: 0 0;
  outline: 0;
  cursor: pointer;
}
.address a::after {
  content: '|';
  font-size: 12px;
  display: inline-block;
  margin: 0px 4px;
  transform: rotate(-15deg);
}
.address a:hover {
  color: #2d8cf0;
  text-decoration: none;
}
.address a:last-child {
  font-weight: 600;
}
.address a:last-child:after {
  content: '';
}
.address a:last-child:hover {
  cursor: text;
  color: #515a6e;
}
.address a {
  color: #515a6e;
  display: inline-block;
  transition: color 0.2s ease-in-out;
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
</style>
