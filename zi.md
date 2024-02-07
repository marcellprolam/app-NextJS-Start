Manaus, 07 February, 2024

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




