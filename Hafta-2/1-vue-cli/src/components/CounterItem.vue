<template>
    <div class="container-sm">
        <h3>{{ counter }}</h3>
        <button @click="counter++" class="green sm">+</button>
        <button @click="counter--" class="red sm">-</button>
    </div>
</template>

<style>
</style>
<script>
export default{
    data(){
        return{
            counter: 0,
        };
    },
};
</script>