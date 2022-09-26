const canvas = document.getElementById("canvas")
 const contexto = canvas.getContext("2d")
   
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

let frames = 0

  // Parado mirando a la izquierda

  // Caminando a la derecha

  // Caminando a la izquierda
 

// Plataforma

// const imagenPlataforma = document.createElement("img")
// imagenPlataforma.setAttribute("src", "imagenes/plataforma.png")

let plataformaX = 600
let plataformaY = 500

  
const gravedad = 0.5


function update() {
  frames++
  
  if (frames > 28) frames = 0
    // Limpiar
    contexto.clearRect(0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))

    // Recalcular posición
    personajeX += personajeVelocidadX
    personajeY += personajeVelocidadY

      // Bordes movimiento personaje
      if (personajeX >= 500) {
        personajeX = 500 
    } else if (personajeX <= 100) {
        personajeX = 100 
      }
  
      // Plataforma que se mueva
     if (personajeX == 500) {
         plataformaX -= 5
    }
    else if (personajeX == 100) {
         plataformaX += 5 
     }
  
     // Subfondo estrella que se mueva
    if (personajeX == 500) {
         subfondo1X -= 0.5
    }
    else if (personajeX == 100) {
         subfondo1X += 0.5
    }
  
     // Subfondo estrella fugaz que se mueva
  if (personajeX == 500) {
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
    
     if (personajeY + 210 <= plataformaY && personajeY + 210 + personajeVelocidadY >= plataformaY && personajeX + 88 >= plataformaX && personajeX <= plataformaX + 200) {
            personajeVelocidadY = 0
        }
    
    
      
    // Repintar
      // Fondo
    contexto.drawImage(imagenFondo, 0, 0, canvas.getAttribute("width"), canvas.getAttribute("height"))

    // Subfondo 1 (estrella)
    contexto.drawImage(imagenSubfondo1, subfondo1X, subfondo1Y, 100, 50)
  
    // Subfondo 2 (estrella fugaz)
  contexto.drawImage(imagenSubfondo2, subfondo2X, subfondo2Y, 30, 40)
  
   
  
    // Personaje
      // Astronauta quieto mirando derecha
    contexto.drawImage(standRight, 177 * frames, 0, 177, 400, personajeX, personajeY, 88, 210)

    // Plataforma
    contexto.fillStyle = "blue"
    contexto.fillRect(plataformaX, plataformaY, 300, 50)
    // contexto.drawImage(imagenPlataforma, plataformaX, plataformaY, 200, 50)
    
  }

setInterval(update, 20)



document.body.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
      personajeVelocidadX = -5
    } else if (e.key == "ArrowRight") {
      personajeVelocidadX = 5
    } else if (e.key == " ") {
      personajeVelocidadY = -15
    }
})
  
document.body.addEventListener("keyup", (e) => {
    if (e.key == "ArrowLeft") {
      personajeVelocidadX = 0
    
    } else if (e.key == "ArrowRight") {
      personajeVelocidadX = 0
    }
})


