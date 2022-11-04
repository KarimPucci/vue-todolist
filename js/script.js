console.log("hello");

const { createApp } = Vue;

createApp ({
    data(){
        return{
            todos: [
                {text: 'Fare benzina alla moto', done: true},
                {text: 'Fare la spesa', done: false},
                {text: 'Pagare la bolletta luce', done: false}
            ],
            inputText:''
        }
    },
    methods: {
        createTask () {
            this.todos.push({text:this.inputText,done:false})
            if(this.inputText.lenght < 5){
                this.error = 'Attenzione, il messaggio deve avere almeno 5 caratteri';
            }
        }
    }
}).mount('#app');