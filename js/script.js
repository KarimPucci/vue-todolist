console.log("hello");

const { createApp } = Vue;

createApp ({
    data(){
        return{
            todos: [
                {text: 'Fare benzina alla moto', done: true},
                {text: 'Fare la spesa', done: false},
                {text: 'Pagare la bolletta luce', done: false}
            ]
        }
    },
}).mount('#app');