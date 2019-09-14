import java.lang.*;
import java.util.Scanner;

public class graph {
    public static void main(String args[]) {
        int n, temp;
        Scanner s = new Scanner(System.in);
        System.out.print("enter numberof element you want to array");
        n = s.nextInt();
        Int a[] = newInt(a);

        Integer a[] = new Integer[n];
        System.out.print("enter all the elements");
        for (int i = 0; i < n; i++) {
            a[i] = s.nextInt();
        }
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (a[i] > a[j]) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        System.out.print("accending order");
        for (int i = 0; i < n - 1; i++) {
            System.out.print(a[i] + ",");
        }
    }
}