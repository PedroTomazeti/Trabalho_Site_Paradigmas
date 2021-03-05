let butmenu = document.querySelector(".butmenu");
let imagem = document.querySelector(".imagem");
let statmenu= false;

imagem.style.marginLeft ="-140%";

function menuToggle(){
    if(statmenu == false){
        imagem.style.marginLeft ="auto";
        statmenu = true;
    }
    else if(statmenu == true){
        imagem.style.marginLeft ="-140%";
        statmenu = false;
    }
}
butmenu.onclick = menuToggle;