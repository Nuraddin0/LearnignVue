const app = Vue.createApp({
    data(){
        return{
            itemList: ["elma", "kiraz", "armut", "cilek", "karpuz"],
            search: "Initial Text",
        }
    },
    computed:{
        filterList(){
            return this.itemList.filter(i => i.includes(this.search));
        }
    }

}).mount("#app");