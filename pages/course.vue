<template>
  <div class="course-wrap">
    <!--  <div class="title">
      <v-title v-bind:initTitle="initTtile"></v-title>
    </div>-->
    <div class="content">
      <div class="nav">
        <van-sidebar v-model="activeKey" style="width:100%;">
          <van-sidebar-item
            v-for="(item,index) of sidebarList"
            :key="index"
            :title="item.name"
            :to="item.url"
            :disabled="item.disabled?true:false"
          />
        </van-sidebar>
      </div>
      <div class="nav-list">
        <keep-alive>
          <nuxt-child />
        </keep-alive>
      </div>
    </div>
    <div class="pc-content">
      <pc-course-list></pc-course-list>
    </div>
  </div>
</template>

<script>
import pcCourseList from '@/components/course/pcCourseList';
export default {
  components: {
    pcCourseList
  },
  data () {
    return {
      activeKey: 0,
      sidebarList: [{
        name: '绘画兴趣班',
        url: '/course'
      }, {
        name: '国画书法班',
        url: '/course/nation'
      }, {
        name: '艺考基础班',
        url: '/course/art'
      }, {
        name: '留学考研班',
        url: '/course/abroad'
      }, {
        name: '上课时间',
        url: '/course/time'
      }],
      initTtile: {
        cnTitle: '热门课程',
        enTitle: 'Hot Course Available',
        mode: 'black',
        icon: '&#xe672;'
      }
    }
  },
  watch: {
    activeKey (v) {
      localStorage.setItem('courseActiveIndex', v);
    }
  },
  created () {
    if (process.client) {
      const key = localStorage.getItem('courseActiveIndex') || 0;
      this.activeKey = key;
    }
  }

}
</script>

<style lang="less" scoped>
.course-wrap {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.content {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: calc(100vh - 90px);
}
.nav {
  width: 130px;
  background: #fafafa;
  position: relative;
  z-index: 99999;
  top: -2px;
  height: calc(100vh - 90px);
}
.nav-list {
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 0px;
}
.three-d {
  display: none;
}
.pc-content {
  display: none;
}

@media screen and(min-width:720px) {
  .nav {
    height: calc(100vh - 50px);
    position: fixed;
    left: 0;
    top: 50px;
  }
  .nav-list {
    z-index: 33;
    position: relative;
    width: 100%;
    height: auto;
    margin-left: 130px;
    margin-top: 0px;
  }
  .content {
    display: none;
  }
  .pc-content {
    display: block;
  }
}
</style>
