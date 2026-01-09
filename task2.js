export class FriendNames {
    constructor(name1,name2,name3) {
  this.name1 = name1;
  this.name2 = name2;
  this.name3 = name3;
    }
    set setName1(name1) {
        this.name1 = name1;
    }  
    get getName1() {
        return this.name1;
    } 
     set setName2(name2) {
        this.name1 = name2;
    }  
    get getName2() {
        return this.name2;
    } 
     set setName3(name3) {
        this.name1 = this.name3;
    }  
    get getName3() {
        return this.name3;
    } 

  }

  const friend = new FriendNames("Ana","Luis","Kimi");
  console.log(friend);