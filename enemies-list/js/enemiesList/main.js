// Put your code here

console.log("My Enemies List!");
console.log("----------------");
function enemy(firstName, lastName, isReallyHated, offenses) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.IsReallyHated = isReallyHated;
    this.Offenses = offenses;
  }
const GetEnemies = () =>{
    let enemies = [];
    enemies.push(new enemy("Joshua","Flowers",true,["Being a jerk to me in elementary school",
    "Not being nice to me in elementary school"])); 
    enemies.push(new enemy("Darth","Vader",false, ["Cut off Luke's hand",
    "Murdered all those kids",
    "Unkind management practices"]));

    enemies.push(new enemy("Betty", "Rudelady", true,[ "Phone calls in the theater",
    "Phone calls on the bus",
    "Phone calls in line at the grocery store",
    "Poor conversationalist"]));

    enemies.push(new enemy("Leon","Peck",false, [ "Keeps giving me a hotplate"]));
    return enemies;

}
const enemies = GetEnemies();

for(myEnemy in enemies)
{
    if (enemies[myEnemy].IsReallyHated)
    {
        console.log(`${enemies[myEnemy].FirstName} ${enemies[myEnemy].LastName} (Really, really dislike!)`);
    }
    else
    {
        console.log(`${enemies[myEnemy].FirstName} ${enemies[myEnemy].LastName}`);
    }
}

