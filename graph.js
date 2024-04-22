class Graph{
  constructor(){
    this.list={}
  }
  addVertex(vertex){
    if(!this.list[vertex]) return this.list[vertex]=new Set()
  }
  addEdge(vertex1,vertex2){
    if(!this.list[vertex1]) this.addVertex(vertex1)
    if(!this.list[vertex2]) this.addVertex(vertex2)
    this.list[vertex1].add(vertex2)
    this.list[vertex2].add(vertex1)
  }
  display(){
    for(const key in this.list){
      console.log(key +'->'+[...this.list[key]])
    }
  }
  deletEdge(vertex1,vertex2){
    this.list[vertex1].delete(vertex2)
    this.list[vertex2].delete(vertex1)
  }
  deletVertex(vertex){
    if(!this.list[vertex]) return;
    for(const adj of this.list[vertex]){
      this.deletEdge(vertex,adj)
    }
    delete this.list[vertex]
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
graph.deletVertex("B");
graph.display();