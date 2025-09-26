package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.excecao.ErroDeConversaoDeAnoException;
import br.com.alura.screenmatch.modelos.Titulo;
import br.com.alura.screenmatch.modelos.TituloOmdb;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PrincipalComBusca {
    public static void main(String[] args) throws IOException, InterruptedException {

        // Solicita o filme que o usuário quer buscar
        Scanner leitura = new Scanner(System.in);
        String busca = "";
        List<Titulo> titulos = new ArrayList<>();

        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .setPrettyPrinting()
                .create();

        while (!busca.equalsIgnoreCase("sair")) {

            System.out.println("Digite um filme para busca: ");
            busca = leitura.nextLine();

            if (busca.equalsIgnoreCase("sair")) {
                break;
            }

            // Conteudo que vai buscado na API
            String endereco = "https://www.omdbapi.com/?t=" + busca.replace(" ", "+") + "&apikey=23afa70f";
            try {
                HttpClient client = HttpClient.newHttpClient();

                // Faz a requisição na API
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(endereco))
                        .build();

                // Trás a resposta da requisição da API
                HttpResponse<String> response = client
                        .send(request, HttpResponse.BodyHandlers.ofString());

                // Imprimi o resultado
                String json = response.body();
                System.out.println(json);

                TituloOmdb  meuTituloOmdb = gson.fromJson(json, TituloOmdb.class);
                System.out.println(meuTituloOmdb);


                Titulo meuTitulo = new Titulo(meuTituloOmdb);

                System.out.println("Titulo já convertido: ");
                System.out.println(meuTitulo);

                // Recebe os dados e escreve em um arquivo txt
                // FileWriter escrita = new FileWriter("films.txt");
                // escrita.write(meuTitulo.toString());
                // escrita.close();

                titulos.add(meuTitulo);
            } catch (NumberFormatException e) {
                System.out.println("Aconteceu um erro: ");
            } catch (IllegalArgumentException e) {
                System.out.println("Algum erro de argumento na busca, verifique o endereço");
            } catch (ErroDeConversaoDeAnoException e) {
                System.out.println(e.getMensagem());
            }
        }
        System.out.println(titulos);

        FileWriter escrita = new FileWriter("filmes.json");
        escrita.write(gson.toJson(titulos));
        escrita.close();

        System.out.println("O programa finalizou corretamente!");
    }
}
