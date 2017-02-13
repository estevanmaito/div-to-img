<template>
  <div class="col-sm-12">
    <div id="download" :style="canvasStyle" @dragover.prevent="" @drop="drop">
      <div id="facebook-post" :style="imageStyle">
        <div id="overlay" :style="overlayStyle"></div>
      </div>
      <span 
        class="text"
        draggable 
        @dragstart="dragStart" 
        id="dragme"
        :style="textStyle"
      >
        {{ imageText }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textLeft: 0,
        textTop: 0
      }
    },
    computed: {
      imageStyle() {
        return {
          backgroundImage: this.$store.getters.backgroundImage,
          backgroundPosition: this.$store.state.imageAlign,
          width: this.$store.getters.imageWidth,
          height: this.$store.getters.imageHeight,
          filter: this.$store.state.filter
        }
      },
      textStyle() {
        return {
          left: this.textLeft,
          top: this.textTop,
          fontFamily: this.$store.state.selectedFont,
          fontSize: this.$store.getters.fontSize,
          color: this.$store.state.fontColor,
          maxWidth: this.$store.getters.imageWidth,
          maxHeight: this.$store.getters.imageHeight,
          textAlign: this.$store.state.textAlign
        }
      },
      canvasStyle() {
        return {
          width: this.$store.getters.imageWidth,
          height: this.$store.getters.imageHeight
        }
      },
      imageText() {
        return this.$store.state.text
      },
      overlayStyle() {
        return {
          backgroundColor: this.$store.state.overlayColor,
          opacity: this.$store.getters.overlayOpacity
        }
      }
    },
    methods: {
      dragStart(event) {
        event.dataTransfer.setData('text/plain',
        `${parseInt(this.textLeft, 10) - event.clientX}, ${parseInt(this.textTop, 10) - event.clientY}`)
      },
      drop(event) {
        var offset = event.dataTransfer.getData('text/plain').split(',');
        this.textLeft = `${event.clientX + parseInt(offset[0], 10)}px`
        this.textTop = `${event.clientY + parseInt(offset[1], 10)}px`;
        event.preventDefault();
        return false;
      }
    }
  }
</script>

<style>  
  * {
    box-sizing: border-box;
  }
  
  #facebook-post {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  #overlay {
    content: '';
    position: absolute;
    background: #000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #download {
    overflow: hidden;
    position: relative;
  }
  
  .text {
    display: block;
    width: 80%;
    position: absolute;
  }
</style>
