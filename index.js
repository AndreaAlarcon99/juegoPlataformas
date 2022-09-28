// Crear el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// // Crear pantalla de inicio
const redesSociales = document.getElementById("socials")
const pantallaInicio = document.getElementById("game-intro")

document.getElementById("start-button").onclick = () => {
  gameIntro();
  startGame();
  setInterval(updateCountdown, 1000)
}

function gameIntro() {
  pantallaInicio.remove()
  redesSociales.remove()
  
}

let intervalId;


function startGame() {
  intervalId = setInterval(update, 20)
}


// Crear pantalla game over
const gameoverDiv = document.getElementById("game-over-div");
const restartButton = document.getElementById("restart-button");
const tituloGameover = document.getElementById("titulo-gameover");


// Crear contador tiempo
const countDownEl = document.getElementById("countdown")

const startingMinutes = 02;
let time = startingMinutes * 60


function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    countDownEl.innerHTML = `${minutes}:${seconds}`
    time--
}

// Crear contador score
let scoreShow = document.querySelector("#score span")
let score = 0




// Crear fondo  del juego
const imagenFondo = document.createElement("img")
imagenFondo.setAttribute("src", "imagenes/fondo.png")

let imagenFondoX = (canvas.getAttribute("width"))

// Subfondo estrellas
// const imagenEstrellas = document.createElement("img")
// imagenEstrellas.setAttribute("src", "imagenes/estrellas.png")

// let estrellasX = 500
// let estrellaY = 0

// Crear subfondo planeta
const imagenPlaneta = document.createElement("img")
imagenPlaneta.setAttribute("src", "imagenes/planeta.png")

let planetaX = 1000
let planetaY = 50

// Crear subfondo planeta rosa
const imagenPlanetaRosa = document.createElement("img")
imagenPlanetaRosa.setAttribute("src", "imagenes/planetatierra.png")

let planetaRosaX = 1500
let planetaRosaY = 10




// Crear subfondo 2 (estrella fugaz)
const imagenSubfondo2 = document.createElement("img")
imagenSubfondo2.setAttribute("src", "imagenes/subfondoEstrellaFugaz.png")

let subfondo2X = 900
let subfondo2Y = -100


// Creación del personaje

class Jugador {
  constructor() {
    this.x = 200
    this.y = -250

    this.width = 88
    this.height = 210

    this.velocidadX = 0
    this.velocidadY = 0

    this.image = new Image()
    this.image.src = "imagenes/spriteStandRight.png"
  }
  draw () {
        ctx.drawImage(this.image, 177 * frames, 0, 177, 400, this.x, this.y, this.width, this.height)
    }
}

let jugador = new Jugador()
 

// Movimientos del personaje
document.body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    jugador.velocidadX = -10
  }
  
  else if (e.key == "ArrowRight") {
    jugador.velocidadX = 10
  } else if (e.key == " ") {
    jugador.velocidadY = -15
  }
})

document.body.addEventListener("keyup", (e) => {
  if (e.key == "ArrowLeft") {
    jugador.velocidadX = 0
    
  } else if (e.key == "ArrowRight") {
    jugador.velocidadX = 0
  } else if (e.key == " ") {
    jugador.velocidadY -= 0
  }
})

const gravedad = 0.5
let frames = 0

// Crear obstáculo meteorito
class Meteorito {
    constructor (x) {
      this.x = x
      this.y = -400

      this.width = 200
      this.height = 200

      this.image = new Image()
      this.image.src = "imagenes/meteorite.png"
    }
  
    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

let meteoritos = [
  new Meteorito(700),
  new Meteorito(1000),
  new Meteorito(1500)
]

// Creación de las plataformas
class Platform {
    constructor (x, y, width, height) {
      this.x = x
      this.y = y

        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = "imagenes/plataforma1.png"
    }
    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


let platforms = [
  new Platform(-250, 600, 650, 160),
  new Platform(2500, 600, 800, 160),
  new Platform(3800, 600, 650, 160),
  new Platform(7800, 600, 500, 160),
  new Platform(8700, 600, 500, 160),
  new Platform(1330, 600, 500, 160),
  new Platform(13700, 600, 500, 160),
  new Platform(14600, 620, 400, 140),
  new Platform(18200, 600, 500, 160),
  new Platform(19350, 600, 600, 160),





]

// Plataforma alta
class Platform2 {
    constructor (x, y, width, height) {
      this.x = x
      this.y = y

        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = "imagenes/plataforma2.png"
    }
    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

let platforms2 = [
  new Platform2(800, 450, 200, 300),
  // new Platform2(1600, 450, 200, 300),
  new Platform2(4300, 450, 200, 300),
  new Platform2(4900, 300, 200, 300),
  new Platform2(5800, 400, 80, 130),
  new Platform2(6400, 300, 80, 130),
  new Platform2(7200, 400, 80, 130),
  new Platform2(9600, 400, 150, 200),
  new Platform2(10200, 500, 150, 200),
  new Platform2(10900, 400, 150, 200),
  new Platform2(11500, 300, 150, 200),
  new Platform2(12000, 200, 150, 200),
  new Platform2(12700, 200, 150, 200),
  //next
  new Platform2(15500, 600, 90, 150),
  new Platform2(16000, 550, 90, 150),
  new Platform2(16500, 480, 90, 150),
  new Platform2(17000, 370, 90, 150),
  new Platform2(17500, 290, 90, 150),

 






]

// Creación de aliens que dan puntos
let puntos = 0

class Alien {
    constructor (x, y) {
      this.x = x
      this.y = y

        this.width = 160
      this.height = 145
      
      this.direccion = "down"

        this.image = new Image()
        this.image.src = "imagenes/alienconovni.png"
    }
    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
  colision() {
    if (!(((jugador.x + jugador.width) < this.x) || ((canvas.height - jugador.height) > (this.y + this.height)) || (jugador.x > (this.x + this.width)) || ((canvas.height - jugador.height) < this.y))) {
      score += 1
      
      scoreShow.innerHTML = score
    } 
  }
}

let aliens = [
  new Alien(500, 0),
  new Alien(1800, 0),
  new Alien(2050, 300),
  new Alien(2300, 700),
  new Alien(3400, 700),
  new Alien(4600, 0),
  new Alien(5300, 0),
  new Alien(6000, 0),
  new Alien(6600, 300),
  new Alien(6900, 700),
  new Alien(7500, 0),
  new Alien(8450, 0),
  new Alien(9300, 0),
  new Alien(9900, 700),
  new Alien(10400, 0),
  new Alien(10700, 700),
  new Alien(11200, 0),
  new Alien(11750, 0),
  new Alien(12350, 300),
  new Alien(13000, 0),
  new Alien(13300, 700),
  new Alien(15200, 0),
  new Alien(16200, 0),
  new Alien(16700, 0),
  new Alien(17800, 0),
  new Alien(18900, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),
  new Alien(0, 0),



]
    
// let intervalId;

// Función update para ir actualizando

function update() {
  // Para sprite del personaje
  frames++
   
  if (frames > 28) frames = 0

  // Limpiar
  ctx.clearRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))

  // Recalcular posición del personaje
  jugador.x += jugador.velocidadX
  jugador.y += jugador.velocidadY
  
  // Repintar

  // Fondo
  ctx.drawImage(imagenFondo, 0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))
  
  // // Subfondo estrella
  // ctx.drawImage(imagenEstrellas, estrellasX, estrellaY, 1300, 400)
    
  // Subfondo planeta
  ctx.drawImage(imagenPlaneta, planetaX, planetaY, 200, 200)

  // Subfondo planeta rosa
  ctx.drawImage(imagenPlanetaRosa, planetaRosaX, planetaRosaY, 180, 150)


    
  // Subfondo 2 (estrella fugaz)
  ctx.drawImage(imagenSubfondo2, subfondo2X, subfondo2Y, 30, 40)
  
  // Meteorito
  meteoritos.forEach(meteorito => {
    meteorito.draw()
  })
  
  // Personaje
  jugador.draw()
  

  

  // Plataformas
  platforms.forEach(platform => {
    platform.draw()
  });

  platforms2.forEach(platform => {
    platform.draw()
  });
  
  // Aliens
  aliens.forEach(alien => {
    alien.draw()
  });

  

  // Bordes movimiento personaje
  if (jugador.x >= 600) {
    jugador.x = 600
  } else if (jugador.x <= 100) {
    jugador.x = 100
  }
  
  // Meteorito movimiento
  
  // meteoritos.forEach(meteorito => {
  //   if (jugador.x == meteorito.x - 100) {
  //   meteorito.y += 20
  // }
  // })

   
  

  
  // Plataforma movimiento
  platforms.forEach(platform => {
    if (jugador.x == 600) {
      platform.x -= 10
    }
    else if (jugador.x == 100) {
      platform.x += 10
    }
  })

  platforms2.forEach(platform2 => {
    if (jugador.x == 600) {
      platform2.x -= 10
    }
    else if (jugador.x == 100) {
      platform2.x += 10
    }
  })

  // Aliens movimiento

   aliens.forEach(alien => {
    alien.colision()
   });
  
  aliens.forEach(alien => {
  
    if (jugador.x == 600) {
      alien.x -= 10
    } else if (jugador.x == 100) {
      alien.x +=10
    }
  })

  aliens.forEach(alien => {
    if (alien.direccion == "down") {
      alien.y+= 5
      if (alien.y >= 600) {
        alien.direccion = "up"
      }
    } else {
      alien.y-=5
      if (alien.y == 100) {
        alien.direccion = "down"
      }
    }
    
})

  

  // aliens.forEach(alien => {
  //   if (jugador.x  >= alien.x) {
  //     alien.y -= 50
  //   }
  // })
  
  // // Movimiento subfondo estrella

  // if (jugador.x == 600) {
  //   estrellasX -= 0.2
  // }

  // Movimiento subfondo planeta

  if (jugador.x == 600) {
    planetaX -= 0.5
  }

  // Movimiento subfondo planeta rosa
  if (jugador.x == 600) {
    planetaRosaX -= 0.5
  }
    
  
  // Subfondo estrella fugaz movimiento
  if (jugador.x == 600) {
    subfondo2X -= 30
    subfondo2Y += 15
  }
  else if (jugador.x == 100) {
    subfondo2X += 0
    subfondo2Y -= 0
  }
    
   
  // Creación de la gravedad
  if (jugador.y + 210 + jugador.velocidadY <= canvas.height)
    jugador.velocidadY += gravedad
  else jugador.velocidadY = 0
    
  
  // Creación para saltar encima de las plataformas
  platforms.forEach(platform => {
    if (
      jugador.y + 210 <= platform.y && jugador.y + 210 + jugador.velocidadY >= platform.y && jugador.x + 88 >= platform.x && jugador.x <= platform.x + platform.width) {
      jugador.velocidadY = 0
    }
  })
  
  platforms2.forEach(platform2 => {
    if (
      jugador.y + 210 <= platform2.y && jugador.y + 210 + jugador.velocidadY >= platform2.y && jugador.x + 88 >= platform2.x && jugador.x <= platform2.x + platform2.width) {
      jugador.velocidadY = 0
    }
  })
  
  //   // Condición de perder:
  if (jugador.y >= canvas.height - jugador.height) {
    gameoverDiv.classList.remove("hidden");
    canvas.classList.add("hidden");
    restartButton.classList.remove("hidden");
    tituloGameover.classList.remove("titulo-gameover")
    countDownEl.remove()

  }
  if (time == 0) {
    gameoverDiv.classList.remove("hidden");
    canvas.classList.add("hidden");
    restartButton.classList.remove("hidden");
    tituloGameover.classList.remove("titulo-gameover")
    countDownEl.remove()
    
  
  }
}
