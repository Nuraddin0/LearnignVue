<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <button class="red" @click="activeComp = 'MyRed'">Red</button>  
        <button class="blue" @click="activeComp = 'MyBlue'">Blue</button>
        <button class="green" @click="activeComp = 'MyGreen'">Green</button>
      </div>


      <!-- <MyBlue v-if="activeComp === 'Blue'" class="mb-2"/>
      <MyRed v-if="activeComp === 'Red'" class="mb-2"/>
      <MyGreen v-if="activeComp === 'Green'" class="mb-2"/> -->
      {{ activeComp }}

      <keep-alive>
        <component :is="activeComp" msg="Red Component">
          <h3 class="bg-green text-white">Green Component</h3>
        </component>
      </keep-alive>
        <!-- prevents the remount-ation of component -->

    </div>
  </div>
</template>


<script>
import MyBlue from './components/MyBlue.vue';
import MyRed from './components/MyRed.vue';
import MyGreen from './components/MyGreen.vue';
export default{
  components:{
    MyBlue,
    MyRed,
    MyGreen
  },
  data() {
    return {
      activeComp: "MyRed"
    }
  },
}</script>