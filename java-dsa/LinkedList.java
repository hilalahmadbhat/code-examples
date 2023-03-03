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

    void insertAtBeg(int data){
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

    public static void main(String[] args) {
        LinkedList l1 = new LinkedList();
        l1.insertNodeAtEnd(1);
        l1.insertNodeAtEnd(2);
        l1.insertNodeAtEnd(3);
        l1.insertAtBeg(10);
        l1.insertNodeAtEnd(4);
        l1.insertNodeAtEnd(5);
        l1.insertAtBeg(50);
        l1.display();
    }
}
