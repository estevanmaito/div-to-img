<template>
  <div class="form-group">
    <input-range
      v-for="(filter, key) in filters"
      :defaultRange="filter.value"
      :min="filter.min"
      :max="filter.max"
      :name="key"
      @rangeChange="applyFilter"
    >
      {{ filter.name }}
    </input-range>
  </div>
</template>

<script>
  import InputRange from '../Form/InputRange.vue'

  export default {
    components: {
      InputRange
    },
    computed: {
      filters() {
        return this.$store.state.filters
      }
    },
    methods: {
      applyFilter(filter) {
        this.$store.commit('filterChange', {
          name: filter.name,
          value: filter.value
        })
      }
    }
  }
</script>

<style>
  
</style>
