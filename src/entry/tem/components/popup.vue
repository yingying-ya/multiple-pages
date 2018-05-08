<template>
  <div class="popup">
    <slot name="first"></slot>
  </div>
</template>

<script>
  export default {
    name: "popup"
  }
</script>

<style scoped>
  .popup {
    background: yellow;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 50%;
    margin-top: -100px;
    left: 50%;
    margin-left: -100px;
  }
</style>
