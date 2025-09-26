import java.util.Stack;

public class TesteDaPilha {
    public static void main(String[] args) {
        Pilha pilha = new Pilha();
        Stack<String> stack = new Stack<String>();

        pilha.insere("Mauricio");
        System.out.println(pilha);
        pilha.insere("Guilherme");

        String r1 = pilha.remove();
        System.out.println(r1);
        String r2 = pilha.remove();
        System.out.println(r2);

        System.out.println(pilha.vazia());

        // Adiciona elemento na pilha
        stack.push("Mauricio");
        stack.push("Marcelo");

        // Remove elemento na pilha
        stack.pop();

        System.out.println(stack);
        System.out.println(pilha);
    }
}
