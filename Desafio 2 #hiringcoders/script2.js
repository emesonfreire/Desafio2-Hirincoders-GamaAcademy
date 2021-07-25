const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = document.getElementById('nome').value
  let descricao = document.getElementById('descricao').value
  let familiaolfativa = document.getElementById('familiaolfativa').value
  let volume = document.getElementById('volume').value
  let preco = document.getElementById('preco').value
  let fragancia = document.getElementById('fragancia').value
  let data = {
    nome,
    descricao,
    familiaolfativa,
    volume,
    preco,
    fragancia
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
  console.log(data)
})
