public class App {
    public static void main(String[] args) throws Exception {
        
        double consumeMedio = 12.5;
        double capadicdadeTanque = 50;
        double combustivelAtual = 20;
        double distanciaViagem = 200;

        double autonomiaMaxima = consumeMedio * capadicdadeTanque;
        double autonomiAtual = consumeMedio * combustivelAtual;

        System.out.printf("Autonomia máxima do veículo: %.1f km%n", autonomiaMaxima);
        System.out.printf("Autonomia atual: %.1f km%n", autonomiAtual);

        if (autonomiAtual >= distanciaViagem) {
            System.out.println("Você conseguirá completar a viagem sem precisar abastecer.");
        } else {
            System.out.println("Atenção! Você precisará abastecer antes de concluir a viagem.");
        }
    }
}
