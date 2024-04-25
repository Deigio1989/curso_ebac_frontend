document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('nome');
    const user = document.querySelector('#user');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo') ;
    const link = document.querySelector('#link');
   

    fetch('https://api.github.com/users/Deigio1989')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            console.log(json);
            nome.innerText = json.name;
            user.innerText = json.login;
            avatar.src = json.avatar_url;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            repositorios.innerText = json.public_repos;
            link.href = json.html_url;

        })

        
})