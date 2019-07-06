//Pokemon info blueprint
function Pokemon(name, hp, atk, upAtk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.upAtk = upAtk;
    this.updateAtk = function() {
        return this.atk = this.atk + this.upAtk;
    };
}
//Global Var
var fighter;
var enemy;
//***Give Pokemon stats
//var charmander = { hp = 100, atk = 10, upAtk = 2};
var charmander = new Pokemon("Charmander", "100", "10","2");
//var squirtle = { hp = 180, atk = 5, upAtk = 4};
var squirtle = new Pokemon("Squirtle", "180", "5","4");
//var bulbasaur = { hp = 130, atk = 7, upAtk = 5};
var bulbasaur = new Pokemon("Bulbasaur", "130", "7", "5");
//var pikachu = { hp = 70, atk = 8, upAtk = 10};
var pikachu = new Pokemon("Pikachu", "70", "8","10");




//Main Game




