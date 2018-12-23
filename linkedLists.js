/**
 * LinkedList creates a linked list with several operations.
 * Node creates a node for LinkedList
 */

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  //print the current list
  print() {
    if (this.head) {
      let curList = [];
      let current = this.head;

      //print the current node if next isn't null
      while (current.next !== null) {
        curList.push(current.data);
        current = current.next;
      }
      //print the last node
      curList.push(current.data);
      console.log(curList.join(' > '));
      return curList.join(' > ');
    } else {
      console.log('Linked List is empty');
      return 'Linked List is empty';
    }
  }

  //create a node with data and append to tail of list
  append(data) {
    let node = new Node(data);
    //head is not null
    if (this.head) {
      //search through list to find node with next of null
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      //set next node of current to input node
      current.next = node;
      this.tail = node;
    } else {
      //empty list, add node to head and tail
      this.head = node;
      this.tail = node;
    }
    console.log(`Added ${node.data} to tail`);
    return this.print();
  }

  //get the node at idx number
  getAt(idx) {
    //check if empty list
    if (this.head) {
      let index = 0;
      let current = this.head;

      //iterate through until end
      while (current.next !== null) {
        //
        //index = idx, return node data
        if (index === idx) {
          console.log(`${idx} in linked list is: ${current.data}`);
          return current;

          //else increment index and go to next node
        } else {
          index++;
          current = current.next;
        }
      }
      //on last item of list. Check for match
      if (index === idx) {
        console.log(`${idx} in linked list is: ${current.data}`);
        return current;

        //Idx is out of range of list
      } else {
        console.log(`${idx} is out of range`);
        // return `${idx} is out of range`;
        return null;
      }

      //empty list
    } else {
      console.log('Linked List is empty');
      // return 'Linked List is empty';
      return null;
    }
  }

  //create a node from data and add to the head of the list
  unshift(data) {
    //create new Node with data
    let node = new Node(data);

    //assign node to head and node's next to previous head
    node.next = this.head;
    this.head = node;
    console.log(`added ${node.data} to head of linked list`);
    this.print();
    return this.print();
  }

  //remove and return the first node in a list
  shift() {
    if (this.head) {
      let node = this.head;

      //only 1 object in list, so after shifting, set head and tail to null
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;

        //assign head as the next object in line
      } else {
        this.head = this.head.next;
      }

      this.print();
      console.log(`${node.data} was shifted off the head`);
      return node;
      //
    } else console.log('Linked list is empty');
  }

  //remove and return the last node in a list
  pop() {
    if (this.head) {
      let node = this.tail;

      //only 1 object in list, so after shifting, set head and tail to null
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
        console.log(`${node.data} was popped off the tail`);
        this.print();
        return node;

        //more than 1 item in list
      } else {
        let current = this.head;
        let prev;

        while (current.next !== null) {
          prev = current;
          current = current.next;
        }

        //return node that was removed
        prev.next = null;
        this.tail = prev;
        console.log(`${node.data} was popped off the tail`);
        this.print();
        return node;
      }
      //
    } else console.log('Linked list is empty');
  }

  //create and insert a node at the idx position in list
  insertAt(idx, data) {
    //add to front
    if (idx === 0) {
      this.unshift(data);

      //add node but not in the first position
    } else {
      let prev = this.getAt(idx - 1);

      //out of range
      if (!prev) {
        return null;

        //insert node
      } else {
        console.log(prev);
        let node = new Node(data, prev.next);
        prev.next = node;
        this.print();
      }
    }
  }

  //remove and return node from idx in list
  removeAt(idx) {
    let prev = this.getAt(idx - 1);
    let node = prev.next;
    prev.next = prev.next.next;
    console.log(`Removed ${node.data} from index ${idx}`);
    this.print();
    return node;
  }

  //returns the average of the numbers in the list
  average() {
    let total = 0;
    let count = 1;
    if (this.head) {
      let current = this.head;
      while (current.next !== null) {
        if (typeof current.data !== 'number') {
          console.error('List contains items that are not numbers');
          return;
        } else {
          total += current.data;
          current = current.next;
          count++;
        }
      }
      total += current.data;
      let average = total / count;
      console.log(`Average of numbers in list is: ${average}`);
      return average;
    }
  }
}

//create a node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = LinkedList;
//**********************************************/

//tests

// const ll = new LinkedList();

// ll.append('ant');
// ll.append('bee');
// ll.print();
// ll.getAt(1);
// ll.unshift('cat');
// ll.shift();
// ll.pop();
// ll.insertAt(1, 'dog');
// ll.removeAt(1);

// ll.append(1);
// ll.append(8);
// ll.append(3);
// ll.append(8);
// ll.append(3);
// ll.append(2);
// ll.append(9);
// ll.average();
