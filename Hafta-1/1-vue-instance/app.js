const app = Vue.createApp({
    data(){
        return{
            title: 'Vue--2',
            content: 'lorem ipsum dolor sit amet', 
            marun: {
                title: 'Marun Giris',
                url: 'https://posta.marun.edu.tr/',
                target: '_blank',
                alt: 'Marun-Giris'
            },
            x:0,
            y:0,

        }
    },
    methods:{
        changeTitle(title){
            alert('Title Changed');

            if(this.title === title)
                this.title = 'Vue--2';
            else
                this.title = title;
        },
        getCoords(event){
            this.x = event.screenX;
            this.y= event.screenY;
            console.log(event.screenX, event.screenY);
        }
        
    }
    
});

app.mount('#app');