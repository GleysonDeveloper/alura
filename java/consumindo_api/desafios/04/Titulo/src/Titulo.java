import com.google.gson.Gson;

public class Titulo {
    public static void main(String[] args) {
        Titulo titulo = new Titulo();

        Gson gson = new Gson();
        String json = gson.toJson(titulo);

        System.out.println(json);
    }
}
