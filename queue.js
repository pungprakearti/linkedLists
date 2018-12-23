const LinkedList = require('./linkedLists');

class Queue extends LinkedList {
  constructor(LinkedList) {
    super(LinkedList);
  }

  enqueue(data) {
    this.append(data);
  }

  dequeue() {
    return this.pop();
  }

  peek() {
    return this.getAt(0);
  }
}

module.exports = Queue;
