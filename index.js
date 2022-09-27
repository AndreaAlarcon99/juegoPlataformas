const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Fondo
    
const imagenFondo = document.createElement("img")
imagenFondo.setAttribute("src", "imagenes/fondo.jpg")

let imagenFondoX = (canvas.getAttribute("width"))

// Subfondo 1 (estrella)
const imagenSubfondo1 = document.createElement("img")
imagenSubfondo1.setAttribute("src", "imagenes/subfondoEstrella.png")

let subfondo1X = 100
let subfondo1Y = 100


// Subfondo 2 (estrella fugaz)
const imagenSubfondo2 = document.createElement("img")
imagenSubfondo2.setAttribute("src", "imagenes/subfondoEstrellaFugaz.png")

let subfondo2X = 900
let subfondo2Y = -100


// Personaje
  // Parado mirando a la derecha
const standRight = document.createElement("img")
standRight.setAttribute("src", "imagenes/spriteStandRight.png")
  
let personajeX = 200
let personajeY = -250
  
let personajeVelocidadX = 0
let personajeVelocidadY = 0

// Corriendo a la derecha
const runRight = document.createElement("img")
runRight.setAttribute("src", "imagenes/spriteRunRight.png")

// Parado mirando a la izquierda
const standLeft = document.createElement("img")
standLeft.setAttribute("src", "imagenes/spriteStandLeft.png")

// Corriendo a la izquierda
const runLeft = document.createElement("img")
runLeft.setAttribute("src", "imagenes/spriteRunLeft.png")


document.body.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
      personajeVelocidadX = -10
    } else if (e.key == "ArrowRight") {
      personajeVelocidadX = 10
    } else if (e.key == " ") {
      personajeVelocidadY = -15
    }
})
  
document.body.addEventListener("keyup", (e) => {
    if (e.key == "ArrowLeft") {
      personajeVelocidadX = 0
    
    } else if (e.key == "ArrowRight") {
      personajeVelocidadX = 0
    } else if (e.key == " ") {
      personajeVelocidadY -= 0
    }
})


let frames = 0

  // Parado mirando a la izquierda

  // Caminando a la derecha

  // Caminando a la izquierda
 

// Plataforma
class Platform {
    constructor (x, y, width, height) {
      this.x = x
      this.y = y

        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = "imagenes/Grass.png"
    }
    draw () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}



let platforms = [
  new Platform(0, 500, 700, 200),
  new Platform(900, 500, 700, 200),
  new Platform(1900, 350, 100, 400),
  new Platform(2000, 500, 200, 200),
  new Platform(2600, 500, 500, 200),
  new Platform(3400, 500, 100, 200),
  new Platform(3700, 500, 100, 200),
  new Platform(4000, 500, 100, 200),








]
    
 
const gravedad = 0.5


function update() {
  frames++
  
  if (frames > 28) frames = 0
    // Limpiar
    ctx.clearRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))

    // Recalcular posición
    personajeX += personajeVelocidadX
  personajeY += personajeVelocidadY
  
    // Repintar
      // Fondo
    ctx.drawImage(imagenFondo, 0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))
    
    // Subfondo 1 (estrella)
    ctx.drawImage(imagenSubfondo1, subfondo1X, subfondo1Y, 100, 50)
    
    // Subfondo 2 (estrella fugaz)
    ctx.drawImage(imagenSubfondo2, subfondo2X, subfondo2Y, 30, 40)
    
    
    // Personaje
      // Astronauta quieto mirando derecha
    ctx.drawImage(standRight, 177 * frames, 0, 177, 400, personajeX, personajeY, 88, 210)
  
   platforms.forEach(platform => {
        platform.draw()
    });

      // Bordes movimiento personaje
      if (personajeX >= 600) {
        personajeX = 600 
    } else if (personajeX <= 100) {
        personajeX = 100 
      }
  
      // Plataforma que se mueva
  platforms.forEach(platform => {
    if (personajeX == 600) {
      platform.x -= 10
    }
    else if (personajeX == 100) {
      platform.x += 10
    }
  })  
     // Subfondo estrella que se mueva
    if (personajeX == 600) {
         subfondo1X -= 0.5
    }
    else if (personajeX == 100) {
         subfondo1X += 0.5
    }
  
     // Subfondo estrella fugaz que se mueva
  if (personajeX == 600) {
    subfondo2X -= 30
    subfondo2Y +=15
    }
    else if (personajeX == 100) {
    subfondo2X += 0
    subfondo2Y -=0
     }
    
   
    
    if (personajeY + 210 + personajeVelocidadY <= canvas.height)
            personajeVelocidadY += gravedad
    else personajeVelocidadY = 0
    
  
  
     platforms.forEach(platform => {
    if (
        personajeY + 210 <= platform.y && personajeY + 210 + personajeVelocidadY >= platform.y && personajeX + 88 >= platform.x && personajeX <= platform.x + platform.width){
        personajeVelocidadY = 0
    }
})
    // Condición de perder:
  
  
  }

setInterval(update, 20)



