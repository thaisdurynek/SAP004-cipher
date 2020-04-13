# Join The Resistance!
A comunicação entre os membros da Aliança Rebelde é sigilosa e seus planos não podem, em hipótese alguma, ser descobertos pelo Império. Portanto, as mensagens precisam ser codificadas ou decodificadas através de uma chave numérica confidencial. 
>Que a força esteja com você!

## Índice
*[1. Introdução](#1-introdução)
*[2. Objetivo](#2-objetivo)
*[3. Usuário](#3-usuário)
*[4. Como Utilizar?](#4-como-utilizar)
*[5. Estrutura](#5-estrutura)
*[6. Instruções Técnicas](#6-instruções-técnicas)
*[7. Autoria](#7-autoria)
***

## 1. Introdução
Essa aplicação foi desenvolvida com HTML, CSS e JavaScript. O objetivo do projeto é cifrar e decifrar textos utilizando a Cifra de César, que é um tipo de cifragem por substituição. Esse método consiste em trocar cada letra do alfabeto por outra movendo as letras em um número fixo. Por exemplo, o A com a chave de deslocamento 2 seria substituído por C. A palavra AMOR deslocada em 3 letras ficaria DPRU. A partir dessa técnica, foi possível desenvolver uma aplicação para mandar mensagens secretas ou decifrar mensagens para fins de diversão. O tema escolhido para o layout e enredo foi Star Wars.

## 2. Objetivo
Cifrar ou decifrar textos utilizando um número de deslocamento. Ambos inputs fornecidos pelo usuário. 

## 3. Usuário
Pessoas que desejam cifrar ou decifrar mensagens para diversão. 

## 4. Como utilizar?
O projeto pode ser acessado através do GitHub Pages [aqui](https://thaisdurynek.github.io/SAP004-cipher/src/). Na tela há um espaço para preencher com a mensagem que se deseja cifrar/decifrar e um espaço para preencher com a chave de deslocamento desejada. 
_Importante!_
É necessário preencher o espaço da mensagem a ser codificada. Pode-se utilizar letras maiúsculas, minúsculas e caracteres especiais. No espaço da chave de deslocamento é necessário preencher com números maiores do que 0. Números decimais serão convertidos a inteiros. No caso dos valores não serem preenchidos corretamente, haverá uma mensagem de TypeError no console.

## 5. Estrutura
O projeto está estruturado da seguinte maneira:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── stormtroopers.jpg
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

Os arquivos contém as configurações de estilo de JavaScript e HTML, bem como as configurações para executar os testes e até mesmo as instruções no README.md. A estrutura básica foi obtida através de um fork do projeto da laboratória. 

Dentro do src estão os arquivos mais importantes do projeto. O index.html é responsável pela estrutura básica. O style.css é responsável pelo layout da página. O index.js é responsável pela interação entre o HTML e o cipher.js. O cipher.js é responsável pela parte lógica, tendo uma função de cifrar (encode) e decifrar (decode). A imagem .jpg foi utilizada como plano de fundo (Photo by Brian McGowan on Unsplash).

## 6. Instruções técnicas
Antes de qualquer coisa, é importante ter um editor de texto, o UNIX Shell, o git e o Node.js instalados.

- Faça um _[fork]_(https://help.github.com/articles/fork-a-repo/) deste repositório e depois _[Clone]_(https://help.github.com/articles/cloning-a-repository/), criando um repositório local. 
- Utilize o comando `npm install` no terminal para instalar as dependências. Lembre-se que os comandos serão corretamente executados apenas se você estiver dentro do arquivo certo no terminal.
- Para abrir o projeto no navegador utilize o `npm start` e abra com a url indicada (geralmente http://localhost:5000).
- Para executar os testes utilize o `npm run test`.
- Para fazer um commit no repositório local utilize o `git commit -m 'comentário'`. Lembre-se de utilizar, antes do git commit, o `git status` para verificar se existem arquivos que precisam de commit e o `git add .` para adicionar os arquivos a serem commitados. Dicas de como usar o git [aqui](https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro).
- Para adicionar seus commits ao repositório remoto utilize o `git push origin master`.

## 7. Autoria
[Thais Durynek](https://github.com/thaisdurynek) com base no projeto SAP004-cipher da [Laboratoria](https://github.com/Laboratoria/)
Contato: thais.durynek@gmail.com


