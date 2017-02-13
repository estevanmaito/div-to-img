<template>
  <div class="form-group">
    <label>Alignment</label>
    <div class="btn-group btn-group-justified">
      <div class="btn-group">
        <button 
          :class="[activeClass === 'left' ? 'active' : '', 'btn', 'btn-default']" 
          @click="textAlign('left')"
          title="Align left"
        >
          <i class="glyphicon glyphicon-align-left"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'center' ? 'active' : '', 'btn', 'btn-default']" 
          @click="textAlign('center')"
          title="Align center"
        >
          <i class="glyphicon glyphicon-align-center"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'right' ? 'active' : '', 'btn', 'btn-default']" 
          @click="textAlign('right')"
          title="Align right"
        >
          <i class="glyphicon glyphicon-align-right"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'justify' ? 'active' : '', 'btn', 'btn-default']" 
          @click="textAlign('justify')"
          title="Align justify"
        >
          <i class="glyphicon glyphicon-align-justify"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeClass: 'center'
      }
    },
    methods: {
      textAlign(value) {
        this.activeClass = value
        this.$store.commit('textAlignChange', value)
      }
    }
  }
</script>

<style>
  
</style>
