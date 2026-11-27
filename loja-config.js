// Configurações da loja: edite aqui (não precisa mexer no resto).
// Endereço do catálogo no GitHub Pages (com / no final)
export const CATALOGO_URL = "https://kellencortadores.github.io/catalogo/";

// Respostas rápidas do painel: [nome do botão, texto]. Ao tocar, o texto vai para a caixa e você ainda pode editar antes de enviar.
export const RESPOSTAS = [
  ["Já te respondo", "Oi! Já te respondo, só um instante 😊"],
  ["Pix", "Segue a chave Pix: 21825781885"],
  ["Prazo", "O prazo de produção é de (X) dias úteis após a confirmação do pagamento."],
  ["Retirada", "Retirada na R. Haiti, 331, Apto 83B, Jardim América, próximo ao Shopping Jardim Oriente.\nGoogle Maps: https://maps.app.goo.gl/PZDV84XhJwnnshGd9"]
];

// Situação de cada conversa (menu no painel)
export const SITUACOES = ["Novo", "Orçamento", "Aguardando Pix", "Em produção", "Enviado"];

// Botões de atalho no topo do chat da cliente: [nome, link ou texto]
// Se começar com http abre o link; senão coloca o texto na caixa de mensagem.
export const ATALHOS = [
  ["Ver catálogo", CATALOGO_URL + "index-main.html"],
  ["Fazer pedido", "Olá! Quero fazer um pedido. Modelo/tema: \nQuantidade: \nObservação: "]
];
