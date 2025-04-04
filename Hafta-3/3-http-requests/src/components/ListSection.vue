<template>
    <div>
        <ul v-if="itemsList.length > 0">
            <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
                <span>{{ item.title }}</span>
                <button @click="onDelete(item)" class="sm red">Sil</button>
            </li>
        </ul>
        <div v-else class="bg-blue text-white">
            Herhangi bir urun yoktur.
        </div>
    </div>
</template>


<script>
export default{
    props: {
        itemsList: {
            type: Array,
            required: true 
        },
        onDelete:{
            type: Function,
            required: true
        }
    },
}</script>