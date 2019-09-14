import java.lang.*;
import java.io.*;

class Count {
    public static void main(String args[]) {
        String str = "AshutoSh#4336D4rKniGht";
        int upper = 0, lower = 0, number = 0, special = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'A' && ch <= 'Z')
                upper++;
            else if (ch >= 'a' && ch <= 'z')
                lower++;
            else if (ch >= '0' && ch <= '9')
                number++;
            else
                special++;
        }
        System.out.println("Lower Case Letters: " + lower);
        System.out.println("Upper Case Letters: " + upper);
        System.out.println("Numbers: " + number);
        System.out.println("Special Letters: " + special);

    }
}