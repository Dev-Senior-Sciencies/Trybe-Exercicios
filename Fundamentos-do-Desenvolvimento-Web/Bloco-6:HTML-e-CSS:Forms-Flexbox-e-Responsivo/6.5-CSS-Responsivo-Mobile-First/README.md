Para os seguintes exercícios você não precisará alterar o arquivo HTML, apenas o CSS. 😉
1 - A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px .
2 - A segunda div só poderá aparecer apenas se a largura estiver entre 600px e 1000px .
3 - A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px .
4 - Sem alterar a classe trick , faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura .

<!-- exercico 1  -->

1 - Faça o tamanho da fonte ser maior;
2 - Faça o tamanho da fonte dos elementos h1 ser menor;
3 - Aumente o espaçamento entre as figuras;
4 - Adicione um pouco de margin na página.
5 - Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px) . Esse será o primeiro breakpoint do layout . Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
6 - Crie uma media query no seu arquivo CSS , usando a dimensão em pixels que você guardou como o min-width do teste da media query . Dentro desse breakpoint , adicione os seguintes ajustes:
Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito) ;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Faça as imagens serem mostradas em duas colunas.
7 - Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint .
8 - Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px) , e realize os seguintes ajustes dentro do breakpoint :
Altere a cor de fundo;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

<!-- exercico 2  -->
Realize as seguintes tarefas:
1 - Utilizando a abordagem mobile first e media queries , crie três versões de layout diferentes para essa página . Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande) . Faça pelo menos um commit para cada layout ;
2 - Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:
Onde a lista de capítulos deve estar posicionada?
Como a história deve ser mostrada?
Como o cabeçalho deve ser posicionado?
O que fazer com as informações do autor em cada tamanho de tela?
3 - Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.


<!-- exercico 3  -->

1 - Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:
Os elementos com id header , navigation e footer devem desaparecer;
O elemento com id aside deve ser mostrado abaixo do conteúdo principal.

2 - Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:
O elemento com id aside deve desaparecer;
O elemento body não deve ter padding ;
As imagens não devem exceder a largura da tela;
Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;
O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo após o usuário rolar a página.