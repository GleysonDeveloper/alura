import java.util.ArrayList;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public static void main(String[] args) {
        ArrayList<Produto> listaProdutos = new ArrayList<>();

        Produto produto1 = new Produto("Sabão", 15.99, 5);
        Produto produto2 = new Produto("Detergente", 10.49, 8);

        listaProdutos.add(produto1);
        listaProdutos.add(produto2);

        System.out.println("Tamanho da lista: " + listaProdutos.size());
        System.out.println("Produto na posição 0: " + listaProdutos.get(0).getNome());
    }

    @Override
    public String toString() {
        return "Produto [nome=" + nome + ", preco=" + preco + ", quantidade=" + quantidade + "]";
    }

    public static void main(String[] args) {
        ArrayList<Produto> listaProdutos = new ArrayList<>();
        // …

        for (Produto produto : listaProdutos) {
            System.out.println(produto);
        }
    }

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public static void main(String[] args) {
        Produto produtoNovo = new Produto("Novo Produto", 15.99, 3);
        System.out.println(produtoNovo);
    }
}