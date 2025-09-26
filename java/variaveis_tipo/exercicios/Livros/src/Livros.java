public class Livros {
    public static void main(String[] args) throws Exception {
        String titulo = "Código Limpo";
        String autor = "Robert C. Martin";
        int totalDePaginas = 425;
        double valorLivro = 94.43;
        char categoria = 'T';

        String categoriaDescricao;

        if (categoria == 'F') {
            categoriaDescricao = "Ficção";
        } else if (categoria == 'N') {
            categoriaDescricao = "Não Ficção";
        } else if (categoria == 'T') {
            categoriaDescricao = "Tecnologia";
        } else if (categoria == 'H') {
            categoriaDescricao = "História";
        } else {
            categoriaDescricao = "Categoria inválida";
        }

        System.out.println("Livro cadastrado: \"" + titulo + "\", de " + autor + ". Ele possui " + totalDePaginas + " páginas, custa R$" + valorLivro + " e pertence à categoria " + categoriaDescricao + ".");
    }
}
