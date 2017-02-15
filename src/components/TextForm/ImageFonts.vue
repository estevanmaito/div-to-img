<template>
  <div class="form-group">
    <label>Font</label>
    <select class="form-control" @change="fontChange">
      <option v-for="font in fonts" :style="{ fontFamily: font }" :value="font" :selected="selectedFont === font">{{ font }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ['selectedFont'],
    computed: {
      fonts() {
        return this.$store.state.textModule.fonts
      }
    },
    methods: {
      fontChange(event) {
        this.$store.commit('fontChange', event.target.value)
      }
    }
  }
</script>

<style>
  
</style>
