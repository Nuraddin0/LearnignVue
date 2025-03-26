const app = Vue.createApp({
    data(){
        return{
            search: '',
            itemList : ['elma','armut','kiraz','çilek'],
            filteredList: []
        };
    },
    methods:{
        
    },
    computed:{
        filteredList(){
            return this.itemList.filter(item => item.includes(this.search));
        }
    }
}).mount("#app");