class Node{
  constructor(){
    this.children=new Map()
    this.isEndOfWord=false;
  }
}

class Trie{
  constructor(){
    this.root=new Node()
  }
  insert(word){
    let node =this.root
    for(let key of word){
      if(!node.children[key])node.children[key]=new Node();
      node=node.children[key]
    }
    node.isEndOfWord=true
  }
  search(word){
    let node =this.root
    for(let key of word){
      if(!node.children[key]) return false
      node=node.children[key]
    }
   return  node.isEndOfWord
  }
  startwith(word){
    let node =this.root
    for(let key of word){
      if(!node.children[key]) return false
      node=node.children[key]
    }
   return  node.isEndOfWord
  }
}
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // false
// console.log(trie.startsWith("app")); // true
// trie.insert("app");