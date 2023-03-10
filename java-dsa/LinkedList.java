/**
 * Linkedlist
 * It is a linear data structure
 * Nodes are stored in non contiguous memory locations
 * Nodes are linked to each other by a pointer
 * Each node contains reference to next node
 */

public class LinkedList {
    Node head;
    class Node{
        int data;
        Node next;

        Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    void insertNodeAtBeg(int data){
        Node newhead     = new Node(data);
        Node currenthead = this.head;
        this.head        = newhead;
        newhead.next     =  currenthead;
    }

    void insertNodeAtEnd(int data){
        Node newnode = new Node(data);
        if(this.head == null){
            this.head = newnode;
        }else{
            Node lastnode = this.head;
            while(lastnode.next!=null){
                lastnode = lastnode.next;
            }
            lastnode.next = newnode;
        }

    }


    void display(){
        System.out.println("*******display********");
        Node node = this.head;
        while(node != null){
            System.out.println(node.data);
            node = node.next;
        }
    }


    void deleteNodeByKey(int data){
        
        if(this.head.data == data){
            this.head = this.head.next;
        }else{
            Node currentnode = this.head;
            Node prevnode = null;
            while(currentnode != null){
                if(currentnode.data == data){
                    System.out.println("found and deleted");
                    prevnode.next = currentnode.next;
                    break;
                }
                prevnode = currentnode;
                currentnode = currentnode.next;
            }

            if(currentnode == null){
                System.out.println("key not found");
            }

        }
    }

    public static void main(String[] args) {
        LinkedList l1 = new LinkedList();
        l1.insertNodeAtEnd(1);
        l1.insertNodeAtEnd(2);
        l1.insertNodeAtEnd(3);
        //l1.insertNodeAtBeg(10);
        l1.insertNodeAtEnd(4);
        l1.insertNodeAtEnd(5);
        //l1.insertNodeAtBeg(50);
        l1.display();
        l1.deleteNodeByKey(5);
        //l1.display();
        //l1.deleteNodeByKey(2);
        l1.display();
    }
}
