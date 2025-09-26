import com.google.gson.Gson;

public class Veiculo {
    private String marca;
    private String modelo;
    private int anoFabricacao;
    private double preco;

    // Construtores, getters e setters ocultos

    public static void main(String[] args) {
        // Crie uma instância do objeto Veiculo
        Veiculo carro = new Veiculo();
        carro.setMarca("Toyota");
        carro.setModelo("Corolla");
        carro.setAnoFabricacao(2022);
        carro.setPreco(75000.00);

        Gson gson = new Gson();
        String jsonVeiculo = gson.toJson(carro);

        // Imprima o JSON resultante
        System.out.println("Objeto Veiculo serializado para JSON:");
        System.out.println(jsonVeiculo);
    }
}
