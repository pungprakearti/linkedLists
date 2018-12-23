const LinkedList = require('./linkedLists');

class Stack extends LinkedList {
  constructor(LinkedList) {
    super(LinkedList);
  }

  push(data) {
    this.append(data);
  }

  stackPop() {
    return this.pop();
  }

  peek() {
    return this.getAt(this.tail);
  }
}

module.exports = Stack;

// let stack = new Stack();

// stack.push('a');
// console.log(stack.stackPop());
// stack.peek();
