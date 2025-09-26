class Animal {
    // propriedades e métodos comuns
}

class Cachorro extends Animal {
    // propriedades e métodos do cachorro
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Cachorro();

        if (animal instanceof Cachorro) {
            Cachorro cachorro = (Cachorro) animal;
            // Agora você pode usar o objeto 'cachorro' como um Cachorro.
        } else {
            System.out.println("O objeto não é um Cachorro.");
        }
    }
}
