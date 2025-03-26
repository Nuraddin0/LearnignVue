const app = Vue .createApp({
    data() {
        return{
            showBorder: false,
            boxClass: 'border',
            redBg: false,
            boxBG: 'cyan',
        }
    },
    computed: {
        boxClasses(){
            return{ border : this.showBorder, red : this.redBg}
        }
    }
});


app.mount('#app');