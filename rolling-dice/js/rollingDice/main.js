// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");
const htmlTag = document.getElementById("Main");
function Die (value)
{
    this.Value = value;
    this.toString = function() {
        let dieString = 'Unknown';
        switch (this.Value){
            case 1:
                dieString = "\u2680"; // These \uXXXX values are fancy unicode characters
                break;
            case 2:
                dieString = "\u2681";
                break;
            case 3:
                dieString = "\u2682";
                break;
            case 4:
                dieString = "\u2683";
                break;
            case 5:
                dieString = "\u2684";
                break;
            case 6:
                dieString = "\u2685";
                break;
        }
        return dieString;
    }
}
const Roll = () =>{
    let dieValue = new Die(Math.floor(Math.random() * 6) + 1);
    return dieValue;
}
for (i = 0; i < 10; i++)
{
    let die1 = Roll();
    let die2 = Roll();

    let message = `${die1} + ${die2} == ${die1 + die2}`;
    if (die1.Value == die2.Value)
    {
        message += " DOUBLES!";
    }
    htmlTag.append(message)
    htmlTag.append('</br>')
    console.log(message);
}
