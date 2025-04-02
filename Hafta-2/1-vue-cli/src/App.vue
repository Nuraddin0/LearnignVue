<template>
  
  <div class="container">
    <app-header></app-header>
    <h1>Welcome to Vue World</h1>
    <CounterItem/><counter-item/>
    <count-item></count-item><!--same as <CounterItem/><counter-item/> (vue-cli makes auto convertion)-->
  </div>
  
</template>

<script>
import counterItem from './components/CounterItem.vue'
export default{
  components:{
    CounterItem: counterItem,
  }
}
</script>