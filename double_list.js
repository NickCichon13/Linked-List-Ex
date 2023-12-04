class Node{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
        this.prev = prev
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
// this line of code will create a new node (newNode) with the provide val given.
        let newNode = new Node(val);
// this line of code will check to be sure the list is empty. if the list is empty we will then set the head and tail to the new node.
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
// this line is pointing the new node to the previous tail and setting the new node as the tail of the double linked list. 
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    unshift(val){
        let newNode = new Node(val);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    pop(val){
        if(this.head === null){
            return undefined;
        }
        let removedNode;
        let newNode = new Node(val);

        if(this.head === this.tail){
            removedNode = this.head;
            this.head = newNode;
            this.tail = newNode;
        } else {
        let current = this.head;
// We then start a while loop that will continue until the current.next is equal to the current tail.
      while(current.next !== this.tail){
        current = current.next;
      }

      removedNode = this.tail;
      this.tail.prev = current;
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
      this.head = removedNode.next;
      this.head.prev = null;
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

    if(idx <= this.length /2 ){

    while(currIdx < idx && curr !== null){
      curr = curr.next;
      currIdx++;
        }
    } else {
         curr = this.tail;
         currIdx = this.length - 1;

         while(currIdx > idx && curr !== null) {
            curr = curr.prev;
            currIdx--;
         }
    }
    
  

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    
    if(idx < 0 || idx > this.length){
    
        return undefined;
    }

    let newNode = new Node(val);

    if(idx === 0){
      newNode.next = this.head;
      if(this.head !== null){
        this.head.prev = newNode;
      }
      this.head = newNode;

      if(this.tail === null){
        this.tail = newNode;
      }
      
} else if (idx === this.length){
        
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

} else{
        let curr; 
        let currIdx;

    while(idx <= this.length /2) {
        curr = this.head;
        currIdx = 0;
    }
        curr = curr.next;
        currIdx++;
}

} else {
    while(currIdx < idx - 1 && curr !== null){
        curr = curr.next;
        currIdx++;
    }
}
newNode.next = curr.next;
newNode.prev = curr;
curr.next.prev = newNode;
curr.next = newNode;

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

        