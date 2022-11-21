var app = new Vue({
    el: '#app',
    data: {

        //variabile che salva i dati che recupero dalla richiesta api 
        numeroRandomPersonale: '',
        //variabile che salva i dati che recupero dalla richiesta api 
        numeroRandomPc: '',
        //variabile che determina l-inizio del gioco
        inizioGiocata: false,
        //variabile per visualizzare a schermo i risultati
        testo: '',
        //variabile randomMail
        randomMail:'',
        //array randomMail
        randomMailArray: [],

    },
    mounted() {

    },
    beforeUpdate() {

    },
    methods: {

        gioca() {

            this.inizioGiocata = true;
            //richiesta api numero personale
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((oggetto) => {
                    //console.log(response);

                    this.numeroRandomPersonale = oggetto.data.response;


                    //console.log(this.numeroRandomPersonale);

                })
            //richiesta api numero pc
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((oggetto) => {
                    //console.log(response);
                    this.numeroRandomPc = oggetto.data.response;


                })

            //condizione per i risultati

            if (this.numeroRandomPersonale > this.numeroRandomPc) {
                this.testo = 'hai vinto';
            } else if (this.numeroRandomPersonale < this.numeroRandomPc) {
                this.testo = ' ha vinto il pc';
            } else {
                this.testo = 'pareggio';
            }
        },

generaMail(){

    for(let i = 0; i < 10 ; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((oggetto)=>{
           
            //console.log(oggetto.data.response);
           let randomMail = oggetto.data.response;
           this.randomMail = randomMail;
           //console.log(randomMail);
           console.log(randomMail);
           //creo variabile array
           let randomMailArray = [];
           //pusho gli elementi ottenuti dal ciclo nell-array vuoto
           randomMailArray.push(randomMail)
           console.log(randomMailArray);


        })

            
        
    }
    
}

}
})