<template>
  <div>
    <grid-layout
      :layout.sync="layoutList"
      :col-num="12"
      :row-height="30"
      :is-draggable="isDraggable"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[0, 0]"
      :use-css-transforms="true"
    >
      <grid-item v-for="item in layoutList"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :key="item.i"
                 ref="gridItem"
                 :class="{'is-active': active}"
                 @click.native="handleClick(item.i)"
      >
        {{item.i}}
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
  // import VueGridLayout from 'vue-grid-layout'
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
      }
    },
    methods: {
      handleClick (id) {
        console.log(id)
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
  .vue-grid-item {
    transition: all 200ms ease;
    transition-property: left, top, right;
    background: #ccc;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vue-grid-item.no-touch {
    -ms-touch-action: none;
    touch-action: none;
  }

  .vue-grid-item.cssTransforms {
    transition-property: transform;
    left: 0;
    right: auto;
  }

  .vue-grid-item.cssTransforms.render-rtl {
    left: auto;
    right: 0;
  }

  .vue-grid-item.resizing {
    opacity: 0.6;
    z-index: 3;
  }

  .vue-grid-item.vue-draggable-dragging {
    transition:none;
    z-index: 3;
  }

  .vue-grid-item.vue-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .vue-grid-item > .vue-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }

  .vue-grid-item  .vue-rtl-resizable-handle {
    bottom: 0;
    left: 0;
    background-position: bottom left;
    padding-left: 3px;
    background-repeat: no-repeat;
    background-origin: content-box;
    cursor: sw-resize;
    right: auto;
  }

  .vue-grid-item.disable-userselect {
    user-select: none;
  }

  .is-active{
    border-color: red !important;
  }
</style>
