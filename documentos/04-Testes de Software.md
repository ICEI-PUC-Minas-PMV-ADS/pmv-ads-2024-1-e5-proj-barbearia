# Planos de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


## 1. Plano de testes dos Requisitos de Autenticação e Gerenciamento de Usuários:

|  **Caso de Teste**  |  **CT-01  - Tentativa de login com credenciais válidas**  |
|--|--|
|Requisitos Associados:  |RF-001: Permitir que os funcionários efetuem login na aplicação  | 
|Critérios de Êxito:  | Retornar status code 200(sucesso) e um Bearer Token |



|  **Caso de Teste**  |  **CT-02  - Tentativa de login com credenciais inválidas**  |
|--|--|
|Requisitos Associados:  |RF-001: Permitir que os funcionários efetuem login na aplicação  | 
|Critérios de Êxito:  | Retornar status code 401(Erro) |



|  **Caso de Teste**  |  **CT-03 - Acessar pagina que necessita de autenticação com token válido**  |
|--|--|
|Requisitos Associados:  |RF-001: Permitir que os funcionários efetuem login na aplicação  | 
|Critérios de Êxito:  | Retornar status code 200(Sucesso) |



|  **Caso de Teste**  |  **CT-04 - Acessar pagina que necessita de autenticação com token inválido**  |
|--|--|
|Requisitos Associados:  |RF-001: Permitir que os funcionários efetuem login na aplicação  | 
|Critérios de Êxito:  | Retornar status code 401(Erro) |



|  **Caso de Teste**  |  **CT-05  -  Processo de redefinição de senha**  |
|--|--|
|Requisitos Associados:  |RF-003: Permitir que funcionários e administradores redefinam a senha.| 
|Critérios de Êxito:  | Evidência de Sucesso: Retornar a mensagem de Sucesso e status code 200.|


## 2. Plano de testes dos Requisitos de Agendamento e Gerenciamento de Serviços:

|  **Caso de Teste**  |  **CT-04  -  Caso de Teste: Cliente agenda um serviço através da plataforma.**  |
|--|--|
|Requisitos Associados:  |RF-004: Permitir que os clientes agendem serviços online| 
|Critérios de Êxito:  | Evidência de Sucesso: O agendamento é registrado no sistema e refletido no calendário da barbearia.|
   

|  **Caso de Teste**  |  **CT-05  -  Caso de Teste: Cliente agenda um serviço através da plataforma.**  |
|--|--|
|Requisitos Associados:  |RF-005: Permitir que os clientes cancelem seus agendamentos.| 
|Critérios de Êxito:  | Evidência de Sucesso: O agendamento é removido do sistema e a vaga é liberada para outros clientes.|


|  **Caso de Teste**  |  **CT-06  - Funcionário visualiza e atualiza os agendamentos no sistema.**  |
|--|--|
|Requisitos Associados:  |RF-006: Permitir que a barbearia gerencie os agendamentos. | 
|Critérios de Êxito:  |  Evidência de Sucesso: O funcionário consegue ver todos os agendamentos e realizar as alterações necessárias.|


|  **Caso de Teste**  |  **CT-07  - Cliente e funcionário acessam o histórico de serviços.**  |
|--|--|
|Requisitos Associados:  |RF-007: Permitir que a barbearia e o cliente visualizem o histórico de serviços agendados e realizados. | 
|Critérios de Êxito:  |  Evidência de Sucesso: Ambos conseguem visualizar os serviços previamente agendados e os realizados.|


## 3. Plano de testes dos Requisitos de Gerenciamento e Relatórios:

|  **Caso de Teste**  |  **CT-08  - Administração oferece um serviço gratuito para um cliente fidelizado..**  |
|--|--|
|Requisitos Associados:  |RF-008: Permitir que o administrador possa ofertar algum serviço gratuito para clientes fidelizados. | 
|Critérios de Êxito:  | Evidência de Sucesso: O cliente recebe o serviço gratuito conforme definido pelo administrador.|
   

|  **Caso de Teste**  |  **CT-09  -  Administração acessa o relatório mensal.**  |
|--|--|
|Requisitos Associados:  |RF-009: Disponibilizar relatório para o administrador contendo serviços realizados, produtos vendidos e valores obtidos mensalmente. | 
|Critérios de Êxito:  | Evidência de Sucesso: O relatório exibe com precisão os serviços realizados, produtos vendidos e valores obtidos.|
   

|  **Caso de Teste**  |  **CT-10  -  Funcionário realiza uma atualização no estoque de produtos.**  |
|--|--|
|Requisitos Associados:  |RF-010: Permitir que a barbearia gerencie o estoque de produtos. | 
|Critérios de Êxito:  | Evidência de Sucesso: O estoque é atualizado corretamente no sistema.|


## 4. Plano de testes dos Outros Requisitos Funcionais:

   
|  **Caso de Teste**  |  **CT-11  -  Sistema envia e-mail de lembrete para o cliente antes do horário agendado.**  |
|--|--|
|Requisitos Associados:  |RF-011: Enviar e-mail de lembrete para o cliente 1 hora antes do horário agendado. | 
|Critérios de Êxito:  | Evidência de Sucesso: O cliente recebe o e-mail de lembrete no tempo especificado.|


|  **Caso de Teste**  |  **CT-12  -  Cliente acessa as informações sobre a barbearia na plataforma.**  |
|--|--|
|Requisitos Associados:  |RF-012: Possibilitar a visualização de informações sobre a barbearia. | 
|Critérios de Êxito:  | Evidência de Sucesso: Todas as informações relevantes estão visíveis e atualizadas.|


|  **Caso de Teste**  |  **CT-13  - Cliente envia uma dúvida ou sugestão através da plataforma.**  |
|--|--|
|Requisitos Associados:  | RF-013: Seção de contato para dúvidas e sugestões | 
|Critérios de Êxito:  |  Evidência de Sucesso: A mensagem é enviada com sucesso e registrada para a equipe responder.|


|  **Caso de Teste**  |  **CT-14  - Verificar a presença dos links das redes sociais na plataforma.**  |
|--|--|
|Requisitos Associados:  | RF-014: Disponibilização do link das redes sociais da barbearia na plataforma. | 
|Critérios de Êxito:  |  Evidência de Sucesso: Os links das redes sociais estão acessíveis e corretos.|


|  **Caso de Teste**  |  **CT-15  - Cliente especifica se precisa de atendimento especial durante o agendamento.**  |
|--|--|
|Requisitos Associados:  | RF-015: Permitir que clientes selecionem se precisam de atendimento especial ou não. | 
|Critérios de Êxito:  |  Evidência de Sucesso: A preferência do cliente é registrada e refletida no sistema.|


 
# Evidências de Testes de Software

Apresente imagens e/ou vídeos que comprovam que um determinado teste foi executado, e o resultado esperado foi obtido. Normalmente são screenshots de telas, ou vídeos do software em funcionamento.

## Testes do projeto da Barbearia Vintage ##

Este documento descreve os testes realizados para garantir o funcionamento adequado do sistema da barbearia Vintage.

###  CT-01 - Tentativa de login com credenciais válida ###

Este teste verifica se a aplicação retorna uma resposta bem-sucedida ao fazer login e fornecer credenciais válidas.
 
Este teste envia uma solicitação de login para a API com um e-mail e senha válidos. Em seguida, verifica se a resposta possui um código de status HTTP 200 (OK) e se a estrutura JSON da resposta contém os campos esperados: 'acess_token' e 'token_type'.

Aqui estão duas capturas de tela demonstrando o funcionamento do teste de login com credenciais válidas.

![Login com Credenciais Válidas - Sucesso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/login.png?raw=true)

A imagem acima mostra a resposta bem-sucedida da aplicação após o teste de login com credenciais válidas. O código de status HTTP 200 indica que a solicitação foi processada com sucesso e o token de acesso foi gerado corretamente.

![Estrutura JSON da Resposta](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/login02.png?raw=true)

Nesta captura de tela, podemos ver a estrutura JSON da resposta do teste. Os campos 'acess_token' e 'token_type' estão presentes, confirmando que a resposta está de acordo com o esperado pelo teste.

Estas capturas de tela validam o funcionamento correto do teste de login com credenciais válidas.


###  - CT-02 - Tentativa de login com credenciais inválidas ###

Este teste verifica se a aplicação retorna uma resposta bem-sucedida ao fazer login e fornecer credenciais válidas.


Este teste envia uma solicitação de login para a API com um e-mail e senha inválidos. Em seguida, verifica se a resposta possui um código de status HTTP 401 e se a estrutura JSON da resposta contém os campos esperados: 'acess_token' e 'token_type'.



  ![image](https://github.com/lucasdamasceno96/1234puc/assets/105467049/d0e73fbd-93b7-4d59-a0e9-b139e5abaa97)

  ![image2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/login-inv.png?raw=true)


A imagem acima mostra a resposta bem-sucedida da aplicação após o teste de login com credenciais inválidas. O código de status HTTP 401 indica que a solicitação foi recusada e acesso negado.

### CT-03 - Acessar pagina que necessita de autenticação com token válido ###


  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/token-valido.png?raw=true)


### CT-04 - Acessar pagina que necessita de autenticação com token inválido ###

  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/token-inva.png?raw=true)

  ![image2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/token-inva02.png?raw=true)

### CT-05 - Processo de redefinição de senha ###

Este é um teste de recuperação de senha dividido em três etapas. O objetivo é simular o processo de recuperação de senha em um sistema.
 
##### 1. Recuperação de Senha - Envio de Email com Código de 6 Dígitos

Nesta etapa, o sistema deve permitir que o usuário solicite a recuperação de senha fornecendo seu endereço de e-mail. O sistema então envia um e-mail contendo um código de 6 dígitos para o endereço fornecido.

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/req-senha.png?raw=true)
![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/req-senha02.png?raw=true)

##### 2. Validação do Código de 6 Dígitos com Sucesso

Após receber o e-mail com o código de recuperação, o usuário deve inserir esse código no sistema. O sistema então valida se o código inserido está correto e se corresponde ao código enviado por e-mail.

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/req-suc.png?raw=true)

##### 3. Informando a Nova Senha com Sucesso

Uma vez validado o código de recuperação, o usuário deve poder definir uma nova senha para sua conta. O sistema permite que o usuário insira a nova senha e a confirme.

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/senha-suc.png?raw=true)

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/senha-suc02.png?raw=true)


#### Possíveis Erros

Durante o teste, duas etapas de verificação de erro são consideradas:

1. **Código Errado:** Se o usuário inserir um código incorreto na etapa de validação, o sistema deve retornar uma mensagem de erro indicando que o código inserido está incorreto.

  ![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/cod-invalido.png?raw=true)

  ![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/cod-invalido02.png?raw=true)

4. **Confirmação de Senha Errada:** Se o usuário inserir uma senha de confirmação diferente da nova senha na etapa de informar a nova senha, o sistema deve retornar uma mensagem de erro indicando que a confirmação da senha está incorreta.

 ![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/s-errada02.png?raw=true)

 ![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/s-errada1.png?raw=true)

Este teste de recuperação de senha ajuda a garantir que o sistema seja capaz de lidar com o processo de recuperação de senha de forma eficiente e segura, proporcionando uma experiência satisfatória ao usuário.


###  Efetuar Logout com Sucesso

Nesta etapa do teste, o usuário já está autenticado no sistema e deseja sair da sessão. O teste consiste em:

- Clicar no botão ou link de "Logout" disponível no sistema.
- Verificar se o sistema redireciona o usuário para a página de login ou para a página inicial da aplicação.


![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/log-out00.png?raw=true)

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/logout.png?raw=true)

###  Entrar em contato com a barbearia

Nesta etapa verificamos se o usuario consegue entrar em contato com a barbearia.

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/contato01.png?raw=true)

![img](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes/contato02.png?raw=true)

### Marcar horário 

Nesta etapa verificamos que o usuário selecionou o horário de 17:00h e foi removido o horário de 16:00h.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/103466408/dfbccfc9-77bd-4b42-a968-d7350f2ad1c3)

### Foi exibido horários inválidos (hora anterior a atual)

O usuário acessou o site para marcar um horário na data do dia 18/04/2024 às 20:11h, porém está exibindo os horários anteriores, como por exemplo, às 9h da manhã.

Veja o exemplo abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/103466408/2e546a67-6182-4c5a-b813-b55ef06a817c)

### Teste de Sucesso - Cliente agenda um serviço através da plataforma ###

Requisitos Associados:
RF-004: Permitir que os clientes agendem serviços online

Critérios de Êxito:
Evidência de Sucesso: O agendamento é registrado no sistema e refletido no calendário da barbearia.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/blob/main/documentos/img/testes-int/agenda.jpeg?raw=true)

### Teste de Passagem de Parâmetro Incorreto no Agendamento ###

Este documento descreve um caso de teste para verificar o comportamento da API quando um parâmetro incorreto é passado durante o agendamento de um serviço.

Descrição:
Este caso de teste visa garantir que a API retorne um erro apropriado quando um parâmetro incorreto é passado durante o processo de agendamento de um serviço.

Critérios de Êxito:
A API retorna um código de erro apropriado.

Cenários de Teste:
Passagem de uma data inválida como parâmetro.
Passagem de um tipo de serviço inexistente como parâmetro.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/105467049/47c6abdd-9fb5-4725-8633-1a0cf900cd6e)


### Lista de Serviço - Disponibiliza os serviços que são feitos na barbearia

RF-004: Permitir que os clientes agendem serviços online

Evidência de Sucesso: O cliente consegue visualizar todos os serviços oferecidos pela barbearia

![WhatsApp Image 2024-05-12 at 12 08 57](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/103466408/bbea5e2e-1dc4-49d7-b090-dde1dd30e4a9)


### Lista de Barbeiros - Disponibiliza os barbeiros disponiveis na barbearia
RF-004: Permitir que os clientes agendem serviços online

Evidência de Sucesso: O cliente consegue visualizar todos os barbeiros disponiveis na barbearia

![WhatsApp Image 2024-05-12 at 12 09 25 (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/102702197/7eeb1267-f2bc-4392-a98e-a766c65ef449)

### Listando horários Disponíveis - Permitir que o cliente visualize os horários disponíveis 

RF-004: Permitir que os clientes agendem serviços online

Evidência de Sucesso: Cliente consegue visualizar os horários disponíveis e selecionar o horário que melhor lhe atenda.

![WhatsApp Image 2024-05-12 at 12 09 52 (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-barbearia/assets/103466408/c4dcd4e2-f8c5-4c4e-a3bb-3063594cd16d)









