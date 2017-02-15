<template>
  <div class="form-group">
    <label><slot></slot></label>
    <input type="color" :value="defaultColor" @input="colorChange" class="form-control">
  </div>
</template>

<script>
  export default {
    props: ['defaultColor'],
    methods: {
      colorChange(event) {
        this.$emit('colorChange', event.target.value)
      }
    }
  }
</script>

<style>
  
</style>
