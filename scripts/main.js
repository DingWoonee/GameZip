window.addEventListener('load', function() {
    let gameElemArray = document.querySelector('.container').children;
    console.log(gameElemArray[0]);
    
    for(var i = 0; i < gameElemArray.length; i++) {
        
    }
});

function goGame(mainElem, gameElem) {
    mainElem.style.display = 'none';
    gameElem.style.display = 'block';
}
function goMain(gameElem, mainElem) {
    gameElem.style.display = 'none';
    mainElem.style.display = 'grid';
}