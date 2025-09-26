package br.com.alura.bybanck;

import java.time.LocalDate;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Funcionario jose = new Funcionario("José", 1, LocalDate.of(1990, 2, 12));
        System.out.println(jose);
    }

    public static class Funcionario{
        private String nome;
        private int matricula;
        private LocalDate dataNascimento;

        public Funcionario(String josé, int i, LocalDate of) {
            this.nome = nome;
            this.matricula = matricula;
            this.dataNascimento = dataNascimento;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public int getMatricula() {
            return matricula;
        }

        public void setMatricula(int matricula) {
            this.matricula = matricula;
        }

        public LocalDate getDataNascimento() {
            return dataNascimento;
        }

        public void setDataNascimento(LocalDate dataNascimento) {
            this.dataNascimento = dataNascimento;
        }
        @Override
        public String toString() {
            return "Funcionario{" +
                    "nome='" + getNome() + '\'' +
                    ", matricula=" + getMatricula() +
                    ", dataNascimento=" + getDataNascimento() +
                    '}';
        }

        public class Saldo {
            public static void main(String[] args) {
                Scanner leitura = new Scanner(System.in);
                System.out.println("Digite o saldo:");
                var saldo = leitura.nextDouble();
                double percentual = saldo * (10.0 / 100);
                var valorFinal = saldo + percentual;
                System.out.println("O saldo com o reajuste de 10% é: " + valorFinal);
            }
        }
    }

}
