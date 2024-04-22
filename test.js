class Node{
  constructor(val){
    this.value=val;
    this.left=null;
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null;
  }
  insert(val){
    const newNode=new Node(val)
    if(!this.root) this.root=newNode;
    else this.insertNode(this.root,newNode)
  }
  insertNode(node,newNode){
    if(!node) return null;
    if(node.value<newNode.value){
      if(!node.right) node.right=newNode;
      else return this.insertNode(node.right,newNode) 
    }else{
      if(!node.left) node.left=newNode;
      else return this.insertNode(node.left,newNode) 
    }
  }
  display(node=this.root){
    if(node?.value){
      
    this.display(node.left)
    console.log(node.value);  
    this.display(node.right)
    }
  }
  
}

const bst=new BST()
bst.insert(10)
bst.insert(11)
bst.insert(1)
bst.insert(12)
bst.display()