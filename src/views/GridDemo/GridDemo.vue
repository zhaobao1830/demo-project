<template>
  <div class="container">
    <div class="button-con">
      <div class="button" @click="changeLayout(1)">一宫格</div>
      <div class="button" @click="changeLayout(4)">四宫格</div>
      <div class="button" @click="changeLayout(9)">九宫格</div>
      <div class="button" @click="changeSlideShow">点击</div>
    </div>
    <div class="content">
      <div class="grid-con">
        <grid :layoutList="testLayoutList"></grid>
      </div>
      <div class="right-slide" v-show="slideShow">
        <div class="right-slide-con">
          <grid :layoutList="testLayout1"></grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '@/components/Grid'

  export default {
    name: 'GridDemo',
    data () {
      return {
        slideShow: true,
        testLayoutList: [],
        testLayout: [
          { 'x': 0, 'y': 0, 'w': 4, 'h': 4, 'i': '0' },
          { 'x': 4, 'y': 0, 'w': 4, 'h': 4, 'i': '1' },
          { 'x': 8, 'y': 0, 'w': 4, 'h': 4, 'i': '2' },
          { 'x': 0, 'y': 1, 'w': 4, 'h': 4, 'i': '3' },
          { 'x': 4, 'y': 1, 'w': 4, 'h': 4, 'i': '4' },
          { 'x': 8, 'y': 1, 'w': 4, 'h': 4, 'i': '5' },
          { 'x': 0, 'y': 2, 'w': 4, 'h': 4, 'i': '6' },
          { 'x': 4, 'y': 2, 'w': 4, 'h': 4, 'i': '7' },
          { 'x': 8, 'y': 2, 'w': 4, 'h': 4, 'i': '8' }
        ],
        testLayout2: [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 12, 'i': '0' }
        ],
        testLayout3: [
          { 'x': 0, 'y': 0, 'w': 6, 'h': 6, 'i': '0' },
          { 'x': 6, 'y': 0, 'w': 6, 'h': 6, 'i': '1' },
          { 'x': 0, 'y': 1, 'w': 6, 'h': 6, 'i': '2' },
          { 'x': 6, 'y': 1, 'w': 6, 'h': 6, 'i': '3' }
        ],
        testLayout1: [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 4, 'i': '9' },
          { 'x': 0, 'y': 4, 'w': 12, 'h': 4, 'i': '10' },
          { 'x': 0, 'y': 8, 'w': 12, 'h': 4, 'i': '11' }
        ]
      }
    },
    mounted () {
      this.testLayoutList = [...this.testLayout2]
    },
    methods: {
      changeSlideShow () {
        this.slideShow = !this.slideShow
      },
      changeLayout (num) {
        if (num === 1) {
          this.testLayoutList = [...this.testLayout2]
        } else if (num === 4) {
          this.testLayoutList = [...this.testLayout3]
        } else if (num === 9) {
          this.testLayoutList = [...this.testLayout]
        }
      }
    },
    components: {
      Grid
    }
  }
</script>

<style scoped lang="scss">
  .container{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .button-con{
      display: flex;
      .button{
        margin: 0 10px;
        height: 40px;
        padding: 5px 10px;
        line-height: 40px;
        color: #ffffff;
        background-color: cornflowerblue;
        cursor: pointer;
      }
    }
    .content{
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .grid-con{
        width: 100%;
      }
      .right-slide{
        transition: all 0.3s linear;
        width: 200px;
      }
    }
  }
</style>
