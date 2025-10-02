# Projeto Landing Page - Processo Seletivo

## Como utilizar o sistema

Antes de iniciar, certifique-se de que o sistema operacional hospedeiro possua instalados:

- Docker
- Docker Compose

Além disso, verifique se as portas **3000** e **8000** do seu computador não estão ocupadas.

### Iniciando o projeto

No diretório raiz do projeto, execute:

docker-compose up --build

obs: a flag --build é especialmente importante se você fez alguma alteração no código

Isso será suficiente para subir o sistema.

Quando o sistema estiver rodando, acesse: [http://localhost:3000](http://localhost:3000)

Você pode se informar sobre 5 cursos diferentes . na seção de cursos, click em um card de algum curso para carregar suas informaçõe!

### Acessando a aplicação em outros dispositivos na rede local

Para acessar a aplicação de outros dispositivos na mesma rede:

1. Abra o arquivo `src/App.jsx`.
2. Modifique a linha 27 (const ip = "127.0.0.1";)


Substitua `"127.0.0.1"` pelo IP da máquina hospedeira.

### Acessando a aplicação via internet

Para acesso público:

1. Instale o sistema em um servidor público.
2. Abra o arquivo `src/App.jsx`.
3. Modifique a linha 27 (const ip = "127.0.0.1";)

Substitua `"127.0.0.1"` pelo endereço público do servidor.

---

## Decisões técnicas

- O projeto utiliza **Docker** e **Docker Compose** para facilitar o deploy via containers.
- Frontend desenvolvido em **React**, de forma modular.
- Estilização e responsividade com **Bootstrap 5**.
- Arquivos estáticos do React servidos por **Express**.
- Dados dos cursos fornecidos por uma **API REST em PHP**.  
  > Atualmente, a API não se comunica com banco de dados; os dados estão em uma estrutura de dados junto do código da API.

---

## Pontos a melhorar

- Implementar tratamento de exceções.
- Finalizar detalhes pendentes do frontend.
- Integrar a API PHP com banco de dados.
- Avaliar o uso de framework PHP moderno (**Laravel**) na API.
- Implementar testes automatizados.
- Melhorar a documentação e instruções de deploy.

---

## Observações

- Certifique-se de que as portas necessárias estejam liberadas.
- Sempre faça rebuild do container após alterações significativas no código.
