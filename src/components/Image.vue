<template>
  <div class="col-sm-12">
    <i class="fa fa-arrows" aria-hidden="true"></i> Move text by dragging it
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
        textLeft: '10px',
        textTop: '10px'
      }
    },
    computed: {
      imageStyle() {
        return {
          backgroundImage: this.$store.getters.backgroundImage,
          backgroundPosition: this.$store.state.imageModule.imageAlign,
          width: this.$store.getters.imageWidth,
          height: this.$store.getters.imageHeight,
          filter: this.$store.getters.filter
        }
      },
      textStyle() {
        return {
          left: this.textLeft,
          top: this.textTop,
          fontFamily: this.$store.state.textModule.selectedFont,
          fontSize: this.$store.getters.fontSize,
          fontStyle: this.$store.state.textModule.fontStyle,
          fontWeight: this.$store.state.textModule.fontWeight,
          textDecoration: this.$store.state.textModule.textDecoration,
          color: this.$store.state.textModule.fontColor,
          width: this.$store.getters.textBoxSize,
          maxHeight: this.$store.getters.imageHeight,
          textAlign: this.$store.state.textModule.textAlign,
          boxShadow: this.$route.path === '/text' ? '0 0 0 2px black' : ''
        }
      },
      canvasStyle() {
        return {
          width: this.$store.getters.imageWidth,
          height: this.$store.getters.imageHeight
        }
      },
      imageText() {
        return this.$store.state.textModule.text
      },
      overlayStyle() {
        return {
          backgroundColor: this.$store.state.filtersModule.overlayColor,
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
    position: relative;
  }

  #overlay {
    content: '';
    position: absolute;
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
    position: absolute;
    cursor: grab;
  }
</style>
