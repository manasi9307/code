class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
        }
    }

class DLL {
 constructor(){
    this.head= null;
    this.tail = null;
    this.length=0;
    }

push(val){
    var node  = new Node(val);
    if(!this.head) {
        this.head = node;
        this.tail = node;
    } else{
    this.tail.next =  node;
    node.prev = this.tail;
    this.tail = node;
    }
    this.length++;
    return this;
}

pop(){
    if(!this.head) return null;
    var result  = this.tail;
    if(this.length === 1){
        this.head=null;
        this.tail=null;
    } else{
    this.tail = result.prev;
    this.tail.next = null;
    result.prev = null;
    }
    this.length --;
    return result;
}

shift(){
    if(!this.head) return undefined;
    var item = this.head;
    if(this.length === 1){
        this.head=null;
        this.tail=null;
    } else{
        this.head = item.next;
        this.head.prev =  null;
        item.next=null;
    }
    this.length--;
    return item;
}

unshift(val){
    var node = new Node(val)
    if(!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.head.prev =  node;
        node.next = this.head;
        this.head= node;
    }
    this.length++;
    return this;
}

get(index){
    if(index<0 || index>this.length) return null;

    if(index < Math.floor(this.length/2)){
        var current = this.head;
        var counter = 0;
        while(counter !== index){
            current=current.next;
            counter++
        }
        return current;
    } else if(index > Math.floor(this.length/2)){
        var current = this.tail;
        var counter =  this.length-1;
        while(counter !== index){
            current = current.prev;
            counter--;
        }
        return current;
    }
}

set(val,index){
    if(!this.head) return null;
    var result = this.get(index);
    result.val = val;
    return result;
}

insertAt(index,val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
   var beforeNode = this.get(index-1);
   var node = new Node(val);
   var afterNode = beforeNode.next;
   node.next = afterNode;
   node.prev = beforeNode;
   afterNode.prev=node;
   this.length++;
   return true;
}

removeAt(index){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();
    var toBeRemoved = this.get(index);
    toBeRemoved.prev.next = toBeRemoved.next;
    toBeRemoved.next.prev = toBeRemoved.prev;
    toBeRemoved.next=null;
    toBeRemoved.prev=null;
    this.length--;
    return toBeRemoved;
}

}

var dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(5);
dll.push(6);
dll.push(7);
console.log(dll.removeAt(2));


