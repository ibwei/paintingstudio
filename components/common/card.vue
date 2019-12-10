<template>
  <div>
    <div v-for="(teacher) of cardList" :key="teacher.id" class="card-wrap">
      <div class="card">
        <div class="leftImg">
          <van-image round fit="cover" width="100%" height="100%" :src="teacher.headImg" />
        </div>
        <div class="content">
          <div class="title">{{ teacher.name }}</div>
          <div class="desc">{{ teacher.desc }}</div>
          <div class="rate">
            <van-rate
              v-model="teacher.rate"
              :size="10"
              readonly
              allow-half
              :color="Color.colorbrand"
              void-icon="star"
              void-color="#eee"
            />
            {{ teacher.rate }}
          </div>
        </div>
        <div class="more" @click="goDetail(teacher.id)">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '../../config/color';
export default {
  props: {
    cardList: {
      type: Array,
      default () {
        return null;
      }
    }
  },
  data () {
    return {
      Color
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push({path: '/about/detail?id='+id})
    }
  },
  mounted () {
    console.log('this.cardList :', this.cardList);
  }
}
</script>

<style lang='less' scoped>
@import url('../../assets/css/color.less');
.flex {
  display: -webkit-flex;
  display: flex;
}
.card-wrap {
  padding: 0 5px 5px 5px;
}
.card {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 10px;
  background: #fff;
}
.leftImg {
  width: 70px;
  height: 70px;
}
.content {
  .flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding-left: 10px;
  flex: 1;
}
.title {
  font-size: 14px;
  color: @color-black-0;
  padding-bottom: 4px;
}
.desc {
  font-size: 12px;
  padding-bottom: 4px;
  color: @color-grey-2;
  min-height: 31px;
}
.rate {
  color: @color-grey-2;
}
.more {
  .flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 10px 0 20px;
}
</style>
