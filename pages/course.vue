<template>
  <div class="course-wrap">
    <!--  <div class="title">
      <v-title v-bind:initTitle="initTtile"></v-title>
    </div>-->
    <div class="content">
      <div class="nav">
        <van-sidebar v-model="activeKey" style="height:calc(100vh - 100px);width:100%;">
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
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      activeKey: 0,
      sidebarList: [{
        name: '推荐课程',
        url: '/course'
      }, {
        name: '绘画兴趣班',
        url: '/course/interest'
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
        name: '私人订制',
        url: '/course',
        disabled: true
      }],
      initTtile: {
        cnTitle: '热门课程',
        enTitle: 'Hot Course Available',
        mode: 'black',
        icon: '&#xe672;'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 250px);
}
.nav {
  height: auto;
  width: 130px;
  background: #fafafa;
  min-height: calc(100vh - 50px);
}
.nav-list {
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>
