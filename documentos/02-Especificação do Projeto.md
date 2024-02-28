# Especificações do Projeto

A base para a construção do presente projeto consiste na criação de uma aplicacao para agendamento de horários e gerenciamento de uma barbearia, que ofereça aos usuários a possibilidade de agendamento online de servicos ofertados, além de serviços essenciais para gerencialmento da barbearia pelo gestor/dono. A partir de alinhamento com o cliete e consolidação das ideias dos membros da equipe de desenvolvedores, foram levantadas histórias de usuários e requisitos a quem se destina a aplicação.

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|RF-001|Permitir que os clientes se cadastrem e efetuem login na aplicação |ALTA|
|RF-002|Permitir que os clientes atalizem seus dados e redefinição de senha |ALTA|
|RF-003| Permitir que o usuário (clientes) agendem serviços online | ALTA | 
|RF-004| Permitir que a barbearia gerencie os agendamentos   | ALTA |
|RF-005| Permitir que a barbearia e o cliente visualizem histórico de serviços agendados e realizados   | MÉDIA |
|RF-006|Permitir que a barbearia gerencie o estoque de produtos utilizados pelos funcionários |MÁDIA|
|RF-007|Enviar e-mail de lembrete para o cliente 1 (uma) hora antes do do horarios agendado |BAIXA| 
|RF-008|Possibilitar a visualização de informações sobre a barbearia (endereço, telefone, horário de funcionamento, etc.) |MÉDIA| 
|RF-009|Seção de contato para dúvidas e sugestões |BAIXA| 
|RF-010|Integração com redes sociais |BAIXA| 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ter interface simples e intuitiva, de fácil navegação| MÉDIA | 
|RNF-002| Layout responsivo para adaptação a diferentes dispositivos (celulares, tablets, desktops) |  ALTA | 
|RNF-002| Sistema estável e sem erros |  ALTA |
|RNF-001|O sistema deve oferecer proteção dos dados dos clientes (criptografia, autenticação, etc.).| ALTA | 
|RNF-001| O sistema deve oferer tempo de carregamento rápido das páginas.| MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá seguir o cronograma proposto pela PUC |
|02| A aplicação terá o desenvolvimento backend e frontend       |
|03| A aplicação deve ser acessível a partir dos principais navegadores (Chrome, Firefox, Safari, Edge) e dispositivos. |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
