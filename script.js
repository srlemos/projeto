function toggleMode() {
  const html = document.documentElement

  /* método toggle faz a lógica de troca de classe se condição true or false */
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e casaco preto, sem barba e fundo azul."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      "alt",
      'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.'
    )
  }
}
