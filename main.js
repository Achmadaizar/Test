const htm = document.getElementById('htm')
const pth = document.getElementById('pth')
const body = document.body 
const container = document.getElementById('bg')
const tulisan = document.getElementById('t')


function hitam() {
  body.style.background = 'black'
  container.style.background = 'black'
  container.style.border = '5px solid white'
  tulisan.style.color = 'white'
  htm.style.background = 'black'
  htm.style.color = 'white'
  htm.style.border = '2px solid white'
  pth.style.background = 'black'
  pth.style.color = 'white'
  pth.style.border = '2px solid white'
  
    // Tab to edit
  }
  
function putih() {
  body.style.background = 'white'
  container.style.background = 'white'
  container.style.border = '5px solid black'
  tulisan.style.color = 'black'
  pth.style.background = 'white'
  pth.style.color = 'black'
  pth.style.border = '2px solid black'
  htm.style.background = 'white'
  htm.style.color = 'black'
  htm.style.border = '2px solid black'
  
    // Tab to edit
  }
