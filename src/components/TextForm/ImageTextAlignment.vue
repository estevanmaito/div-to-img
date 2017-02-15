<template>
  <div class="form-group">
    <label>Alignment</label>
    <div class="btn-group btn-group-justified">
      <align-button-group
        v-for="direction in buttonDirections"
        :activeClass="activeClass"
        :direction="direction"
        @changeActive="textAlign"
      >
        <i :class="'fa fa-align-' + direction"></i>
      </align-button-group>
    </div>
  </div>
</template>

<script>
  import AlignButtonGroup from '../Form/AlignButtonGroup.vue'

  export default {
    data() {
      return {
        activeClass: 'center',
        buttonDirections: [
          'left',
          'center',
          'right',
          'justify'
        ]
      }
    },
    components: {
      AlignButtonGroup
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
