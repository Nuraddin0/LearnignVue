<template>
    <TodoList :myData="todoList" @delete-detected="$emit('delete-detected', $event)"/>
    <ResultBar :length="todoList.length"/> 
</template>

<script>


import TodoList from './TodoList.vue';
import ResultBar from './ResultBar.vue';
export default{
    components: {
        TodoList,
        ResultBar
    },
    props: {
        todoList:{
            type: Array,
            required: true
        }
    }
}
</script>