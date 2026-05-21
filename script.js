function buttonDrawer() {
  const left = Math.ceil(document.querySelector('.input-left').value) 
  //Math = para calcular e ceil para arredondar pra cima
  const right = Math.floor(document.querySelector('.input-right').value)
  // floor para arredondar pra baixo

  const result = Math.floor(Math.random() * (right - left) + left);

  alert(result)
}
