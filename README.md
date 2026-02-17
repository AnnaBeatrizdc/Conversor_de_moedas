# Conversor de Moedas

Aplicação front-end simples para converter valores entre moedas (BRL, USD, EUR, GBP), feita com HTML, CSS e JavaScript.

**Descrição**
- Projeto didático que permite ao usuário inserir um valor, escolher moeda de origem e destino, e obter o valor convertido usando uma API de câmbio.

**Funcionalidades implementadas**
- Modo claro/escuro com persistência no `localStorage` (mantém a preferência do usuário entre visitas).
- Seleção dinâmica de moedas de origem e destino (`BRL`, `USD`, `EUR`, `GBP`).
- Atualização das bandeiras conforme a moeda selecionada (ícones visuais para origem e destino).
- Conversão em tempo real via API: busca a cotação usando `https://economia.awesomeapi.com.br/json/last/{DE}-{PARA}` e calcula o resultado.
- Validações de entrada:
	- Verifica se as moedas foram selecionadas.
	- Impede conversão quando as moedas são iguais.
	- Verifica se o valor informado é maior que zero.
- Exibição do resultado com:
	- Valor inserido e moeda de origem.
	- Valor convertido com duas casas decimais e moeda de destino.
	- Bandeiras correspondentes às moedas mostradas no resultado.
- Botão `Limpar` para resetar campos e ocultar o painel de resultado.

**Como usar**
- Abra [index.html](index.html) em um navegador moderno.
- Ou rode um servidor local (ex.: executar no terminal `python -m http.server 8000`) e acesse `http://localhost:8000`.
- Insira um valor, selecione a moeda de origem e destino, então clique em `Converter`.

**Como funciona a conversão**
- O script faz uma requisição `fetch` para a API `economia.awesomeapi.com.br` e usa o campo `bid` da resposta como taxa de câmbio.
- A conversão é feita por: `resultado = valor * taxa` e exibida com duas casas decimais.
- Observação: é necessário conexão com a internet para a chamada à API.

**Estrutura do projeto**
- [index.html](index.html) — página principal e marcação.
- [style.css](style.css) — estilos do projeto.
- [reset.css](reset.css) — reset de estilos.
- [script.js](script.js) — lógica do tema, seleção de bandeiras, validações, requisição à API e manipulação do DOM.
- `fonts/` — fontes usadas no layout.
- `img/` — imagens e ícones (bandeiras, ícones de tema, imagens do conversor).

**Personalização e manutenção**
- Para adicionar ou remover moedas, atualize o objeto `bandeiras` e as opções nos selects em `index.html` e `script.js`.
- Para alterar a fonte de cotações, substitua a URL de `fetch` em `carregarMoedas()` por outra API compatível.

**Contribuição**
- Sinta-se à vontade para abrir issues ou enviar pull requests com correções e melhorias.

**Licença**
- Sem licença definida por padrão. Recomenda-se adicionar `LICENSE` (ex.: MIT) se quiser permitir uso público.

---

Se quiser, eu posso: adicionar um arquivo `LICENSE` (MIT), incluir badges (ex.: build, licença), ou estender a documentação com instruções para desenvolvimento local.
