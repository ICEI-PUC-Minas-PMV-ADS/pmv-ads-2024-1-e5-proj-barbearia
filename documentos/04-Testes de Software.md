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
