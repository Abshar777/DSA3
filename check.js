class node{
  constructor(val){
    this.value=val;
    this.left=null;
    this.right=null
  }
}

class Bst{
  constructor(){
    this.root=null
  }
  insert(val){
    const newNode=new node(val)
    if(!this.root) this.root=newNode
    else this.insertNode(this.root,newNode)
  }
  insertNode(node,newNode){
    if(node.value<newNode.value){
      if(!node.right) node.right=newNode
      else this.insertNode(node.right,newNode)
    }else{
      if(!node.left) node.left=newNode
      else this.insertNode(node.left,newNode)
    }
  }
  search(val){
   return this.searchNode(this.root,val)
  }
  searchNode(node,val){
    if(!node) return false
    if(node.value<val) return this.searchNode(node.right,val)
    else if(node.value>val) return this.searchNode(node.left,val)
    else return true
  }
}

const bst = new Bst();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
console.log(bst.search(15))
console.log(bst.search(8)); 