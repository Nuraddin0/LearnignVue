const app = Vue.createApp({
    data(){
        return{
            number: 0,
            number2: 0,
        }
    },
    methods:{
        
    },
    computed:{
        getNumber(){
            console.log('Number1 calisti');
            return this.number>=5 ? 'Number is greater than 5': 'Number is smaller than 5';
        },
        getNumber2(){
            console.log('Number2 calisti');
            return this.number2>=5 ? 'Number is greater than 5': 'Number is smaller than 5'
        }
    },
    watch:{
        number(oldValue, newValue){
            console.log(oldValue, newValue);
        }
    }
});

app.mount('#app')