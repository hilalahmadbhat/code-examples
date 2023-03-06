/**
 * Doubly linkedlist
 * Its a linked list
 * Each node contains has 2 pointers(prev and next)
 * Prev : Points to previous node
 * Next : Refers to next node
 * So this kind of linked can be traversed both ways(normal direction as well as in reverse direction)
 */
public class DoublyLinkedList {
    Node head;

    class Node{
        int data;
        Node next;
        Node prev;

        Node(int data){
            this.data = data;
        }
    }

    void insertNodeAtEnd(int data){
        Node newnode = new Node(data);
        if(this.head == null){
            this.head = newnode;
        }else{
            Node lastnode = this.head;
            while(lastnode.next != null){
                lastnode = lastnode.next;
            }
            lastnode.next = newnode;
            newnode.prev  = lastnode;
        }
    }

    void insertNodeAtStart(int data){
        Node currenthead = this.head;
        Node newhead     = new Node(data);
        this.head        = newhead;
        newhead.next     = currenthead;
    }


    void display(){
        System.out.println("*******Display Normal*********");
        Node currentnode = this.head;
        while(currentnode!=null){
            System.out.println(currentnode.data);
            currentnode = currentnode.next;
        }
    }

    void displayReverse(){
        System.out.println("**********Display Reverse**********");
        Node lastnode = this.head;
        Node prevnode = null;
        while(lastnode != null){
            prevnode = lastnode;
            lastnode = lastnode.next;
        }
        while(prevnode!=null){
            System.out.println(prevnode.data);
            prevnode = prevnode.prev;
        }
            

    }


    public static void main(String[] args) {
        DoublyLinkedList dll1 = new DoublyLinkedList();
        dll1.insertNodeAtEnd(1);
        dll1.insertNodeAtEnd(2);
        dll1.insertNodeAtEnd(3);
        dll1.insertNodeAtEnd(4);
        dll1.display();
        dll1.displayReverse();
        // dll1.insertNodeAtStart(5);
        // dll1.display();
        // dll1.insertNodeAtStart(6);
        // dll1.display();
    }
}
