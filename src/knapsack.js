module.exports = class Knapsack {
  constructor(){
    this.colors = [];
    this.contents = new Map()
  }
  add(color, count){
    this.contents.set(color, count + (this.contents.get(color) || 0));
  }
  check(color){
    return this.contents.get(color) || 0;
  }
  take(color, count){
    this.contents.set(color, count + (this.contents.get(color) || 0));
  }
  draw(count){
    const items = Array.from(this.contents.keys());
    console.log(items);
    return keys[Math.floor(Math.random() * keys.length)];
  }
}