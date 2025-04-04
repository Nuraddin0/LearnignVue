<template>
  <div>
    <MyModal :onSave="onSave">
      <template #title>
        <h3>Slot ile gelen title</h3>
      </template>


      <template v-slot:content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum veritatis nulla, odio repellat quasi
        harum? Eos, aspernatur accusantium illo alias sapiente rerum ex voluptatibus eum in reprehenderit, optio vel!
      </template>
      <!-- <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum veritatis nulla, odio repellat quasi
        harum? Eos, aspernatur accusantium illo alias sapiente rerum ex voluptatibus eum in reprehenderit, optio vel!
      </template> -->


      <template #default>
        Bu default olarak gosterilecek
      </template>
      
    </MyModal>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal.vue'
export default {
  components: {
    MyModal
  },
  methods: {
    onSave() {
      alert("Saved!!")
    }
  }
}</script>