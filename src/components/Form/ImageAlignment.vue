<template>
  <div class="form-group">
    <label>Alignment</label>
    <div class="btn-group btn-group-justified">
      <div class="btn-group">
        <button 
          :class="[activeClass === 'top' ? 'active' : '', 'btn', 'btn-default']" 
          @click="imageAlign('top')"
          title="Align top"
        >
          <i class="glyphicon glyphicon-object-align-top"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'bottom' ? 'active' : '', 'btn', 'btn-default']" 
          @click="imageAlign('bottom')"
          title="Align bottom"
        >
          <i class="glyphicon glyphicon-object-align-bottom"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'center' ? 'active' : '', 'btn', 'btn-default']" 
          @click="imageAlign('center')"
          title="Align center"
        >
          <i class="glyphicon glyphicon-object-align-horizontal"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'left' ? 'active' : '', 'btn', 'btn-default']" 
          @click="imageAlign('left')"
          title="Align left"
        >
          <i class="glyphicon glyphicon-object-align-left"></i>
        </button>
      </div>
      <div class="btn-group">
        <button 
          :class="[activeClass === 'right' ? 'active' : '', 'btn', 'btn-default']" 
          @click="imageAlign('right')"
          title="Align right"
        >
          <i class="glyphicon glyphicon-object-align-right"></i>
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
      imageAlign(value) {
        this.activeClass = value
        this.$store.commit('imageAlignChange', value)
      }
    }
  }
</script>

<style>
  
</style>
