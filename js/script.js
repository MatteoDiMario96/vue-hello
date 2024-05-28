const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            immagine: "https://i.redd.it/3fi2a5ae1hkz.jpg"
        }
    }
}).mount('#app')