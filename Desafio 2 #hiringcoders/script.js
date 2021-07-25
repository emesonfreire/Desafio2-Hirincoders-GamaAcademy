const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  let nomesobrenome = document.getElementById('nomesobrenome').value
  let endereço = document.getElementById('endereço').value
  let datanascimento = document.getElementById('datanascimento').value
  let cpf = document.getElementById('cpf').value
  let email = document.getElementById('email').value
  let telefone = document.getElementById('telefone').value
  let data = {
    nomesobrenome,
    endereço,
    datanascimento,
    cpf,
    email,
    telefone
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
  console.log(data)
})
