<template>
  <div class="container">
    <div class="button-con">
      <div class="button" @click="changeLayout(1)">一宫格</div>
      <div class="button" @click="changeLayout(2)">二宫格</div>
      <div class="button" @click="changeLayout(4)">四宫格</div>
      <div class="button" @click="changeLayout(6)">六宫格</div>
      <div class="button" @click="changeLayout(9)">九宫格</div>
      <div class="button" @click="changeLayout(12)">十二宫格</div>
      <div class="button" @click="changeLayout(16)">十六宫格</div>
      <div class="button" @click="changeSlideShow">点击</div>
    </div>
    <div class="content">
      <div class="grid-con">
        <grid :layoutList="testLayoutList" @checkListIndex="checkListIndex"></grid>
      </div>
      <div class="right-slide" v-show="slideShow">
        <div class="right-slide-con">
          <ul class="slide-ul">
            <li
              class="slide-li"
              v-for="item in testLayout0"
              :key="item.id"
              :index="item.id"
              :class="{'is-slideActive': (item.id === slideActiveId)}"
              @click="clickSlideLi(item)"
            >
              {{item.value}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '@/components/grid-components/Grid'

  export default {
    name: 'GridDemo',
    data () {
      return {
        slideShow: true,
        testLayoutList: [],
        testLayout: [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 12, 'i': '1_1', srcId: '0' }
        ],
        testLayout1: [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 12, 'i': '1_1', srcId: '0' }
        ],
        testLayout2: [
          { 'x': 0, 'y': 0, 'w': 6, 'h': 12, 'i': '2_1', srcId: '' },
          { 'x': 6, 'y': 0, 'w': 6, 'h': 12, 'i': '2_2', srcId: '' }
        ],
        testLayout4: [
          { 'x': 0, 'y': 0, 'w': 6, 'h': 6, 'i': '4_1', srcId: '' },
          { 'x': 6, 'y': 0, 'w': 6, 'h': 6, 'i': '4_2', srcId: '' },
          { 'x': 0, 'y': 1, 'w': 6, 'h': 6, 'i': '4_3', srcId: '' },
          { 'x': 6, 'y': 1, 'w': 6, 'h': 6, 'i': '4_4', srcId: '' }
        ],
        testLayout6: [
          { 'x': 0, 'y': 0, 'w': 4, 'h': 6, 'i': '6_1', srcId: '' },
          { 'x': 4, 'y': 0, 'w': 4, 'h': 6, 'i': '6_2', srcId: '' },
          { 'x': 8, 'y': 0, 'w': 4, 'h': 6, 'i': '6_3', srcId: '' },
          { 'x': 0, 'y': 1, 'w': 4, 'h': 6, 'i': '6_4', srcId: '' },
          { 'x': 4, 'y': 1, 'w': 4, 'h': 6, 'i': '6_5', srcId: '' },
          { 'x': 8, 'y': 1, 'w': 4, 'h': 6, 'i': '6_6', srcId: '' }
        ],
        testLayout9: [
          { 'x': 0, 'y': 0, 'w': 4, 'h': 4, 'i': '9_1', srcId: '' },
          { 'x': 4, 'y': 0, 'w': 4, 'h': 4, 'i': '9_2', srcId: '' },
          { 'x': 8, 'y': 0, 'w': 4, 'h': 4, 'i': '9_3', srcId: '' },
          { 'x': 0, 'y': 1, 'w': 4, 'h': 4, 'i': '9_4', srcId: '' },
          { 'x': 4, 'y': 1, 'w': 4, 'h': 4, 'i': '9_5', srcId: '' },
          { 'x': 8, 'y': 1, 'w': 4, 'h': 4, 'i': '9_6', srcId: '' },
          { 'x': 0, 'y': 2, 'w': 4, 'h': 4, 'i': '9_7', srcId: '' },
          { 'x': 4, 'y': 2, 'w': 4, 'h': 4, 'i': '9_8', srcId: '' },
          { 'x': 8, 'y': 2, 'w': 4, 'h': 4, 'i': '9_9', srcId: '' }
        ],
        testLayout12: [
          { 'x': 0, 'y': 0, 'w': 10, 'h': 10, 'i': '12_1', srcId: '' },
          { 'x': 10, 'y': 0, 'w': 2, 'h': 2, 'i': '12_2', srcId: '' },
          { 'x': 10, 'y': 1, 'w': 2, 'h': 2, 'i': '12_3', srcId: '' },
          { 'x': 10, 'y': 2, 'w': 2, 'h': 2, 'i': '12_4', srcId: '' },
          { 'x': 10, 'y': 3, 'w': 2, 'h': 2, 'i': '12_5', srcId: '' },
          { 'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '12_6', srcId: '' },
          { 'x': 10, 'y': 5, 'w': 2, 'h': 2, 'i': '12_7', srcId: '' },
          { 'x': 0, 'y': 6, 'w': 2, 'h': 2, 'i': '12_8', srcId: '' },
          { 'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '12_9', srcId: '' },
          { 'x': 4, 'y': 6, 'w': 2, 'h': 2, 'i': '12_10', srcId: '' },
          { 'x': 6, 'y': 6, 'w': 2, 'h': 2, 'i': '12_11', srcId: '' },
          { 'x': 8, 'y': 6, 'w': 2, 'h': 2, 'i': '12_12', srcId: '' }
        ],
        testLayout16: [
          { 'x': 0, 'y': 0, 'w': 3, 'h': 3, 'i': '16_1', srcId: '' },
          { 'x': 3, 'y': 0, 'w': 3, 'h': 3, 'i': '16_2', srcId: '' },
          { 'x': 6, 'y': 0, 'w': 3, 'h': 3, 'i': '16_3', srcId: '' },
          { 'x': 9, 'y': 0, 'w': 3, 'h': 3, 'i': '16_4', srcId: '' },
          { 'x': 0, 'y': 1, 'w': 3, 'h': 3, 'i': '16_5', srcId: '' },
          { 'x': 3, 'y': 1, 'w': 3, 'h': 3, 'i': '16_6', srcId: '' },
          { 'x': 6, 'y': 1, 'w': 3, 'h': 3, 'i': '16_7', srcId: '' },
          { 'x': 9, 'y': 1, 'w': 3, 'h': 3, 'i': '16_8', srcId: '' },
          { 'x': 0, 'y': 2, 'w': 3, 'h': 3, 'i': '16_9', srcId: '' },
          { 'x': 3, 'y': 2, 'w': 3, 'h': 3, 'i': '16_10', srcId: '' },
          { 'x': 6, 'y': 2, 'w': 3, 'h': 3, 'i': '16_11', srcId: '' },
          { 'x': 9, 'y': 2, 'w': 3, 'h': 3, 'i': '16_12', srcId: '' },
          { 'x': 0, 'y': 3, 'w': 3, 'h': 3, 'i': '16_13', srcId: '' },
          { 'x': 3, 'y': 3, 'w': 3, 'h': 3, 'i': '16_14', srcId: '' },
          { 'x': 6, 'y': 3, 'w': 3, 'h': 3, 'i': '16_15', srcId: '' },
          { 'x': 9, 'y': 3, 'w': 3, 'h': 3, 'i': '16_16', srcId: '' }
        ],
        testLayout0: [
          {
            id: '11',
            value: '我是11'
          },
          {
            id: '12',
            value: '我是12'
          },
          {
            id: '13',
            value: '我是13'
          },
          {
            id: '14',
            value: '我是14'
          },
          {
            id: '15',
            value: '我是15'
          },
          {
            id: '16',
            value: '我是16'
          },
          {
            id: '17',
            value: '我是17'
          }
        ],
        slideActiveId: '',
        gridActiveIndex: -1
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
          this.testLayoutList = [...this.testLayout1]
        } else if (num === 2) {
          this.testLayoutList = [...this.testLayout2]
        } else if (num === 4) {
          this.testLayoutList = [...this.testLayout4]
        } else if (num === 6) {
          this.testLayoutList = [...this.testLayout6]
        } else if (num === 9) {
          this.testLayoutList = [...this.testLayout9]
        } else if (num === 12) {
          this.testLayoutList = [...this.testLayout12]
        } else if (num === 16) {
          this.testLayoutList = [...this.testLayout16]
        }
      },
      clickSlideLi (item) {
        this.slideActiveId = item.id
        if (this.gridActiveIndex === -1) {
          return
        }
        this.testLayoutList[this.gridActiveIndex].value = item.value
      },
      checkListIndex (index) {
        this.gridActiveIndex = index
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
    height: 600px;
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
        transition: all 3s linear;
        width: 200px;
        height: 386px;
        .right-slide-con{
          height: 100%;
          overflow: hidden;
          ul{
            margin: 0;
            padding: 0;
            height: 386px;
            overflow-y: auto;
            li{
              padding: 0;
              list-style: none;
              height: 100px;
              line-height: 100px;
              border: 1px solid;
              border-color: #333333;
              cursor: pointer;
            }
            .is-slideActive{
              border-color: cornflowerblue;
            }
          }
        }
      }
    }
  }
</style>
