// Put your code here
const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

console.log("All Place Names");

console.log(names);

for( places in names){
   console.log(names[places]);
}
console.log();

theNames = names.filter(name => {
    if(name.startsWith('The')){
        return name;
    }
})

console.log("'The' Place Names");

for( places in theNames){
    console.log(theNames[places]);
 }