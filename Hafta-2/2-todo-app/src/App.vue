<template>
    <div class="container">
        <h3 class="text-center">ToDo App</h3>
        <hr>
        
        <AddSection @dataEvent="addToList"/>
        <ListSection :todoList="todoList" @delete-detected="deleteItem"/>
    </div>
</template>

<script>
import AddSection from './components/AddSection.vue';
import ListSection from './components/ListSection.vue';

export default{
    components:{
        AddSection,
        ListSection
    },
    data() {
        return {
            todoList: [
                {id: 1, text: "Boot#1"},
                {id: 2, text: "Boot#2"},
                {id: 3, text: "Boot#3"},
                {id: 4, text: "Boot#4"},
                {id: 5, text: "Boot#5"}
            ],
        }
    },
    methods: {
        deleteItem(todoItem) {
            this.todoList = this.todoList.filter((todo) => todo !== todoItem);
        },
        addToList(todo){
            this.todoList.push({
                id: Date.now(),
                text: todo
            })
            console.log(this.todoList)
        }
    },
}
</script>