<template>
  <div class="container">
    <UserSection />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
export default{
  components:{
    UserSection,
  },
  data() {
    return {
      provideData:{
        userList: ['Tayfun', 'Gokhan', 'Defne', 'Handan', 'Asli'],
      }
    }
  },
  methods:{
    pushToList(item){
      this.provideData.userList.push(item);
    }
  },
  provide(){
    return{
      userList: this.provideData.userList,
      pushToList: this.pushToList,
    }
  }
}
</script>