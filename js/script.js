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
            inputText:'',
            errorString:'',
        }
    },
    methods: {
        createTask () {
            this.todos.push({text:this.inputText,done:false})
            if(this.inputText.lenght < 5){
                this.errorString = 'Attenzione, il messaggio deve avere almeno 5 caratteri';
            }
        },
        removeTask(index){
            console.log(index);
            this.errorString = '';
            if(this.tasks[index].done){
                this.tasks.splice(index,1);
            }else{
                this.errorString = 'attenzione! non si può eliminare il task se non è stato ancora fatto'
            }
        }
    }
}).mount('#app');