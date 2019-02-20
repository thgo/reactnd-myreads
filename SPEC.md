### ESPECIFICAÇÕES DO PROJETO
## MyReads: A Book Lending App

# Configuração da aplicação

### CRITÉRIO
É fácil instalar e iniciar a aplicação?

### ATENDEU ÀS ESPECIFICAÇÕES
A aplicação foi criada com o create-react-app e exige apenas o npm install e npm start para ser instalada e iniciada (ou com yarn).

### CRITERIO
A aplicação inclui o README, com instruções claras de instalação e inicialização?

### ATENDEU ÀS ESPECIFICAÇÕES
Um README atualizado que descreve o projeto e tem instruções para instalar e rodar o projeto estão incluídas no README.

## Página principal

### CRITÉRIO
A página principal exibe três categorias (ou "estantes") para livros ("currently reading", "want to read" e "read")?

### ATENDEU ÀS ESPECIFICAÇÕES
A página principal exibe três estantes de livros, e cada livro é mostrado na estante correta.

### CRITÉRIO
A página principal permite que os usuários mudem os livros de estante?

### ATENDEU ÀS ESPECIFICAÇÕES
A página principal exibe um controle que permite aos usuários mudar os livros de estante. O controle deve estar ligado a cada instância de livros. A funcionalidade de mover um livro para uma estante diferente funciona corretamente.

### CRITÉRIO
As informações são mantidas quando ocorrem refreshes de página?

### ATENDEU ÀS ESPECIFICAÇÕES
Quando é feito refresh no navegador, a página continua exibindo as mesmas informações.


# Página de busca

### CRITÉRIO
A página de busca tem um input de busca que permite que os usuários procurem por livros?

### ATENDEU ÀS ESPECIFICAÇÕES
1) A página de busca possui um campo de busca.
2) A página de busca se comporta corretamente:
a) Quando o usuário digita algo no campo de busca, os livros relacionados à sua busca são corretamente exibidos na página.
b) Resultados de buscas não são mostrados quando todo o texto do input de pesquisa é deletado
c) Buscas inválidas são cuidadas e resultados anteriores não são mostrados.
d) A pesquisa funciona corretamente quando um livro não possui um thumbnail ou um autor. (Para testar isto, pesquise por "poetry" e "biography").
e) O usuário consegue pesquisar com múltiplas palavras, tais como "artificial intelligence".


### CRITÉRIO
Os resultados de busca permitem que um usuário categorize um livro como "currently reading", "want to read" ou "read"?

### ATENDEU ÀS ESPECIFICAÇÕES
1) Os resultados da página de busca permitem que os usuários selecionem "currently reading", "want to read" ou "read" e coloquem os livros na estante certa.
2) Livros que não possuem uma estante possuem a marcação em "None" na lista de seleção.
3) Livros que já estão na estante possuem a marcação em sua respectiva estante da lista de seleção.

### CRITÉRIO
As seleções feitas na página de busca aparecem na página principal?

### ATENDEU ÀS ESPECIFICAÇÕES
Quando um livro é categorizado na página de busca e o usuário navega para a página principal, o livro aparece na respectiva estante da página principal.

# Routing

### CRITÉRIO
A página principal conecta-se à página de busca?

### ATENDEU ÀS ESPECIFICAÇÕES
A página principal contém um link para a página de busca. Ao clicar neste link, a página de busca é exibida e a URL no endereço do navegador é /search.

A página de busca é exibida corretamente ao entrar na página inserindo /search diretamente na URL do projeto no navegador.

### CRITÉRIO
A página de busca conecta-se de volta à página principal?

### ATENDEU ÀS ESPECIFICAÇÕES
A página de busca contém um link para a página principal. Ao clicar neste link, a página principal é exibida e a URL no endereço do navegador é /.

# Funcionalidade do código

### CRITÉRIO
O código do projeto lida com o gerenciamento de estado de forma adequada?

### ATENDEU ÀS ESPECIFICAÇÕES
O estado componente é passado dos componentes pais para os filhos. A variável de estado não é modificada diretamente - a função setState() é usada de forma correta.

Os livros possuem o mesmo estado tanto na página de busca como na página principal da aplicação: se um livro está na estante, isso é refletido nos dois locais.

### CRITÉRIO
O JSX é formatado de maneira adequada?

### ATENDEU ÀS ESPECIFICAÇÕES
Todos os códigos JSX são formatados de maneira adequada e funcional.

# Nomeação do projeto

### CRITÉRIO
O projeto desenvolvido se destacou por adicionar recursos extras além do que foi pedido nas especificações do projeto?

### ATENDEU ÀS ESPECIFICAÇÕES
⚠ ATENÇÃO ⚠ - este item NÃO é um critério obrigatório a se cumprir para ser aprovado no projeto. O seu projeto será aprovado baseando-se apenas nos critérios anteriores (Funcionalidade do código, Routing, etc). Por isso:

  * Se você não for aprovado em pelo menos 1 dos critérios anteriores, os revisores irão também reprovar este critério caso você não atenda ao mesmo. Eles deixarão um comentário nesta especificação informando o que falta para você conquistar a nomeação.
  * Na revisão em que todos os critérios anteriores forem aprovados, o seu projeto estará aprovado. Por isso, este item também será aprovado, independente do seu projeto ter sido nomeado ou não.

#### CRITÉRIO PARA TER O PROJETO NOMEADO
  O projeto desenvolvido possui pelo menos três dos seguintes itens:

####  Item 1 - A arquitetura de código do projeto está muito bem projetada e enxuta

* A composição dos componentes está bem definida e coesa
* E a definição dos estados está coesa e aplicada no componente pai mais adequado de acordo com a regra de fluxo de dados unidirecional do React
* E o uso dos métodos do ciclo de vida está correto
* E o código está perfeitamente legível e indentado. Os nomes de variáveis, funções, etc. fazem sentido para sua função
* E não há código JSX repetido. Todos os itens repetidos foram corretamente componentizados, contribuindo para o reuso.
* E há uso de comentários em trechos de código de maior complexidade para facilitar o entendimento

####  Item 2 - Há uso de bibliotecas/pacotes externos relevantes não pedidos no projeto

  * Fez uso de um conjunto de pacotes externos que agregou de maneira relevante à UI/UX, como loadings, debounce, forms, material design, bootstrap, etc.
  * OU utilizou outras tecnologias adicionais ao React (GraphQL, Relay, Apollo, Saga, etc)

#### Item 3 - Foram adicionados novos recursos relevantes na aplicação

  * Implementou recursos além do que foi pedido. Tais features aumentaram a relevância de uso da aplicação, seja enriquecendo a experiência do usuário ou suprindo novas necessidades de uso

#### Item 4 - Há uso de testes na aplicação
  * Aplicou testes na aplicação, seja com Jest, Nightmare ou qualquer outra ferramenta de testes unitários ou de integração. Os testes apresentaram uma cobertura mínima de 80%
