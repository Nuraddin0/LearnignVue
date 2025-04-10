const app = Vue.createApp({
    data() {
        return {
        }
    },
});

app.component("counter-item", {
    data() {
        return {
            counter: 0,
        }
    },
    template:
    `
        <div class="container-sm">
            <h3>{{ counter }}</h3>
            <div>
                <button @click="counter++" class="green">+</button>
                <button @click="counter--" class="red">-</button>
            </div>
        </div>
    `
});

app.mount('#app');