<template>
  <div>
    <div class="col-xs-8">
      <div class="form-group">
        <label><slot></slot></label>
        <input type="range" :value="defaultRange" :min="min" :max="max" @input="rangeChange">
      </div>
    </div>
    <div class="col-xs-4">
      <div class="form-group">
        <label>&nbsp;</label>
        <input type="number" class="form-control percent" :value="defaultRange"  @input="rangeChange">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['defaultRange', 'min', 'max', 'name'],
    methods: {
      rangeChange(event) {
        this.$emit('rangeChange', {
          value: event.target.value,
          name: this.name
        })
      }
    }
  }
</script>

<style scope>
  .percent {
    padding-right: 5px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    width: 100%;
    height: 2px;
    margin: 15px 0;
    border: none;
    /* padding: 15px 0; */
    /* border-radius: 14px; */
    background: #e1e1e1;
  }

  input[type="range"]::-moz-range-track {
    border: inherit;
    background: transparent;
  }

  input[type="range"]::-ms-track {
    border: inherit;
    color: transparent;
    background: transparent;
  }

  input[type="range"]::-ms-fill-lower,
  input[type="range"]::-ms-fill-upper {
    background: transparent;
  }

  input[type="range"]::-ms-tooltip {
    display: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 15px;
    background: #333333;
  }

  input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 15px;
    background: #333333;
  }

  input[type="range"]::-ms-thumb {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 0;
    background: #333333;
  }
</style>
