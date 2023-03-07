/**
 * Stack
 * It is a linear data structure
 * Operations on stack are performed on a particular manner
 * Last in first out(LIFO)
 * The element that is insert first gets out of stack at last
 * or the element that is inserted at last is popped at first
 */

class Stack{
    int arr[] ;
    int top   = -1;
    int size;

    Stack(int size){
        this.size = size;
        this.arr = new int[size];
    }

    void push(int element){
        if(!isFull()){            
            this.arr[++this.top] = element;
            System.out.println(element+ " inserted at index "+this.top);
        }else{
            System.out.println("stack is full");
        }
        
    }

    void pop(){
        if(isEmpty()){
            System.out.println("Stack is empty");
        }else{
            System.out.println(this.arr[this.top--]);
        }
    }

    void peek(){
        System.out.println(this.arr[this.top]);
    }

    boolean isFull(){
        return this.top>=this.size-1?true:false;
    }

    boolean isEmpty(){
        return this.top==-1?true:false;
    }
    public static void main(String[] args) {
        Stack stack1 = new Stack(5);
        stack1.push(1);
        stack1.push(2);
        stack1.push(3);
        stack1.push(4);
        stack1.push(5);
        stack1.push(5);
        stack1.pop();
        stack1.pop();
        stack1.pop();
        stack1.pop();
        stack1.pop();
        stack1.pop();

    }
} 