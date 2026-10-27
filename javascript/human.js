class human{
    constructor(name, age){
        this.name=name;
        this.age=age;

    }
    speak(content){
        console.log (`${this.name} ${this.age}-${content}`)
    }

    happybirthday(){
        this.age=this.age+1;
        console.log(`Happy Birthday${this.name}. your agen now is ${this.age}`)
    }
}


let h1=new human("Sonali", 24);
let h2=new human("Harshad", 25);

h1.speak("hello");
h1.happybirthday();
h1.speak("Today is my birthday");