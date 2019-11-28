<template>
  <div>
    <div class="introduce">
      <div class="introduce-title">
        <span>田奇画室</span>
      </div>
      <div class="sign">
        <a href="/">
          <img src="../../assets/images/index/sign.png">
        </a>
      </div>
      <div class="introduce-text">
        <p>06年创办于北京798艺术工厂，两兄弟所办</p>
        <p>优势一：全年开课，随到随学，自由选择学习时间，分开辅导．</p>
        <p>优势二：任何分点报名均可在其他分点学习，课时不作废．</p>
        <p>优势三：主教老师均为固定全职老师，科班出身，专业扎实．</p>
        <p>...</p>
      </div>
    </div>
    <div class="affaris">
      <div class="affaris-left">
        <img src="../../assets/images/index/2017330105615377.jpg">
      </div>
      <div class="affaris-right">
        <div class="right-head">
          <span class="head-index">02</span>
          <span class="head-text">校 务</span>
        </div>
        <ul class="affaris-list">
          <li>
            <a href=""><span>田奇画室开业啦1！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
          <li>
            <a href=""><span>田奇画室开业啦12！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
          <li>
            <a href=""><span>田奇画室开业啦123！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
          <li>
            <a href=""><span>田奇画室开业啦1234！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
          <li>
            <a href=""><span>田奇画室开业啦12345！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
          <li>
            <a href=""><span>田奇画室开业啦123456！！</span></a>
            <span class="list-date">[2019/11/22]</span>
          </li>
        </ul>
        <div class="more">
          <a-button class="btn" type="danger">More...</a-button>
        </div>
      </div>
    </div>
    <div class="student-works">
      <img src="../../assets/images/index/a42.jpg">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@affarisRed: #c70b0c;
.introduce {
  background: #efefef;
  text-align: center;
  .introduce-title {
    padding: 40px 0 10px 0px;
    span {
      &::before {
        content: '—';
      }
      &::after {
        content: '—';
      }
      &::before, &::after {
        margin: 0px 5px;
      }
    }
  }
  .introduce-text {
    font-size: 19px;
    font-weight: 700;
    line-height: .8em;
    padding-bottom: 5px;
  }
}
.affaris {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  padding: 40px 0 10px 0px;
  margin: 0 auto;
  max-width: 1080px;
  .affaris-left {
    display: inline-block;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .affaris-right {
    display: inline-block;
    width: 35%;
    .right-head { 
      color: @affarisRed;
      .head-index {
        font-family: 'Bahnschrift Condensed';
        font-weight: 700;
        font-size: 6em;
        line-height: 1em;
      }
      .head-text {
        display: inline-block;
        font-weight: 700;
        font-size: 1.5em;
        line-height: 1.5em;
        padding: 0 10px;
        border-bottom: 1px solid @affarisRed;
      }
    }
    ul {
      display: block;
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        line-height: 1.5em;
        font-size: 18px;
        a {
          color: #444444;
          text-decoration: none;
        }
        .list-date {
          color: #777777;
        }
      }
    }
    .more {
      .btn {
        background: @affarisRed;
        color: #ffffff;
        border: none
      }
    }
  }
}
.student-works {
  img {
    width: 100%;
  }
}
</style>