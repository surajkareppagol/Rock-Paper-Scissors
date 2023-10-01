<template>
  <div
    class="signContainer"
    :style="{ transform: `${sign === '✌️' ? 'scaleY(-1)' : ' scaleX(1)'}` }"
  >
    <p
      class="sign"
      :style="{
        fontSize: `${size}rem`,
        transform: `${sign === '✌️' ? 'rotate(90deg)' : ' rotate(0deg)'}`,
      }"
    >
      {{ sign }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    sign: String,
    size: String,
  },
};
</script>

<style>
.signContainer {
  background-color: #f5ebe0;
  display: inline-block;
  padding: 4rem;
  border-radius: 11px;
}
</style>
