import { Pessoa } from '../../pessoa';
  
class Aluno extends Pessoa {
    course: string;
  
    constructor(nome: string, idade: number, curso: string) {
      super(nome, idade);
      this.course = curso;
    }
  
    exibirInformacoes(): string {
      return `Nome: ${this.name}, Idade: ${this.age}, Curso: ${this.course}`;
    }
}
  
 
const aluno1 = new Aluno("Juttahir", 30, "Engenharia da Computacao");
  console.log(aluno1.exibirInformacoes());

const aluno2 = new Aluno("Edgard", 28, "Engenharia da Computacao");
  console.log(aluno2.exibirInformacoes());
  