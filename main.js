// tipos de identificadores em variáveis: string, number e boolean
// para colocar conteúdo no string (texto): obrigatoriamente entre ""
// para para colocar conteúdo no number: digitar sem ""
// para colocar conteúdo no boolean: sem "" e apenas true ou false
// 2 tipos de variáveis: let ou const, let = pode mudar, const = não muda.
// objects permitem que diversas variáveis sejam agrupadas em uma só (object).
// estrutura: let/const variavel = {
// variável 1:
// variável 2:
// variável 3:
// }
// para chamar algo específico dentro do object: nome do object.nome do algo específico ex: links.instagram ou links.facebook ou links.twitter.

const LinksSocialMedia = {
  github: 'vitorvitorino',
  youtube: 'UCCwthezvMgM-yjpUW2UKKjg',
  facebook: '',
  instagram: 'vitor.ooli',
  twitter: 'vitorolvr_'
}

// estrutura para criar uma function: function + identificação da function + () + {} ex: function showMeSomething(){}
// para programar o que a função faz: definir dentro dos {}, e depois, toda vez que showMeSomething() for chamado, o script dentro de {} será realizado
// boas práticas na nomeação de variáveis: camelCase, PascalCase e snake_case: camelCase = vitorOliveira. PascalCase = VitorOliveira. snake_case = vitor_oliveira.

function changeSocialMediaLinks() {
  // Caso o getElement não fosse por Id, para alterar o conteúdo, poderia ser feito dessa maneira:
  //document.getElementByClassName('userName').textContent = 'Vitxin'
  // isso tudo fazendo uso do DOM (Document Object Model)
  // é possível chamar a Id diretamente ex: userName.textContent = 'Vitxin'
  // for() = laço de repetição, vai ficar repetindo até ser instruido para parar por meio de um controlador.
  //ex: for (let i = 0; i <= 10; i++){}. obrigatoriamente tem que ter 3 argumentos dentro do () e ser let pois o valor vai ser alterado a cada repetição. i = 0 indica que o valor de i no começo da repetição é = 0, i <= 10; indica que enquanto i for < ou = a 10 o for vai continuar rodando, i++ é um incremento, significando que toda vez que i++ for executado i vai ser adicionado de 1, no caso i++ = i + 1.
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      linkGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
