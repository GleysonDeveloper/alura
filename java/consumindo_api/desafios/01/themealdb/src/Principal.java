import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) throws IOException, InterruptedException {
        // Solicita o filme que o usuário quer buscar
        Scanner leitura = new Scanner(System.in);
        System.out.println("Digite um filme para busca: ");
        var busca = leitura.nextLine();

        // Conteudo que vai buscado na API
        String endereco = "https://www.omdbapi.com/?t=" + busca + "&apikey=23afa70f";

        HttpClient client = HttpClient.newHttpClient();

        // Faz a requisição na API
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endereco))
                .build();

        // Trás a resposta da requisição da API
        HttpResponse<String> response = client
                .send(request, HttpResponse.BodyHandlers.ofString());

        // Imprimi o resultado
        System.out.println(response.body());
    }
}
