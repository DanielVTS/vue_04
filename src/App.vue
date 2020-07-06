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
        <Cart></Cart>
      </template>
    </BaseComponent>
  </div>
</template>

<script>

import BaseComponent from './components/BaseComponent.vue';
import Cart from "./components/Cart/Cart";
import SideBar from "./components/SideBar/SideBar";
import CartButton from "./components/SideBar/CartButton";
import UserButton from "./components/SideBar/UserButton";

export default {
  name: 'App',
  components: {
    UserButton,
    CartButton,
    SideBar,
    Cart,
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
