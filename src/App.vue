<template>
  <div id="app">
    <BaseComponent>
      <template v-slot:sidebar>
        <SideBar>
          <template v-slot:SideBarButton>
            <UserButton></UserButton>
            <CartButton></CartButton>

          </template>
        </SideBar>
      </template>
      <template v-slot:page>
<!--        <Cart></Cart>-->
        <router-view></router-view>
      </template>
    </BaseComponent>
  </div>
</template>

<script>

import BaseComponent from './components/BaseComponent.vue';
import SideBar from "./components/sideBar/SideBar";
import CartButton from "./components/sideBar/CartButton";
import UserButton from "./components/sideBar/UserButton";

export default {
  name: 'App',

  components: {
    UserButton,
    CartButton,
    SideBar,
    BaseComponent,
  }
}
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
