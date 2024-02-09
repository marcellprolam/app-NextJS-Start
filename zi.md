Manaus, 07 February, 2024
------------------------------------------------------------------------------------------------------------------------------

### nvm-windows
  https://github.com/coreybutler/nvm-windows
  + 19 releases (lado direito, abaixo do icone verde)

  nvm-setup.exe 
    C:\Users\TEMP.SOUZA.000\AppData\Roaming\nvm (instalou no temp, rsrs)
    mudei para: C:\Users\marcell.souza\AppData\Roaming\nvm
    C:\Program Files\nodejs

    # NVM
    nvm --version
    nvm (lista comandos)
    nvm install latest (ultima versao do node) 21.6.1 (64-bit)
    nvm use 21.6.1
    nvm use 18.17.1 (uso bastante)

  ERRO: 
    nvm
    bash: nvm: command not found
  SOLUÇÃO: (nao deu certo)
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v1.1.12/install.sh | bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v1.1.12/install.sh | bash

  Carregar na mão:
  $env:NVM_HOME = "C:\Users\marcell.souza\AppData\Roaming\nvm"  
  Adicionar no path: %NVM_HOME% (sysdm.cpl)
  # Substitua pelo caminho real para o NVM
  . C:\Users\marcell.souza\AppData\Roaming\nvm\nvm.ps1

### Git Windows
  https://git-scm.com/download/win
  64-bit Git for Windows Setup

  node --version
  npm -v (10.2.4) vou deixar essa
  npm install npm@10.1.0

  npx create-next-app@13.4.19 app-nextjs (caso queira escolher a versão @13.4.1)
  npx create-next-app@latest app-nextjs

  Para executar em powershell (***windows fica mais vulnerável)
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted (não executei)
  Continue usando o bash

  Ok to proceed? (y) y
  √ Would you like to use TypeScript? ... No / Yes
  √ Would you like to use ESLint? ... No / Yes
  √ Would you like to use Tailwind CSS? ... No / Yes
  √ Would you like to use `src/` directory? ... No / Yes
  √ Would you like to use App Router? (recommended) ... No / Yes
  √ Would you like to customize the default import alias (@/*)? ... No / Yes

  npm run dev

CSS
https://www.w3schools.com/css/css_navbar.asp

* depois de criar a # api tem dar um reset

* Atualizar os contatos [ ctrl + shit + r ]

SQLite 
https://www.sqlite.org/download.html
  Precompiled Binaries for Windows
  sqlite-tools-win-x64-3450100.zip  (4.77 MiB) 	

  C:\tools
    salsify.exe
    sqlite3.exe
    sqlite3_analyzer.exe

  sysdm.cpl para abrir as configurações do SGBD
  adicionar C:\tools no path (variaveis de ambiente)

  sqlite3
  
    Comandos:

      Entrar: 
        sqlite3 ./data/database.db

      Listar tabelas: 
        .tables

      Lista registros: 
        select * from contatos;

      Lista o schema
        .schema contatos

      Apagar registro: 
        DELETE FROM contatos WHERE id = 24;
      Apagar registro: 
        DELETE FROM contatos WHERE nome = "nome100";
      Apagar registro: 
        DELETE FROM contatos WHERE telefone = "+1 55 98765-98765";
      
      Criar tabela:

*** id int primary key, (nao AUTOINCREMENT)
create table contatos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome text,
  endereco text,
  telefone text
);

adicionar itens:

insert into contatos (id, nome, endereco, telefone) values (1, 'Marcell', 'Rua Brasil', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (2, 'Ana', 'Rua Paris', '+2 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (3, 'Pedro', 'Rua Congo', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (4, 'Hadassa', 'Rua Nova York', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (5, 'Hayla', 'Rua Campinas', '+1 55 38765-98765');
insert into contatos (id, nome, endereco, telefone) values (6, 'João', 'Rua Argentina', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (7, 'Lucas', 'Rua Canadá', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (8, 'Mariana', 'Rua México', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (9, 'Renata', 'Rua Japão', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (10, 'Gabriel', 'Rua Itália', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (11, 'Carla', 'Rua Alemanha', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (12, 'Rafael', 'Rua Espanha', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (13, 'Amanda', 'Rua Suécia', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (14, 'Felipe', 'Rua Noruega', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (15, 'Isabela', 'Rua Dinamarca', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (16, 'Gustavo', 'Rua Holanda', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (17, 'Fernanda', 'Rua Bélgica', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (18, 'Bruno', 'Rua Portugal', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (19, 'Larissa', 'Rua Inglaterra', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (20, 'Guilherme', 'Rua França', '+1 55 98765-98765');

insert into contatos (id, nome, endereco, telefone) values (21, 'Contato 1', 'Rua 1', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (22, 'Contato 2', 'Rua 2', '+2 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (23, 'Contato 3', 'Rua 3', '+1 55 98765-98765');
insert into contatos (id, nome, endereco, telefone) values (24, 'Contato 4', 'Rua 4', '+1 55 98765-98765');

select * from contatos;

Sair: .exit

npm i sqlite3

git init (no inicio do projeto, não esquecer) ***

or create a new repository on the command line 
echo "# nexjs-primeiros-passos" README.md 
git init
git add README.md 
git commit -m "first commit" 
git branch -M main 
git remote add origin https://github.com/pablotdv/nexjs-primeiros-passos.git push -u origin main 


### Manobra tabela A para tabela B

1. Crie uma nova tabela com a estrutura desejada, incluindo a coluna id como autoincrementada:
CREATE TABLE contatos_new (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    endereco TEXT,
    telefone TEXT
);

2. Transfira os dados da tabela antiga para a nova tabela:
INSERT INTO contatos_new (nome, endereco, telefone) SELECT nome, endereco, telefone FROM contatos;

4. Listar a tabela nova (para conferir)
select * from contatos_new;

5. Se todos os dados foram transferidos com sucesso, você pode excluir a tabela antiga:
DROP TABLE contatos;

6. Renomeie a nova tabela para o nome desejado:
ALTER TABLE contatos_new RENAME TO contatos;

7. Listar a tabela nova (para conferir)
select * from contatos;

Manaus, 07 February, 2024

Insomnia

/*
Sucesso: 200 > 299
Erro cliente: 400 > 499
Erro servidor: 500 > 599
*/

### Lista gem de erros https://http.cat
                       https://httpstatusdogs.com



Manaus, 09 February, 2024
------------------------------------------------------------------------------------------------------------------------------

### github

https://github.com/marcellprolam/app-NextJS-Start

…or create a new repository on the command line

echo "# app-NextJS-Start" >> README.md
git init
git add README.md
git commit -m "first commit"

git branch -M main
git branch -M master

git remote add origin https://github.com/marcellprolam/app-NextJS-Start.git
git remote add origin git@github.com:marcellprolam/app-NextJS-Start.git

USEI main
git push -u origin main
git push -u origin master

### ERRO:
git config user.name
git config user.email

git remote -v
git remote remove origin
git remote add origin git@github.com:marcellprolam/app-NextJS-Start.git

Acesso testar:
  ssh -T git@github.com
  Hi souzamarcell! You've successfully authenticated, but GitHub does not provide shell access.

COMANDO: git push --set-upstream origin master
ERRO: remote: Permission to marcellprolam/teste-vscode.git denied to ProlamManaus.
fatal: unable to access 'https://github.com/marcellprolam/teste-vscode.git/': 
The requested URL returned error: 403

solution: Cria a chave novamente.


## Installation
git add .
git status
git branch -m main
git commit -m "party 3"
git push -u origin main


### vercel
https://vercel.com/contact
  fsouza.marcell@gmail.com

 errno: -111,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 3000

    