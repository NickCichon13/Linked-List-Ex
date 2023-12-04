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
// This line creates a new node with the give value(val).
    let newNode = new Node(val);
// This line checks in the head of the list is currently empty
    if(this.head === null){
// then if the head is empty we will make it the first node in the list.
       this.head = newNode;
    }
// this is similar to the code above. this checks if the tail is empty.
    if(this.tail === null){
// if so then the tail becomes the new node but, it also becomes the head and tail.
       this.tail = newNode
    }else{
//  This line of code runs if the linked list is not empty and sets the next property of the current tail point to the new node.
        this.tail.next = newNode;
// effectively adding the new node to the end of the list.
        this.tail = newNode;
    }
  
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
// this line of code checks if the list is empty. if it is then it creates the new node and makes it the head and tail.
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
// This line of code will run if there already is a node in the list.
    }else{
// we will take the current node and make it the head of the list 
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
// if the list is empty, there will be nothing to pop.
    if(this.head === null){
      return undefined;
    }
    let removedNode;
// if there is only one node, we will remove it and add the new node as the head and tail and set it to null.
    if(this.head === this.tail){
      removedNode = this.head;
      this.head = null;
      this.tail = null;

    }else{
// this line will initialize a variable 'current' to the head of the linked list.  
      let current = this.head;
// We then start a while loop that will continue until the current.next is equal to the current tail.
      while(current.next !== this.tail){
        current = current.next;
      }

      removedNode = this.tail;
      this.tail = current;
      this.tail.next = null;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head === null){
      return undefined;
    }

    let removedNode = this.head;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0 || this.head === null){
    return undefined;
    }
    let current = this.head;
    let currentIdx = 0;

    while(currentIdx < idx && current !== null){
      current = current.next;
      currentIdx++;
    }
    if(current === null){
      return undefined;
    }else{
      return current.val;
    }
  }
    
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || this.head === null){
      return undefined;
    }
    let curr = this.head;
    let currIdx = 0;

    while(currIdx < idx && curr !== null){
      curr = curr.next;
      currIdx++;
    }
    if(curr !== null){
      curr.next = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0){
    return undefined;
    }
    let newNode = new Node(val);

    if(idx === 0 || this.head === null){
      newNode.next = this.head;
      this.head = newNode;

      if(this.tail === null){
        this.tail = newNode;
      }
      return;
    }
    let curr = this.head;
    let currIdx = 0;

    while(currIdx < idx - 1 && curr !== null){
      curr = curr.next;
      currIdx++;
    }
    if(curr !== null){
      newNode.next = curr.next;
      curr.next = newNode;

      if(newNode.next === null){
        this.tail = newNode;
    }
  }
}
  
    

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || this.head=== null){
      return undefined;
    }
    if (idx === 0){
      this.head = this.head.next;

      if(this.head === null){
        this.tail = null;
      }
      return undefined;
    }
    let curr = this.head;
    let currIdx = 0;

    while(currIdx < idx -1 && curr.next !== null){
      curr = curr.next;
      currIdx++;
    }
    if(curr.next !== null){
      curr.next = curr.next.next;

      if(curr.next === null){
        this.tail = curr;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head === null){
      return undefined;
    }
    let sum = 0;
    let count = 0;
    let curr = this.head;

    while(curr !== null){
      sum+= curr.val;
      count++;
      curr = curr.next;
    }
    return sum / count;
    
  }
}

module.exports = LinkedList;
