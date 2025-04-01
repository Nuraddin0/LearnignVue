const app = Vue.createApp({
    data() {
        return {
            todoList: [],
            input: '',
        }
    },
    methods: {
        addToList() {
            if (this.input === '')
                alert("Task title can not be empty.")
            else {
                this.todoList.push(
                    { id: new Date().getTime(), text: this.input, checked: false }
                )
                this.input = '';
            }
        },
        deleteItem(todoItem) {
            this.todoList = this.todoList.filter((todo) => todo.id !== todoItem.id);
        }
    },
    computed: {
        completedTask() {
            return (this.todoList.filter((item) => item.checked)).length;
        },
        uncompletedTask() {
            return (this.todoList.filter((item) => !item.checked)).length;
        }
    }

});

app.mount('#app');
