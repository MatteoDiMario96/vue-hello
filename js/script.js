const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            immaginePrincipale: "https://i.redd.it/3fi2a5ae1hkz.jpg",
            immagineSecondaria: "https://web-savvy-marketing.com/wp-content/uploads/2016/10/Crazy-Website-Developers.jpg"
        }
    },
    methods: {
        supplica (){
            alert("Mamma mia, sono un programmatore!!")
            alert(".....sono un programmatore ?")
            let aspettativaSupplica = false;
            while(!aspettativaSupplica){
            let rispostaUtenteSupplica =  prompt("Dimmi di si, ti prego!");
            rispostaUtenteSupplica = rispostaUtenteSupplica.toLowerCase();
                if(rispostaUtenteSupplica === "si" || rispostaUtenteSupplica === "yes" || rispostaUtenteSupplica === "certo"){
                    aspettativaSupplica = true;
                }else{
                    alert("Guarda che me ne accorgo, fai il bravo o la brava, perfavore!")
                }
            }
        }
    }
}).mount('#app')
