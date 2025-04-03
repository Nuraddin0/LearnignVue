<template>
    <input v-model="input" type="text" id="todoText" placeholder="Enter a text..." @keydown.enter="sendData()">
    <label for="todoText"></label>
</template>



<script>
export default{
    data() {
        return {
            input: ''
        }
    },
    methods:{
        sendData(){
            this.$emit('dataEvent', this.input);
            this.input= ''
        }
    }
}
</script>