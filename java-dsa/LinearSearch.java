class LinearSearch {
    public static void main(String[] args) {
        int arr[] = {3,5,6,2,67,45};
        int i = 0;
        int data = 45;
        while(i<arr.length){
            if(data==arr[i]){
                System.out.println("Element found at index = "+i);
                break;
            }
            i++;
        }
        
        if(i==arr.length){
                System.out.println("Element not found");
        }
    }
}