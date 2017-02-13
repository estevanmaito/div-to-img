<template>
  <div class="form-group">
    <label>Filters</label>
    <div class="btn-group">
      <button 
        :class="[activeClass === 'none' ? 'active' : '', 'btn', 'btn-default']"
        @click="applyFilter('none')"
      >
        none
      </button>
      <button 
        :class="[activeClass === 'blur' ? 'active' : '', 'btn', 'btn-default']"
        @click="applyFilter('blur')"
      >
        Blur
      </button>
      <button 
        :class="[activeClass === '1977' ? 'active' : '', 'btn', 'btn-default']"
        @click="applyFilter('1977')"
      >
        1977
      </button>
      <button 
        :class="[activeClass === 'grayscale' ? 'active' : '', 'btn', 'btn-default']"
        @click="applyFilter('grayscale')"
      >
        Grayscale
      </button>
      <button 
        :class="[activeClass === 'brooklyn' ? 'active' : '', 'btn', 'btn-default']"
        @click="applyFilter('brooklyn')"
      >
        Brooklyn
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeClass: 'none'
      }
    },
    methods: {
      applyFilter(filter) {
        this.activeClass = filter
        this.$store.commit('filterChange', filter)
      }
    }
  }
</script>

<style>
  
</style>
