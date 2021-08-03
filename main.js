//variaveis
let btn_prev = document.querySelector('.prev')
let btn_next = document.querySelector('.next')
let carrosel_container = document.querySelector('.carrosel-container')
let slider = document.querySelector('.carrosel-slider')
let index = 0

//troque o src para a imagem que queira adicionar no carrosel
let suasImagens = [
  {
    index: 0,
    src: 'https://s.aficionados.com.br/imagens/flash-reverso_f.png'
  },
  {
    index: 1,
    src: 'https://lh3.googleusercontent.com/a0PYMkJZw8bW9_EsCQ7kThJM6piAL1ZK4b6x3yA3oLZ8OSHDADyOw9T6U4Z5TK0UkAHqnl2bdnRXwH5odz8yYwdAuOacAs48SDp7B2L7SZ17nw2MxFNP5QDjuHefYELfd5oi5VIigS5IZEjoqpAcUsNbQQ10AiYfHPd0DrXxe1w6bOITAGbOYsCXw11g9bBR7M0IYb_swtoQj_Gklbe24tIK-JG043x-yon31vjoLTTRn2R01J7XU_jSn856DQtWPXr8V6d1n1dk54NUX59UpdT3Mvd35hYcGtvT3Cp8bjf_SHObiEIjfeLugTt1Zwugb8an7ZLZCRhgYdpsMhKCE97lN734uKMlPYy4bj_lTahIX2snseNW6pH0oSIdot0_MfKQNgDKpF6Bmt63JRjs2fjjz3GfwcLGsSTIo66RhFJea5epKpZ8uNJh_qod5zsZcnNBmnFRVIU49huR_I-MOrwQ7hJwI4DJ-bbNUMeoCVMiqaYT8hM1LJTNFhguBlejiPev9goHQcMO_NAmqwTKN8npBszK9wX93ueyRKoP7dJGgHY54GqZLrlhVC-lg5kvKKAWuow79MgyYaxfJkD8J4wu8-LZb4bVQjr-4zyt4s6mpwOR4SSK26GTL6pPVu1tIT0H-tTEA7HIUpbXikJUWEOYmFT_f59Y5G_trMj6XMkLbarTI9FypDWuCoEX148IHOaNnkPiWM9fXsW0DF3AgI4=w1622-h912-no?authuser=0'
  },

  {
    index: 2,
    src: 'https://img.elo7.com.br/product/original/17B6D07/painel-flash-painel-para-quarto.jpg'
  },
  {
    index: 3,
    src: 'https://img.elo7.com.br/product/zoom/17B6B20/painel-flash-painel-para-quarto.jpg'
  },
  {
    index: 4,
    src: 'https://lh3.googleusercontent.com/VmDI3nc4SBmFqgZy4GLmMQrOrWtF6MiM7ng3KQdt87SBbT0yJFQPI4aZ7qD3aibAJ1P3lxOWBXoRYf9DltpfiqQkV7ZBUAv_35Hd2zYZsBd3sbE70yYrfRs9BKMFJckSaF1pwEaD4rxZ-C6_4sZWe3o7jETj82rJ5fWQaXgeyEdEQOtoxx2MlO1DWHYLvMzYYaqkmQMIXBBMIZWn1oW73B-ovpokk753FVKqhWxL2q6xexnwvYQKUbjlUU35LNR7qgDikp0ouwf3B9uXiDCl8mmyI7_Woip7gCHZ-roB9aPYxkXtP7AXdpUyVw7ftewLGyNQoRnyidblwWJF16HnF3NWmTK8tTtmDVfA-izKGs4sBYu5DZfWf6CelPKbdQUP_ssQauBhrL2cRsW_Z8tRNqU0Bz_tDynlviq1hwNHP4oBgb6d1EnIwbCIXQsOFejv2k0sbpd0DcXxs0NEaa0XnZBkoQ-97XYLh647sHwxDVoWDQr140vHwxAn3CcBLwP0neMTPx_x1HUSXGMJmlCGCFO8cU2OJXp5AXHEqMdb5QR-wp8ZfNBG_oR6Bvbxzz0YT1pY16KjiJsvJ3xhQBqiDvoWqw7aQTEIhSchXELas2ozjBsJ2IBga8thmzHNdh_mWzbtDZE5xOWQdKT8nOsLlTiWN6POpR210n0OHPFfsYW_0BT5ANqU7mGolm4HkByiYFlgwmUN5vUHv4rvxjiUefg=w615-h346-no?authuser=0'
  },
  {
    index: 5,
    src: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/02/legiao_xXWbA8zHCqZt.png.jpeg'
  },
  {
    index: 6,
    src: 'https://img.r7.com/images/flash-21072020152257342?dimensions=660x360&&amp;resize=660x360&amp;crop=1375x750+46+0&amp;resize=660x360&amp;crop=1375x750+46+0'
  }
]

//-------------------------------------------------------

function eventLoaders() {
  //adicionado os eventlisteners aos botoes e chama as funcioes
  // de ir para proxima imagem e a animação dos botoes quando clicado
  btn_next.addEventListener('click', function () {
    goNext()
    clickAnimation(btn_next)
  })
  btn_prev.addEventListener('click', function () {
    goBack()
    clickAnimation(btn_prev)
  })
}

eventLoaders()

function insertImages() {
  suasImagens.forEach(function (img) {
    let html = `<img class="img-item img-item${img.index}" src="${img.src}"/>`
    slider.insertAdjacentHTML('beforeend', html)
  })
}
insertImages()

function goNext() {
  let imgArr = document.querySelectorAll('.img-item')
  //vai pra proxima imagem de acordo com o index
  index++
  if (index <= imgArr.length - 1) {
    //passa o index para a função que pega o tamanho da imagem e seta
    // quantos px o slider deve fazer o translateX
    getWidth(index)
  } else {
    // se o index passado for maior que o da ultima imagem ele seta como 0
    // fazendo assim o width ser o da primeira imagem
    index = 0
    getWidth(0)
  }
}

function goBack() {
  let imgArr = document.querySelectorAll('.img-item')
  index--
  if (index <= imgArr.length - 1) {
    if (index < 0) {
      index = imgArr.length - 1
      getWidth(index)
    }
    getWidth(index)
  }
}

function clickAnimation(btnClicked) {
  //adiciona a classe para fazer a animação no botão correto
  if (btnClicked.classList.contains('next')) {
    btnClicked.classList.toggle('effect_next')
  } else {
    btnClicked.classList.toggle('effect_prev')
  }
}

function getWidth(param) {
  // pega o index passado e seta para pegar a imagem correta
  let image_index = document.querySelector('.img-item' + param)
  //pega a imagem do index passado e verifica o width dela guardando
  //na variavel tamanho_img
  let tamanho_img = window
    .getComputedStyle(image_index, null)
    .getPropertyValue('width')
  // converte o tamanho para numero tirando o px
  let tamanho_number = parseInt(tamanho_img.replace('px', ''))
  // multiplica o tamanho pelo index assim se o tamanho for 400 e for a
  //segunda imagem, vai multiplicar 400 por 2
  let result = tamanho_number * param
  // o resultado da multiplicacao é quando o carrosel deve se mover
  slider.style.transform = `translateX(-${result}px)`
  paintCircle(index)
}

function createCircles() {
  // faz um forEach em todos os elementos do array das imagens e insere
  // os circulos dentro do container de acordo com os index das imagens
  let imgArr = document.querySelectorAll('.img-item')
  let circle_container = document.querySelector('.circle-container')
  imgArr.forEach(function (item, index) {
    console.log(item)
    item.className.split(' ')[1]
    let html = `<div class="circle-item circle_${
      item.className.split(' ')[1]
    }"></div>`
    circle_container.insertAdjacentHTML('beforeend', html)
  })

  //seta um evento de click para cada circulo
  document
    .querySelectorAll('.circle-item')
    .forEach(function (circleBall, index) {
      circleBall.addEventListener('click', function () {
        clickCircle(index)
      })
    })
  //como o carrosel vai sempre carregar na primeira imagem, eu chamo
  //a funcção que pinta as bolinhas, e passo o index da primeira imagem
  paintCircle(0)
}

createCircles()

function clickCircle(param) {
  // pega o index do circle quando é clicado é seta como o index global
  // chamando a função onde será setado o width onde o carrosel deve parar
  let newIndex = param
  index = newIndex
  getWidth(param)
  paintCircle(param)
}

function paintCircle(param) {
  //limpa todos os circulos quando é clicado
  document.querySelectorAll('.circle-item').forEach(function (circle) {
    circle.style.background = 'transparent'
  })
  //seta penas o do index
  document.querySelector('.circle_img-item' + param).style.background =
    'lightgray'
}
