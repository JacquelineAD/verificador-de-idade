function verificar() {
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('||ERRO|| Vertifique as informações.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=1 && idade < 5){
                //bebe
                img.setAttribute('src','imagens/bebe-homem.png' )
                document.body.style.background = '#b3daff'

            }else if ( idade <= 10 ){
                //criança
                img.setAttribute('src','imagens/criança-homem.png' )
                document.body.style.background = '#4da9ff'

            }else if ( idade < 21 ){
                //jovem
                img.setAttribute('src','imagens/adolescente-homem.png' )
                document.body.style.background = '#1a90ff'

            }else if ( idade < 50 ){
                //adulto
                img.setAttribute('src','imagens/adulto-homem.png' )
                document.body.style.background = '#0077e6'

            }else{
                //idoso
                img.setAttribute('src','imagens/senhor.png' )
                document.body.style.background = '#005cb3'
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=1 && idade < 5){
                //bebe
                img.setAttribute('src','imagens/bebe-mulher.png' )
                document.body.style.background = '#ffe6ff'

            }else if ( idade <= 10 ){
                //criança
                img.setAttribute('src','imagens/criança-mulher.png' )
                document.body.style.background = '#ff99ff'

            }else if ( idade < 21 ){
                //jovem
                img.setAttribute('src','imagens/adolescente-mulher.png' )
                document.body.style.background = '#ff66ff'

            }else if ( idade < 50 ){
                //adulto
                img.setAttribute('src','imagens/adulto-mulher.png' )
                document.body.style.background = '#ff33ff'

            }else{
                //idoso
                img.setAttribute('src','imagens/senhora.png' )
                document.body.style.background = '#990099'
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}