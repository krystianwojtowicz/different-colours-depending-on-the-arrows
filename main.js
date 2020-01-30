let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {

  switch (e.keyCode) {
    case 38: {
      if (red == 255)
        return;
      document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`
      break;
    }
    case 40: {
      if (red == 0)
        return;
      document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`
      break;
    }
  }

}

window.addEventListener('keydown', changeColor)