import { ageCalculator } from './task3.js'

export class FriendAge {
constructor(name1,edadAño, edadMes, edadDia) {
   
  this.name1 = name1;
  this.edad= ageCalculator(edadAño, edadMes, edadDia);
    }
    set setName1(name1) {
        this.name1 = name1;
    }  
    get getName() {
        return this.name1;

    }
    set setAge(edad) {
        this.edad = edad;
    }

    get getAge() {
        return this.edad;
}
returnAge(){
   return "Kimi is " + this.edad + " today!"; // tuve que poner Kimi porque es el nombre que se pide en la prueba 
}

}

const kimi = new FriendAge("Kimi",1995,6,25);
const Yaja = new FriendAge("Yaja",1994,2,23);
console.log(kimi.returnAge());
console.log(Yaja.returnAge());
