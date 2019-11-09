// Write your JS here


let hero  = {
    name: 'Perry',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'dagger', 
        damage: 2
    }
}


function rest (person) {
    if(person.health === 10) {
        alert('Your health is full')
    }
    person.health = 10
    return person

}

function pickUpItem (person, weapon) {
    person.inventory.push(weapon)


}

function equipWeapon(person) {
    if(person.inventory.length == 0) {
        return null
    } else {
    person.weapon = person.inventory[0]
    }
}

function changeName() {

   let newName = document.getElementById('inputName')
   newName = newName.value
    let endName = document.getElementById('setInputName')
    endName.innerText = newName
}


function displayStats() {

    let stats = document.getElementById('statsDiv')
    stats = stats.value
    stats = hero
    
}
