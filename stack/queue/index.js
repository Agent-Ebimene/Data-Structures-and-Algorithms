class Queue{
    constructor(){
        this.items=[];

    }
    // Add an item to the queue
    enqueue(value){
        this.items.push(value);
    }
    //Remove the first element from the array
    dequeue(){
        return this.items.shift();
    }
    // Get the size of the items in the queue
    size(){
        return this.items.length;
    }
    // Check if queue is empty

    isEmpty(){
        return this.items.length===0;

    }
    // Check the first element in the queue
    peek(){
        return this.items[0];
    }
}

const queue=new Queue();
queue.enqueue(1000);
queue.enqueue(2000);
console.log(queue.peek(),queue.dequeue(),queue.isEmpty(),queue.size());