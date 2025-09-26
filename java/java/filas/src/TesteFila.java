import java.util.LinkedList;
import java.util.Queue;

public class TesteFila {
    public static void main(String[] args) {
        Fila fila = new Fila();
        Queue<String> filaDoJava = new LinkedList<String>();

        // Adicionar elementos
        fila.adiciona("Mauricio");
        fila.adiciona("Guilherme");

        // Remove elemento
        String x1 = fila.remove();
        System.out.println(x1);
        System.out.println(fila);

        // QUEUE

        // adiciona: add
        // remove: poll

        filaDoJava.add("Mauricio");
        String x2 = filaDoJava.poll();

        System.out.println(fila);
    }
}
