
import java.util.HashMap;

public class uniqueCharsInString {

    public static boolean ifUniqueChars(String word){
        HashMap<Character,Integer> hashChar = new HashMap<Character,Integer>();
        for (int i = 0; i < word.length(); ++i){
            if (hashChar.containsKey(word.charAt(i))){
                hashChar.put(word.charAt(i), hashChar.get(word.charAt(i)));
                return false;
            }
            else{
                hashChar.put(word.charAt(i), 1);
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String word = "aabc";
    
        System.out.println("Running program with a string: " + word); 
        if (ifUniqueChars(word)){
            System.out.println("No duplicates in " + word);
        }
        else{
            System.out.println("There are duplicates in " + word);
        }
    }
}
