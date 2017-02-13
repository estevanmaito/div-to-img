<template>
  <div class="container">
    <div class="row">
      <image-form></image-form>
    </div>
    <div class="row">
      <image-component></image-component>
    </div>
  </div>
</template>

<script>
import ImageComponent from './components/Image'
import ImageForm from './components/Form/ImageForm.vue'

export default {
  name: 'app',
  components: {
    ImageComponent,
    ImageForm
  }
}
</script>

<style>
  .container {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
