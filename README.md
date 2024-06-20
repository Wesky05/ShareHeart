
# ShareHeart: seu app de doações 🩷

![ShareHeart](./assets/shareheart-cover.png)


## ℹ️ Sobre o ShareHeart

O ShareHeart surgiu como uma demanda da Refinaria de Abreu e Lima a fim de estimular o hábito de doar entre seus funcionários. 

É um aplicativo mobile que conecta doadores à instituições beneficentes. Nele, você pode encontrar as instituições mais próximas à você e realizar o cadastro para doar itens, valor monetário ou até mesmo atuar como voluntário em alguma causa social.
## 🎯  Objetivo

Nessa fase do projeto nos foi proposto o seguinte:

- [x]  Desenvolvimento do aplicativo mobile;
- [x]  CRUD via API;
- [x]  Consumo de recurso de hardware;

Para isso, decidimos dar vida à algumas funcionalidades do nosso app...
## ⚙️ Funcionalidades

Como o ShareHeart atua semelhante à uma rede social, são algumas das principais funcionalidades:

- Cadastro de usuário;
- Login do usuário;
- Alterações na conta do usuário;
- Exclusão de conta.

Além disso, adicionamos um recurso de hardware essencial para a proposta do nosso app ser cumprida, sendo este o recurso de GPS que conta com: 

- Mapa integrado;
- Marcadores customizados;
- Sistema de Geolocalização.


## 🔋 Stack utilizada

Para esse projeto, utilizamos: 

**Front-end:** React Native, Expo, TypeScript

**Back-end:** Node, Express, Mongoose


## 🔐 Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env

`EXPO_PUBLIC_API_URL` = http://{IP da sua máquina local}:3000


## 🖥️ Rodando localmente

> Certfique-se de já estar rodando o [Backend](https://github.com/netoodev/ShareHeart-Back) do projeto

Clone o projeto

```bash
  git clone https://github.com/netoodev/ShareHeart-App
```

Entre no diretório do projeto

```bash
  cd ShareHeart-App
```

Instale as dependências

```bash
  npm install
```

Inicie o Expo

```bash
  npx expo start
```

