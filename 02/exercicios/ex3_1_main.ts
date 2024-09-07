import { Cliente } from './ex3_1_cliente';
import { Pedido } from './ex3_1_pedido';

const cliente1 = new Cliente('Juttahir Moraes', 'juttahir@example.com');
const pedido1 = new Pedido(cliente1, 'MacBook Pro', 8500.00);
pedido1.exibirInformacoes();

const cliente2 = new Cliente('Edgard Pereira', 'edgard@example.com');
const pedido2 = new Pedido(cliente2, 'MacBook', 7500.00);
pedido2.exibirInformacoes();