<template>
  <div class="row">
    <div class="col-xs-6">
      <div class="form-group">
        <label>Image Width</label>
        <input type="number" class="form-control" @input="imageWidthChange" :value="imageWidth">
      </div>
    </div>
    <div class="col-xs-6">
      <div class="form-group">
        <label>Image Height</label>
        <input type="number" class="form-control" @input="imageHeightChange" :value="imageHeight">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      imageHeight() {
        return this.$store.state.imageHeight
      },
      imageWidth() {
        return this.$store.state.imageWidth
      }
    },
    methods: {
      imageWidthChange(event) {
        this.$store.commit('imageWidthChange', event.target.value)
      },
      imageHeightChange(event) {
        this.$store.commit('imageHeightChange', event.target.value)
      }
    }
  }
</script>

<style>
  
</style>
