import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Titulo {
    public static void main(String[] args) {
        Titulo titulo = new Titulo();

        Gson gson = GsonBuilder.setPrettyPrinting().create();
        String json = gson.toJson(titulo);

        System.out.println(json);
    }
}
