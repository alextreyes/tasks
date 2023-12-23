/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    const anotherNode = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head = newNode;
    this.head.next = anotherNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head) {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = previousNode;
        this.tail.next = null;
      }
      this.length--;
      return currentNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let nextNode = this.head.next;
    let currentNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    if (this.head != this.tail) {
      currentNode = this.head;
      this.head = this.head.next;
      this.length--;
    }
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;
    if (idx == 0) {
      return this.head.val;
    }
    while (count !== idx) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let count = 0;
    if (idx == 0) {
      this.head.val = val;
    }
    while (count !== idx) {
      count++;
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;

      if (this.length === 0) {
        this.tail = newNode;
      }

      this.length++;
      return undefined;
    }

    if (idx === this.length) {
      let newNode = new Node(val);

      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    let newNode = new Node(val);
    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (count < idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = this.head;
    let count = 0;
    let val = currentNode.val;
    if (this.length === 1) {
      val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    while (count < idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      val = currentNode.val;
      nextNode = currentNode.next;
      count++;
    }
    currentNode = previousNode;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let currentNode = this.head;
    let total = 0;
    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
