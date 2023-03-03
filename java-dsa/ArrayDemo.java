class ArrayDemo{
    int arr[] = {1,2,3,4,5};


    void traverse(){
        System.out.println("*****traverse******");
        for(int i = 0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
           ArrayDemo arr1 = new ArrayDemo();
           arr1.traverse();
    }
}