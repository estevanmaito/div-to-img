<template>
  <div class="btn-group">
    <button 
      :class="[activeClass === direction ? 'active' : '', 'btn', 'btn-default']" 
      @click="changeActive(direction)"
      :title="'Align ' + direction"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['direction', 'activeClass'],
    methods: {
      changeActive(value) {
        this.$emit('changeActive', value)
      }
    }
  }
</script>

<style>
  
</style>
