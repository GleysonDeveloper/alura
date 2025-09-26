public class App {
    public static void main(String[] args) throws Exception {
        
        // Tipos de variáveis primitivas
        int quantidadePassos = 500;
        double alturaEmMetros = 1.75;

        // Tipos referenciados
        String nome = "João";

        // Conversão de tipos explicita (casting) de double para int (mais amplo para mais restrito)
        int alturaEmCentimetros = (int) (alturaEmMetros * 100);

        // Conversão de tipos implícita de int para double (mais restrito para mais amplo)
        int alturaEmCentimetros2 = 175;
        alturaEmMetros = alturaEmCentimetros;

        // Escopo local
        if (quantidadePassos < 1000) {
            String sugestao = "Sugiro que você tente auamentar a sua meta de passos.";
            System.out.println(sugestao);
        }

        // A variável sugestao não está acessível aqui fora do bloco if (escopo local)
        // sugestao = "Parabéns! Você já bateu a sua meta de passos.";

        System.out.println(alturaEmMetros / 100);
    }
}
