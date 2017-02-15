<template>
  <div>
    <a 
      class="pull-right reset-filters"
      @click="resetFilters"
    >
      Reset filters
    </a>
    <div class="form-group">
      <div class="row">
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
    </div>
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
        return this.$store.state.filtersModule.filters
      }
    },
    methods: {
      applyFilter(filter) {
        this.$store.commit('filterChange', {
          name: filter.name,
          value: filter.value
        })
      },
      resetFilters() {
        this.$store.commit('resetFilters')
      }
    }
  }
</script>

<style scoped>
  .reset-filters {
    cursor: pointer;
  }
</style>
