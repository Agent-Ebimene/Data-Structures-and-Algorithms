console.log("DSA finally started!");
class Stack {
  constructor() {
    this.count = 0;
    this.items = [];
  }
  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} has been added to position ${this.count}`);
    this.count++;
    //Make this for the element to have the conventional zero based index
    return this.count - 1;
  }
  // Return and remove top element in the stack
  //Return undefined if stack is empty
  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(
      `${deleteItem} has been removed at from position ${this.count}`
    );
    return deleteItem;
  }

  //Checks top element
  peek() {
    let topElement = this.items[this.count - 1];
    console.log(`Top element is ${topElement}`);
    return topElement;
  }
  //Checks if stack is empty or not
  isEmpty() {
    console.log(this.count === 0 ? "Stack is empty" : "Stack is not empty");
    return this.count === 0;
  }
  //Returns the size of the stack
  size() {
    console.log(`The number of elements in stack is ${this.count}`);
    return this.count;
  }
  //prints the elements in the stack
  print() {
    let str = " ";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`Stack Cleared`);
  }
}

const stack = new Stack();
stack.push(3000);
stack.push(400);
stack.push(1000);
stack.pop(3000);
stack.pop();
stack.push(30);
stack.push(60);
stack.push(90);
stack.push(120);
stack.peek();
stack.isEmpty();
stack.size();
console.log(stack.print());
stack.clear();
