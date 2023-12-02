function receber() {
    let nome = document.getElementById('txtnome')
    let res = document.getElementById('res')

    n = (nome.value)

    if (n == 'Bruna' || n == 'BRUNA' || n == 'bruna') {
        res.innerHTML = `<p><strong>${n}</strong>, quer se casar comigo?</p>`
        var img = document.createElement('img') //criar imagem
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'pedido1.jpg')
        img.classList.add('img-fluid')

    } else {
        res.innerHTML = `Não há convites disponíveis para <strong>${n}</strong>!`
    }
    res.appendChild(img)
}

