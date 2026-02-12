class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("name is too short");
            return;
        }
        this._name = value;
    }
}

let u = new User("Jenny");
console.log(u.name);

u.name = "Jack";

console.log(u.name);