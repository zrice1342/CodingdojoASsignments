import java.util.ArrayList;
public class Basics {
    public static void main(String[] args) {
        System.out.println("Hello World");
        onetwofive();
        odd();
        sumof();
        iterate();
        max();
        oddarr();
    }



    public static void  onetwofive(){
        int counter = 0;
        for(int i = 0; i < 256; i++){
            System.out.println(counter);
            counter = 1 + counter; 
        }
    }

    public static void  odd(){
        int counter = 0;
        for(int i = 0; i < 256; i++){
            if(counter%2 != 0){
                System.out.println(counter);
            }
            counter = 1 + counter; 
        }
    }

    public static void sumof(){
        var total = 0;
        for(var i = 1; i <= 255; i++){
            total += i;
        }
        System.out.println(total);;
    }

    public static void  iterate(){
        int[] x = {1,3,5,7,9,13};
        for(int i = 0; i < x.length ; i++){
            System.out.println(x[i]);; 
        }
    }

    public static void  max(){
        int[] x = {1,3,5,7,9,13};
        int max = -1000000000 ;
        for(int i = 0; i < x.length ; i++){
            if(x[i] > max){
                max = x[i];
            }
        }
        System.out.println(max);
    }

    public static void  oddarr(){
        int counter = 0;
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 0; i < 256; i++){
            if(counter%2 != 0){
                arr.add(i);
            }
            counter = 1 + counter; 
        }
        System.out.println(arr);
    }
}





