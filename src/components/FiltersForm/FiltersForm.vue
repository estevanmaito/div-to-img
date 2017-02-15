<template>
  <div class="row">
    <div class="col-sm-12">
      <image-filters></image-filters>
      <div class="row">
        <div class="col-xs-3">
          <color-picker 
            :defaultColor="overlayColor" 
            @colorChange="overlayColorChange"
          >
            Overlay
          </color-picker>
        </div>
        <div class="col-xs-9">
          <div class="row">
            <input-range
              :defaultRange="overlayOpacity"
              :min="0"
              :max="100"
              @rangeChange="overlayOpacityChange"
            >
              Opacity (%)
            </input-range>
          </div>
        </div>
      </div>
      <button 
        class="btn btn-success" 
        @click="downloadImage"
      >
        Download image
      </button>
    </div>
  </div>
</template>

<script>
  import ImageFilters from './ImageFilters.vue'
  import ColorPicker from '../Form/ColorPicker.vue'
  import InputRange from '../Form/InputRange.vue'
  import domtoimage from 'dom-to-image'

  export default {
    components: {
      ImageFilters,
      ColorPicker,
      InputRange
    },
    computed: {
      overlayColor() {
        return this.$store.state.filtersModule.overlayColor
      },
      overlayOpacity() {
        return this.$store.state.filtersModule.overlayOpacity
      }
    },
    methods: {
      overlayColorChange(value) {
        this.$store.commit('overlayColorChange', value)
      },
      overlayOpacityChange(value) {
        this.$store.commit('overlayOpacityChange', value)
      },
      downloadImage() {
        const image = document.getElementById('download');
        const link = document.createElement('a');

        domtoimage.toPng(image)
          .then(dataUrl => {
            link.href = dataUrl
            link.download = 'image.png'
            link.click()
          })
      }
    }
  }
</script>

<style>
  
</style>
