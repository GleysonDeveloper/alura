import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        ArrayList<String> listasStrings = new ArrayList<>();
        listasStrings.add("Java");
        listasStrings.add("C++");
        listasStrings.add("Python");

        for (String elemento : listasStrings) {
            System.out.println(elemento);
        }
    }
}
