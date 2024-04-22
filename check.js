class graph{
  constructor(){
    this.list={}
  }
  addVertex(vertex){
    if(!this.list[vertx])this.list[vertx]=new Set()
  }
  addEdge(v1,v2){
     if(!this.list[v1]) this.addVertex(v1)
     if(!this.list[v2]) this.addVertex(v2)
    this.list[v1].add(v2)
    this.list[v2].add(v1)
  }
  display(){
    for(const key in list){
      console.log(key)
    }
  }
  deletedge(v1,v2){
    this.list.delete(v1)
    this.list.delete(v2)
  }
  deletVertex(v1){
    if(!this.list.has(v1)) return
    for(let adj of v1){
      this.deletedge(v1,edj)
    }
    delete this.list[v1]
  }
}