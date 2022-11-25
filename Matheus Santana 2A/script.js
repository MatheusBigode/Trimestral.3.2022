let usuarios = []

const addUsuario = () => {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let divErro = document.querySelector('.div-erro')

    if (email == "" || senha == ""){
        divErro.style.display = 'block'
    } else {
        divErro.style.display = 'none'
    }

    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))

    }
    
    usuarios.push([email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')
    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(usuario => {
            tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> </tr>"
        });

    }else{
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }

    
}