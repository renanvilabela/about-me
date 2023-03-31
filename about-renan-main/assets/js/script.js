import Array from './contentHobby.json' assert {type:'json'}
const section = document.querySelector("section")
const iconNext = document.querySelector("ion-icon")

// componente  About me
function showAboutMeElement(element) {
    iconNext.style.display = 'block'
    element.innerHTML = `
        <div class="container-about-me">
            <div class="box-description bg-box">
                <h2>Renan</h2>
                <ul>
                    <li>
                        <h4>Idade : <span> 19 anos </span></h4>
                    </li>
                    <li>
                        <h4>Faculdade : <span> Análise de Desenvolvimento de Sistemas </span></h4>
                    </li>
                    <li>
                        <h4>Trabalho : <span> Desenvolvedor Frontend </span></h4>
                    </li>
                </ul>
            </div>
            <div class="box-description bg-box">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, nunc a sagittis sodales, mi sapien dapibus augue, eu aliquam quam velit eu tellus. Phasellus mollis libero quis nisl sagittis, nec interdum lorem fringilla. Mauris ex est, gravida quis libero vel, rhoncus hendrerit massa. Proin a velit varius, mollis enim nec, varius ante. Vestibulum gravida.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat.
                </p>
            </div>
        </div>
        <div class="container-images">
            <div class="box-image bg-box">
                <img src="./assets/images/image-bg-1.avif" alt="">
            </div>
            <div class="box-image bg-box">
                <img src="./assets/images/image-bg-2.avif" alt="">
            </div>
        </div>
    `
}

// componente home hobby
function showSectionHomehobby(element){
    iconNext.style.display = 'none'
    element.innerHTML = `
       <div class="container-hobby">
            <div class="title-section">
                <p>Entretenimentos</p>
            </div>
            <div class="container-boxes-links">
                <div class="boxe">
                    <div class="box-link bg-box">Filmes</div>
                    <div class="box-link bg-box">Jogos</div>
                </div>
                <div class="boxe">
                    <div class="box-link bg-box">Animes</div>
                    <div class="box-link bg-box">Álbuns</div>
                </div>
            </div>
        </div>
    `
}

// componente linsta hobby
function showHobbylist(element,array){
    iconNext.style.display = 'none'
    element.innerHTML = `
        <div class="container-hobby">
            <div class="title-hobby">
                <h2>${array.title}</h2>
            </div>
            <div class="box-images-hobby">
                <ul>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[0].img}" width="100" height="100" alt=""></li>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[1].img}" width="100" height="100" alt=""></li>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[2].img}" width="100" height="100" alt=""></li>
                </ul>
                <ul>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[3].img}" width="100" height="100" alt=""></li>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[4].img}" width="100" height="100" alt=""></li>
                    <li><img src="./assets/images/${array.hobby_type}/${array.images[5].img}" width="100" height="100" alt=""></li>
                </ul>
            </div>
        </div>
    `
}

// direciona para próxima página
iconNext.addEventListener('click', function(){
    showSectionHomehobby(section)
    const boxLink = document.querySelectorAll('.box-link')
    for(let i = 0 ; i < boxLink.length; i++){
        boxLink[i].addEventListener('click', function(){
            showHobbylist(section,Array[i])
        })
    }
})

// direciona para página inicial
const homePage = document.querySelector("#home-page")
homePage.addEventListener('click', function(){
    showAboutMeElement(section)
})

showAboutMeElement(section)
