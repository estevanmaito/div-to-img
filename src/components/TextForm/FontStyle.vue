<template>
  <div class="col-xs-12">
    <div class="form-group">
      <label>Font style</label>
      <div class="btn-group btn-group-justified">
        <div class="btn-group">
          <button 
            :class="[italicActive ? 'active' : '', 'btn', 'btn-default']"
            @click="fontStyleChange"
          >
            <i class="glyphicon glyphicon-italic"></i>
          </button>
        </div>
        <div class="btn-group">
          <button 
            :class="[boldActive ? 'active' : '', 'btn', 'btn-default']"
            @click="fontWeightChange"
          >
            <i class="glyphicon glyphicon-bold"></i>
          </button>
        </div>
        <div class="btn-group">
          <button 
            :class="[underlineActive ? 'active' : '', 'btn', 'btn-default']"
            @click="textDecorationChange"
          >
            <i class="glyphicon glyphicon-text-color"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        italicActive: false,
        boldActive: false,
        underlineActive: false
      }
    },
    methods: {
      fontStyleChange() {
        this.italicActive = !this.italicActive
        this.$store.commit('fontStyleChange')
      },
      fontWeightChange() {
        this.boldActive = !this.boldActive
        this.$store.commit('fontWeightChange')
      },
      textDecorationChange() {
        this.underlineActive = !this.underlineActive
        this.$store.commit('textDecorationChange')
      }
    }
  }
</script>

<style>
  
</style>
