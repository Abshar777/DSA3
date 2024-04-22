class node{
  constructor(val){
    this.value=val
    this.left=null
    this.right=null
  }
}

class Bst{
  constructor(){
    this.root=null
  }
  insert(val){
    const newNode=new node(val);
    if(!this.root) this.root=newNode
    else this.insertNode(this.root,newNode)
  }
  insertNode(node,newNode){
    if(node.value<newNode.value){
      if(!node.right) node.right=newNode;
      else this.insertNode(node.right,newNode)
    }else{
      if(!node.left) node.left=newNode;
      else this.insertNode(node.left,newNode)
    }
  }
  inOrder(node=this.root){
    if(node?.value){
      this.inOrder(node.left)
      console.log(node.value)
      this.inOrder(node.right)
    }
  }
  preOrder(node=this.root){
    if(node?.value){
      console.log(node.value)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  postOrder(node=this.root){
    if(node?.value){
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
  levelOrder(){
    let que=[];
    que.push(this.root)
    while(que.length){
      let curr=que.shift()
      console.log(curr.value);
      if(curr.left){
        que.push(curr.left)
      }
      if(curr.right){
        que.push(curr.right)
      }
    }
  }
  search(val){
    return this.searchNode(this.root,val)
  }
  searchNode(node,val){
    if(!node?.value) return false
    if(node.value<val) return this.searchNode(node.right,val)
    else if(node.value>val) return this.searchNode(node.left,val)
    else return true
  }
  min(node=this.root){
    if(!node?.left){
      return node.value
    }else{
      return this.min(node.left)
    }
  }
  max(node=this.root){
    if(!node?.right)  return node.value
      else return this.max(node.right)
  }
  deleat(val){
   return this.deleatNode(this.root,val) 
  }
  deleatNode(node,val){
   if(!node) return node;
    if(node.value<val) node.right=this.deleatNode(node.right,val);
    else if(node.value>val) node.left=this.deleatNode(node.left,val);
    else{
      if(!node.right && !node.left) return null;
      if(!node.right) return node.left;
      else if(!node.left) return node.right;
      node.value=this.min(node.right);
      node.right=this.deleatNode(node.right,node.value)
    }
    return node;
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
bst.deleat(10)
bst.levelOrder()
console.log(bst.search(15));   
console.log(bst.search(8)); 
console.log(bst.min()); 