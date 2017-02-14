<template>
  <div class="form-group">
    <label>Alignment</label>
    <div class="btn-group btn-group-justified">
      <align-button-group
        v-for="direction in buttonDirections"
        :activeClass="activeClass"
        :direction="direction"
        @changeActive="imageAlign"
      >
        <i v-if="direction === 'center'" class="glyphicon glyphicon-object-align-horizontal"></i>
        <i :class="'glyphicon glyphicon-object-align-' + direction"></i>
      </align-button-group>
    </div>
  </div>
</template>

<script>
  import AlignButtonGroup from './AlignButtonGroup.vue'

  export default {
    data() {
      return {
        activeClass: 'horizontal',
        buttonDirections: [
          'top',
          'bottom',
          'center',
          'left',
          'right'
        ]
      }
    },
    components: {
      AlignButtonGroup
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
