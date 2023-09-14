function toggleMode() {
    const html=document.documentElement;
    
    // aqui fizemos a função toogle debaixos dos panos
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // }else
    // {
    //     html.classList.add('light');
    // }
    
    //faz a verificação se exite class remove senão add a class
    html.classList.toggle('light'); 
    

    // pegar a tag img e subistituir 
    const image = document.querySelector('#profile img');
    if (html.classList.contains('light')) {
        // se tiver a class light colocar outra imagem
        image.setAttribute('src','./assets/avatar-light-miro.png');
        image.setAttribute('alt','Foto de Francisco na mentoria da open-source Angola');
    }else
    {
        // senão tiver a class manter a imagem 
        image.setAttribute('src', './assets/avatar-miro.png');
        image.setAttribute('alt','foto de Francisco usando o preto');
    }
}