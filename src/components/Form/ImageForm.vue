<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <label>Image File</label>
          <input 
            type="file" 
            class="form-control" 
            @change="urlChange"
          >
        </div>
        <image-dimensions></image-dimensions>
        <image-alignment></image-alignment>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageDimensions from './ImageDimensions.vue'
  import ImageAlignment from './ImageAlignment.vue'

  export default {
    components: {
      ImageDimensions,
      ImageAlignment
    },
    methods: {
      urlChange(event) {
        const reader = new FileReader()
        const file = event.target.files[0]

        reader.addEventListener('load', () => {
          this.$store.commit('urlChange', reader.result);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
      }
    }
  }
</script>

<style>
  
</style>
