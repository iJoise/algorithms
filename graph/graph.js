const graph = {
  you: ['alice', 'bob', 'clarie'],
  bob: ['peggy', 'mike'],
  alice: ['peggy'],
  clarie: ['tom', 'john'],
  mike: [],
  tom: [],
  john: [],
  peggy: ['you'],
}

const breadthFirstSearch = (graph, start, end) => {
  let queue = []
  const searched = []
  queue.push(start)
  while (queue.length > 0) {
    const current = queue.shift()
    if (!searched.includes(current)) {
      if (!graph[current]) {
        graph[current] = []
      }
      if (graph[current].includes(end)) {
        return true
      } else {
        searched.push(current)
        queue = [...queue, ...graph[current]]
      }
    }
  }
  return false
}

console.log(breadthFirstSearch(graph, 'you', 'john'));
