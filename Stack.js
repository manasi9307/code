var Stack = function(){
  this.count=0;
  this.storage=[];

  this.push = function(value){
    this.storage[this.count]=value;
    this.count++;
  }

  this.pop = function(){
    if(this.count == 0)
    return undefined;

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}
 this.size = function(){
   return this.count;
 }

 this.peek = function(){
  return this.storage[this.count-1];
 }
}


var mystack = new Stack();

mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
console.log(mystack.size());
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.size());
