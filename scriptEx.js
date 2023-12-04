function receber() {
    let nome = document.getElementById('txtnome')
    let res = document.getElementById('res')
    let dataAceite = new Date('2023-12-03')
    let dataAtual = new Date()
    let diferencaMilisegundos = dataAtual - dataAceite
    let diferencaDias = Math.floor(diferencaMilisegundos / (1000 * 60 * 60 * 24))
    n = (nome.value)

    if (n == 'Bruna' || n == 'BRUNA' || n == 'bruna' || n == 'Bruna ') {
        res.innerHTML = `<p><strong>${n}</strong>, quer se casar comigo?</p>`
        var img = document.createElement('img') //criar imagem
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'pedido1.jpg')
        img.classList.add('img-fluid')

    } else {
        res.innerHTML = `Não há convites disponíveis para <strong>${n}</strong>!`
    }
    res.appendChild(img)
    document.getElementById('diferencaDias').innerText = `Hoje faz ${diferencaDias} dias`
}

