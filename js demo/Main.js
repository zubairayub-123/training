console.log("Hello World");
console.log('Hello World');

let age=23;
console.log(age);
age=35;
console.log(age);

const num=45;
console.log(num);

const name="Ayub";
const age1=30;
const rating=4.8;
const isCool=true;
const x=null;
const y=undefined;
let z;

console.log(typeof name);
console.log(typeof age1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log("Name is " +name +" I am " +age1);

const s="Zubair Ayub";
console.log(s.length);
console.log(s.substring(0,5));
console.log(s.split(''));

const arr='Rohit, Virat, Dhoni, Bumrah';
console.log(arr);
console.log(arr.split(','));

const fruits=['Apple','pears','oranges'];
console.log(fruits);
console.log(fruits[1]);
fruits.push("Mangoes");
console.log(fruits);
fruits[4]='Grapes';
console.log(fruits);
fruits.unshift('Pine Apple');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('Mangoes'));

//Objects

const person= {
    fname: 'Zubair',
    lname: 'Shaik',
    hobbies: ['sports','reading','trips'],
    address: {
        street: 'Masjid line',
        city: 'Proddatur',
        state: 'Andhra'
    }

}
console.log(person);
console.log(person.fname);
console.log(person.hobbies);
console.log(person.address.street);
person.email='efbkufg45@gmail.com'
console.log(person);

const todos=[
    {
        id:1,
        text: 'salah',
        isCompleted: true
    },
    {
        id:2,
        text: 'Reading Quran',
        isCompleted: true
    },
    {
        id:3,
        text: 'Running',
        isCompleted: false

    }
]

for(let i=0;i<todos.length;i++){
    console.log(todos[i]);
}

for(let todo of todos){
    console.log(todo.text);
}

//map
const todoText= todos.map(function(todo){
    return todo.text;
})
console.log(todoText);

//filter
const todoTextFilter= todos.filter(function(todo) {
    return todo.isCompleted == true;
})
console.log(todoTextFilter);

//if condition
const d=10;
if(d==10){
    console.log('d is 10');
}
else{
    console.log('d is not 10');
}
const color=d>5?'red':'blue';
console.log(color);

//functions
function add(a=1,b=2){
    return a+b;
}
console.log(add());
console.log(add(5,3));

//Arrow Function
const add1=(a=4,b=2)=>
{
    return a+b;
}
console.log(add1());
console.log(add1(5,5));


let myFunc=function(a,b, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
myFunc(6,"blr","Rohit",2002,"Virat",1995);

let myFun=function(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
myFun(6,"blr","Rohit",2002,"Virat",1995);


class Person {
    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
    }
    
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}


const person1 = new Person('zubair', 'shaik','30-3-1999');
const person2 = new Person('ayub', 'chennuru','25-5-2000');

console.log(person1.getFullName());

console.log(person1);
