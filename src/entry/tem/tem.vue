<template>
  <div>
    <div>
      <a href="javascript:;" @click="toggleC(first)">1</a>
      <a href="javascript:;" @click="toggleC(second)">2</a>
    </div>
    <component :is="current"></component>
    <button @click="showFun">预览</button>
    <popup-c v-show="showPopup">
      <!--<h1 slot="first" v-if="current === 'first'">p1</h1>-->
      <!--<h1 slot="first" v-if="current === 'second'">p2</h1>-->
      <h1 :is="currentSlot" slot="first"></h1>
    </popup-c>
  </div>
</template>

<script>
  import first from './components/first.vue';
  import second from './components/second.vue';
  import popupC from './components/popup.vue';
  import firstSlot from './components/firstSlot.vue';
  import secondSlot from './components/secondSlot.vue';

  export default {
    name: "tem",
    components: {
      first,
      second,
      popupC,
      firstSlot,
      secondSlot
    },
    data() {
      return {
        first: 'first',
        second: 'second',
        current: 'first',
        showPopup: false,
        currentSlot:'firstSlot'
      }
    },
    methods: {
      toggleC(index) {
        this.current = index;
        this.currentSlot=index+'Slot';
        console.log(this.current)
      },
      showFun() {
        this.showPopup = true;
      }
    }

  }
</script>

<style scoped>

</style>
