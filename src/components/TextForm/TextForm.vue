<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label>Text</label>
        <input 
          type="text" 
          class="form-control" 
          :value="text" 
          @keyup="textChange"
        >
      </div>
      <div class="row">
        <div class="col-xs-9">
          <image-fonts
            :selectedFont="selectedFont"
          >
          </image-fonts>
        </div>
        <div class="col-xs-3">
          <color-picker 
            :defaultColor="fontColor" 
            @colorChange="fontColorChange"
          >
            Color
          </color-picker>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label>Font size</label>
            <input 
              type="number" 
              class="form-control" 
              :value="fontSize" 
              @input="fontSizeChange"
            >
          </div>
        </div>
        <div class="col-xs-6">
          <image-text-alignment></image-text-alignment>
        </div>
      </div>
      <div class="row">
        <input-range
          :defaultRange="textBoxSize"
          :min="0"
          :max="100"
          @rangeChange="textBoxSizeChange"
        >
          Text box size (%)
        </input-range>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ImageFonts from './ImageFonts.vue'
  import ImageTextAlignment from './ImageTextAlignment.vue'
  import ColorPicker from '../Form/ColorPicker.vue'
  import InputRange from '../Form/InputRange.vue'

  export default {
    components: {
      ImageFonts,
      ImageTextAlignment,
      ColorPicker,
      InputRange
    },
    computed: mapState([
      'text',
      'fontSize',
      'fontColor',
      'selectedFont',
      'textBoxSize'
    ]),
    methods: {
      textChange(event) {
        this.$store.commit('textChange', event.target.value)
      },
      fontColorChange(value) {
        this.$store.commit('fontColorChange', value)
      },
      fontSizeChange(event) {
        this.$store.commit('fontSizeChange', event.target.value)
      },
      textBoxSizeChange(value) {
        this.$store.commit('textBoxSizeChange', value)
      }
    }
  }
</script>

<style>
  
</style>
