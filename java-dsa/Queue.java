/**
 * Queue
 * Its a linear data structure
 * Operation's are performed at both ends of queue
 * Element that is inserted first will be first served/removed(dequeue)
 * New entry of elements is done at rear end of queue(enqueue)
 * Enqueue: add new element at rear of queue
 * Dequeue: remove element from front of queue
 * Follows FIFO principle: first in first out
 */
public class Queue{
    int size;
    int queue[];
    int rear = -1;
    int front = -1;

    Queue(int size){
        this.size = size;
        this.queue = new int[size];
    }

    void enqueue(int data){
        rear++;
        this.queue[rear] = data; 
    }

    void dequeue(){
        front++;
        System.out.println(this.queue[front]);
    }

    void isFull(){

    }

    void isEmpty(){

    }

    public static void main(String[] args) {
        //System.out.println("hello world");
        Queue q1 = new Queue(5);
        q1.enqueue(1);
        q1.enqueue(2);
        q1.enqueue(3);
        q1.enqueue(4);
        q1.dequeue();
        q1.dequeue();
        q1.dequeue();
        q1.dequeue();
        q1.dequeue();
        //q1.dequeue();
    }
}