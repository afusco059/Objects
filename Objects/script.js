let dog ={
    name:"Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
};

console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());
document.getElementById('name').innerHTML = dog.name
document.getElementById('num').innerHTML = dog.numLegs
