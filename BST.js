class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null;
  }

  insert(value){
    var node =  new Node(value);
    if(!this.root) {
      this.root = node;
      return this;
    }
     var current = this.root;
     while(true){
       if(value === current.value) return undefined;
     if(value < current.value){
       if(current.left === null){
         current.left = node;
         return this;
       }
         current = current.left;

     } else {
      if(current.right === null){
         current.right = node;
         return this;
       }
         current = current.right;

     }
   }

  }


  find(value){
    if(this.root===null) return false;
    var current = this.root;
    var found = false;
    while(current && !found){
     if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
}

contain(value){
  if(this.root===null) return false;
  var current = this.root;
  var found = false;
  while(current && !found){
   if(value < current.value){
      current = current.left;
    } else if(value > current.value){
      current = current.right;
    } else {
      return true;
    }
  }

  return false;
}

bfs(){
  var data = [];
  var queue = [];
  queue.push(this.root);
  //if(this.root === null) return undefined;
  var current = this.root;
  while(queue.length){
  current=queue.shift();
  data.push(current.value);
      if(current.left){
     queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
  }
  return data;
}

preOrder(){
  var data = [];
  var current = this.root;
  function traverse(node) {
    data.push(node.value);
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  }

traverse(current);

  return data;
}

postOrder(){
  var data = [];
  var current = this.root;
  function traverse(node){
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    data.push(node.value);
  }
  traverse(current);
  return data;
}

inOrder(){
  var data = [];
  var current = this.root;
  function traverse(node){
    if(node.left) traverse(node.left);
    data.push(node.value);
    if(node.right) traverse(node.right);
  }
  traverse(current);
  return data;
}

}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(15);
//tree.insert(15);
//console.log(tree);
console.log(tree.inOrder());
