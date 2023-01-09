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

const stack2  = new Stack();
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


// Re-implement Stack 

class Stack2{
    constructor(){
        this.count=0;
        this.items=[];
    }
    push(value){
        this.items[this.count]=value;
        console.log(`${value } has been added to position ${this.count} in the stack`)
        this.count++;
        return this.count-1;
    }
    pop(){
        if(this.count===0){
            console.log("there is nothing to delete from this stack");
        }
let lastItem=this.items[this.items.length -1];
this.items.pop();
this.count--;
return lastItem;
    }
    peek(){

        if(this.count===0) console.log('There is no item in the stack');
        // check the top element
        let topElement=this.items[this.items.length-1];
        console.log(`The element on top is ${topElement}`);
    }
    size(){
        return this.count;
    }
    empty(){
        this.items=[];
        this.count=0;
    }
    print(){
        console.log("The elements in the stack include");
        let str="";
        for(let i=0;i<this.count; i++){
            str+= this.items[i] + "";
        }
        return str;
    }
}

const stack1=new Stack2();
stack1.push(100);
stack1.push(200);

stack1.peek();
console.log(stack.print());
