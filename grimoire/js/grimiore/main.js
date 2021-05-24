// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");
function SpellBook(title, spells){
    this.Title = title;
    this.Spells = spells;

}
function Spell (name, isEvil, energyRequired)
{
    this.Name = name;
    this.IsEvil = isEvil;
    this.EnergyRequired = energyRequired;
}
const GetAllSpells = () => {
    let allSpells = [];
    allSpells.push(new Spell("Turn enemy into a newt", true, 5.1));
    allSpells.push(new Spell("Conjure some gold for a local charity", false, 2.99));
    allSpells.push(new Spell("Give a deaf person the ability to heal", false, 12.2));
    allSpells.push(new Spell("Make yourself emperor of the universe", true, 100.00));
    allSpells.push(new Spell("Convince your relatives your political views are correct", false, 2921.5));
    return allSpells;
}
const MakeGoodSpellBook = (allSpells) => {
    let goodBook = new SpellBook();
    goodBook.Title = "Good Book";
    goodBook.Spells = allSpells.filter(spell => {
        if (!spell.IsEvil) { return spell; }
    }
    )
    return goodBook;
}
const MakeEvilSpellBook = (allSpells) => {
    let evilBook = new SpellBook();
    evilBook.Title = "Evil Book";
    evilBook.Spells = allSpells.filter(spell => {
        if (spell.IsEvil) { return spell; }
    }
    )
    return evilBook;
}

const DisplaySpellBook = (book) => {
    console.log(book.Title);
    for(spell in book.Spells){
        console.log(`  ${book.Spells[spell].Name}`)
    }

}
const allSpells = GetAllSpells();
const goodBook = MakeGoodSpellBook(allSpells);
DisplaySpellBook(goodBook);
console.log();
const evilBook = MakeEvilSpellBook(allSpells);
DisplaySpellBook(evilBook);