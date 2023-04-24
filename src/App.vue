<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/farmfresh/HeaderComponent.vue';
import FooterComponent from './components/farmfresh/FooterComponent.vue';
export default {
  components:{HeaderComponent, FooterComponent}
}
</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
  </div>

  <RouterView />
  <div>
    <FooterComponent></FooterComponent>
  </div>
</template>


