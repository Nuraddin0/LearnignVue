const app = Vue .createApp({
    data(){
        return{
            showContainer: false,
            count: 0,
        }
    },
    computed:{
        getClass(){
            return {'text-success': this.count>0, 'text-danger': this.count<0};
        }
    }

});

app.mount('#app');