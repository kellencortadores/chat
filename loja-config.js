// Configurações da loja: edite aqui (não precisa mexer no resto).
// Endereço do catálogo no GitHub Pages (com / no final)
export const CATALOGO_URL = "https://kellencortadores.github.io/catalogo/";

// Respostas rápidas do painel: [nome do botão, texto]. Ao tocar, o texto vai para a caixa e você ainda pode editar antes de enviar.
export const RESPOSTAS = [
  ["Já te respondo", "Oi! Já te respondo, só um instante 😊"],
  ["Pix", "Segue a chave Pix: 21825781885"],
  ["Prazo", "O prazo de produção é de (X) dias úteis após a confirmação do pagamento."],
  ["Retirada", "Retirada na R. Haiti, 331, Apto 83B, Jardim América, próximo ao Shopping Jardim Oriente. Google Maps: https://maps.app.goo.gl/PZDV84XhJwnnshGd9"]
];

// Situação de cada conversa (menu no painel)
export const SITUACOES = ["Novo", "Orçamento", "Aguardando Pix", "Em produção", "Enviado"];

// Botões de atalho no topo do chat da cliente: [nome, link ou texto]
// Se começar com http abre o link; senão coloca o texto na caixa de mensagem.
export const ATALHOS = [
  ["Ver catálogo", CATALOGO_URL + "index-main.html"]
];

// Menu "Orçamento" do chat da cliente: [nome da opção, tabela que aparece para ela]
// Use **texto** para negrito e *texto* para itálico. Para mudar um preço, é só editar aqui.
export const ORCAMENTO = [
  ["Logomarca", `✨ **Logomarcas Personalizadas — Cortador + Carimbo** ✨

📏 **Tamanhos disponíveis**

💛 **4 cm — R$ 25**
*(Cortador + Carimbo)*

Ideal para símbolos e logomarcas mais simples.

Por ser um tamanho reduzido, **não produzimos modelos com textos ou frases**, pois o espaço pode comprometer a qualidade do corte e a definição dos detalhes.

💛 **5 cm — R$ 30**
*(Cortador + Carimbo)*

Indicado para logomarcas com símbolo gráfico. Caso deseje incluir texto, poderá ser necessário realizar pequenas adaptações no desenho para garantir um resultado bonito e funcional.

💛 **6 cm — R$ 40**
*(Cortador + Carimbo)*

A melhor opção para logomarcas com mais detalhes, proporcionando maior fidelidade ao desenho e um acabamento mais preciso.

🖋️ **Sobre fontes e detalhes delicados**

Fontes cursivas, românticas, muito finas ou com serifa, além de detalhes muito pequenos, podem precisar de ajustes durante a preparação da arte. Essas adaptações são feitas para garantir que o cortador e o carimbo sejam resistentes, funcionais e reproduzam a logomarca da melhor forma possível.

⏳ **Prazo de criação**

Cada logomarca é preparada individualmente, por isso o prazo pode variar conforme a demanda da semana.

💛 **Na maior parte do tempo, os pedidos são produzidos em poucos dias.**

Apenas em períodos de maior movimento, como datas comemorativas ou semanas com muitos pedidos, o prazo de produção **pode chegar a até 10 dias**.

Antes de confirmar seu pedido, informaremos o prazo previsto para a produção.

💬 **Pedidos e pagamento**

Os pedidos são realizados aqui pelo chat.

✨ **Formato do cortador**

O cortador pode ser produzido no formato que melhor se adapta à sua logomarca, respeitando os limites técnicos necessários para garantir um excelente resultado.

💛 Obrigado pelo carinho e pela confiança! Será um prazer transformar sua logomarca em um cortador exclusivo.`],

  ["Apenas cortador", `🌟 **Cortadores sem carimbos**

Com 5cm: R$9
Com 6cm: R$10
Com 7cm: R$11
Com 8cm: R$12

Com 9cm: R$14
Com 10cm: R$15
Com 11cm: R$16
Com 12cm: R$17`],

  ["Cortador + carimbo", `🌟 **Cortadores com carimbos**

Com 5cm: R$18
Com 6cm: R$20
Com 7cm: R$22
Com 8cm: R$24

Com 9cm: R$28
Com 10cm: R$30
Com 11cm: R$32
Com 12cm: R$34`]
];
