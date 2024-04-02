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

let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');
let e = new Vertex('e');
let f = new Vertex('f');
let g = new Vertex('g');
let h = new Vertex('h');

//양방향그래프
a.addAdjacentVertex(b);
a.addAdjacentVertex(c);
a.addAdjacentVertex(d);
a.addAdjacentVertex(e);

b.addAdjacentVertex(a);
b.addAdjacentVertex(f);

c.addAdjacentVertex(a);
c.addAdjacentVertex(f);

d.addAdjacentVertex(a);

e.addAdjacentVertex(a);
e.addAdjacentVertex(g);

g.addAdjacentVertex(e);
g.addAdjacentVertex(h);

h.addAdjacentVertex(g);

const DFS = (vertex, visited_vertices = {}) => {
  visited_vertices[vertex.value] = true;

  console.log(`정점: ${vertex.value}`);

  for (let adjacent of vertex.adjacent_vertices) {
    if (visited_vertices[adjacent.value]) {
      continue;
    } else {
      DFS(adjacent, visited_vertices);
    }
  }
};

DFS(a);
/* 
정점: a
정점: b
정점: f
정점: c
정점: d
정점: e
정점: g
정점: h 
*/
