class Shirt{
    constructor(_color,_size){
        this.color=_color;
        this.size=_size;
    }
    getShirt(){
        console.log("I have a " + this.color+" size:"+this.size+" shirt. ");
    }
}
let greenShirt=new Shirt("green","L");
let blueShirt=new Shirt("blue","S");
console.log();
greenShirt.getShirt();
blueShirt.getShirt();