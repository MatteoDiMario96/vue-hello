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
            alert("Mamma mia, sei un programmatore!!")
            let risultatoSupplica = false;
            while(!risultatoSupplica){
            let rispostaUtenteSupplica =  prompt("Dimmi di si, ti prego!");
            rispostaUtenteSupplica = rispostaUtenteSupplica.toLowerCase();
                if(rispostaUtenteSupplica === "si" || rispostaUtenteSupplica === "yes" || rispostaUtenteSupplica === "certo"){
                    risultatoSupplica = true;
                }else{
                    alert("Guarda che me ne accorgo, fai il bravo o la brava, perfavore!")
                }
            }
        }
    }
}).mount('#app')
