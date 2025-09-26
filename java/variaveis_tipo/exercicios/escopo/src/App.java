public class App {
    public static void main(String[] args) throws Exception {
        int idade = 65;
        String mensagem;

        if (idade >= 18) {
            mensagem = "Você é maior de idade!";
        } else {
            mensagem = "Você é menor de idade!";
        }

        System.out.println(mensagem);
    }
}
