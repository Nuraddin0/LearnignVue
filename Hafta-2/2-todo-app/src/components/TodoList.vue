<template>
    <ul>
        <li v-for="todo in myData" :key="todo.id" class="d-flex justify-content-between align-items-center">
            <span>{{ todo.text }}</span>
            <button class="red" @click="sendToDelete(todo)">Delete</button>
        </li>
    </ul> 
</template>

<script>
export default{
    props: ["myData"],
    methods:{
        sendToDelete(todo){
            this.$emit('delete-detected', todo);
        }
    }
}
</script>