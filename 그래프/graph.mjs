class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacent_vertices = [];
  }

  addAdjacentVertex(vertex) {
    this.adjacent_vertices.push(vertex);
  }

  removeAdjacentVertex(vertex) {
    for (let i = 0; i < this.addAdjacentVertex.length; i++) {
      if (this.adjacent_vertices[i] == vertex) {
        this.adjacent_vertices.splice(i--, 1); //1개 삭제
      }
    }
  }
}

let tom = new Vertex('tom');
let ben = new Vertex('ben');
let joy = new Vertex('joy');
let ivy = new Vertex('ivy');

tom.addAdjacentVertex(ben); //tom은 ben을 follow
ben.addAdjacentVertex(tom);

joy.addAdjacentVertex(ben);
joy.addAdjacentVertex(ivy);

ivy.addAdjacentVertex(joy);
ivy.addAdjacentVertex(ben);

console.log(ivy.adjacent_vertices);
