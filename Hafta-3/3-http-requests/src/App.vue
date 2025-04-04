<template>
  <div class="container">
    <h3>Alisveris Listesi</h3>
    
    <InputSection :onSave="onSave"/>

    <ListSection :onDelete="onDelete" :itemsList="itemsList"/>

    <small class="mt-2  d-flex justify-content-end align-items-center text-red">
      {{ itemsList.length }} adet alinacak urun var
    </small>
  </div>
</template>


<script>
import InputSection from './components/InputSection.vue';
import ListSection from './components/ListSection.vue';
import axios from 'axios';
export default {
  components:{
    InputSection,
    ListSection
  },
  data() {
    return {
      itemsList: [],
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log("items_response >>>", items_response);
      this.itemsList = items_response.data || [];
      console.log("itemsList >>>",this.itemsList);
    });
    
  },
  methods: {


    onSave(event) {
      const object = {
        title: event.target.value,
        createdAt: new Date().toISOString(),
        completed: false
      }
      axios.post("http://localhost:3000/items", object).then(save_response => {
        console.log(save_response);
        this.itemsList.push(save_response.data);
      });
      event.target.value = '';
      event.target.focus();
    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log(delete_response);
        this.itemsList = this.itemsList.filter(i => i.id !== item.id);
      })
    }
  }
}</script>