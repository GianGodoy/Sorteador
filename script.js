function buttonDrawer() {
  const left = Math.ceil(document.querySelector('.input-left').value) 
  //Math = para calcular e ceil para arredondar pra cima
  const right = Math.floor(document.querySelector('.input-right').value)
  // floor para arredondar pra baixo

 if (left >= right) {
    alert('O número INICIAL tem quer ser menor que o número FINAL')

  } else {
    const result = Math.floor(Math.random() * (right - left +1)) + left;

    alert(result)
  }

}
