<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-3 scroll">
          <ul class="nav nav-tabs">
            <router-link to="/" tag="li" exact>
              <a><i class="glyphicon glyphicon-picture"></i></a>
            </router-link>
            <router-link to="/text" tag="li" exact>
              <a><i class="glyphicon glyphicon-text-size"></i></a>
            </router-link>
            <router-link to="/filters" tag="li" exact>
              <a><i class="glyphicon glyphicon-tasks"></i></a>
            </router-link>
          </ul>
          <router-view></router-view>
        </div>
        <div class="col-sm-12 col-md-9">
          <image-component></image-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from './components/Image'

export default {
  name: 'app',
  components: {
    ImageComponent
  }
}
</script>

<style>
  .container-fluid {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .scroll {
    max-height: calc(100vh - 30px);
    overflow-y: scroll;
  }
</style>
