<template>
    <button @click="pushToList(Date.now())">Set Data</button>
</template>

<script>
export default{
    inject: ["pushToList"]
}</script>