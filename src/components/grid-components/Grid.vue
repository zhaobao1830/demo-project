<template>
  <grid-layout
    :layout.sync="layoutList"
    :col-num="12"
    :row-height="25"
    :is-draggable="isDraggable"
    :is-resizable="isResizable"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[2, 2]"
    :use-css-transforms="true"
  >
    <grid-item v-for="(item, index) in layoutList"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               :key="item.i"
               :index="item.i"
               :activeItemIndex="activeItemIndex"
               ref="gridItem"
               @click.native="handleClick(item.i, index)"
    >
      {{item.value}}
    </grid-item>
  </grid-layout>
</template>

<script>
  import GridLayout from './GridLayout'
  import GridItem from './GridItem'

  export default {
    name: 'grid',
    props: {
      layoutList: { // 展示列表
        type: Array,
        default () {
          return []
        }
      },
      isDraggable: { // 能否拖拽
        type: Boolean,
        default: false
      },
      isResizable: { // 能否缩放
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        activeItemIndex: null
      }
    },
    methods: {
      handleClick (id, index) {
        if (this.activeItemIndex === id) {
          this.activeItemIndex = -1
        } else {
          this.activeItemIndex = id
        }
        this.$emit('checkListIndex', index)
      }
    },
    computed: {
      active () {
        return true
      }
    },
    components: {
      GridLayout,
      GridItem
    }
  }
</script>

<style scoped lang="scss">

</style>
