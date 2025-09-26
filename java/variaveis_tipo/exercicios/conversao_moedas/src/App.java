public class App {
    public static void main(String[] args) throws Exception {
        
        double valorReais = 451.50;
        double taxaCambio = 5.25;

        double valorDolares = valorReais / taxaCambio;

        System.out.println("O valor em dólares é: " + valorDolares);
    }
}
