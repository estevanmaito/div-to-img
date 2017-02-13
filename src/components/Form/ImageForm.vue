<template>
  <div>
    <div class="col-sm-12 col-md-4">
      <div class="form-group">
        <label>Image File</label>
        <input type="file" class="form-control" @change="urlChange">
      </div>
      <image-dimensions></image-dimensions>
      <image-alignment></image-alignment>
    </div>
    <div class="col-sm-12 col-md-4">
      <div class="form-group">
        <label>Text</label>
        <input type="text" class="form-control" :value="imageText" @keyup="textChange">
      </div>
      <div class="row">
        <div class="col-xs-9">
          <image-fonts></image-fonts>
        </div>
        <div class="col-xs-3">
          <color-picker :defaultColor="fontColor" @colorChange="fontColorChange">Color</color-picker>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label>Font size</label>
            <input type="number" class="form-control" :value="fontSize" @input="fontSizeChange">
          </div>
        </div>
        <div class="col-xs-6">
          <image-text-alignment></image-text-alignment>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <image-filters></image-filters>
      <div class="row">
        <div class="col-xs-3">
          <color-picker :defaultColor="overlayColor" @colorChange="overlayColorChange">Overlay</color-picker>
        </div>
        <div class="col-xs-9">
          <input-range
            :defaultRange="overlayOpacity"
            @rangeChange="overlayOpacityChange"
          >
            Opacity
          </input-range>
        </div>
      </div>
      <button class="btn btn-success" @click="downloadImage">Download image</button>
    </div>
  </div>
</template>

<script>
  import domtoimage from 'dom-to-image'
  import ImageFilters from './ImageFilters.vue'
  import ImageDimensions from './ImageDimensions.vue'
  import ImageFonts from './ImageFonts.vue'
  import ImageTextAlignment from './ImageTextAlignment.vue'
  import ColorPicker from './ColorPicker.vue'
  import InputRange from './InputRange.vue'
  import ImageAlignment from './ImageAlignment.vue'

  export default {
    components: {
      ImageFilters,
      ImageDimensions,
      ImageFonts,
      ImageTextAlignment,
      ColorPicker,
      InputRange,
      ImageAlignment
    },
    computed: {
      imageText() {
        return this.$store.state.text
      },
      fontSize() {
        return this.$store.state.fontSize
      },
      fontColor() {
        return this.$store.state.fontColor
      },
      selectedFont() {
        return this.$store.state.selectedFont
      },
      overlayColor() {
        return this.$store.state.overlayColor
      },
      overlayOpacity() {
        return this.$store.state.overlayOpacity
      }
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
      },
      textChange(event) {
        this.$store.commit('textChange', event.target.value)
      },
      fontColorChange(value) {
        this.$store.commit('fontColorChange', value)
      },
      fontSizeChange(event) {
        this.$store.commit('fontSizeChange', event.target.value)
      },
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
            var img = new Image() // eslint-disable-line
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
