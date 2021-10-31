if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('qoute-content').setAttribute('style', '');
    document.getElementById('footer-navigation').setAttribute('style', 'flex-direction: column;');

    document.getElementById('footer-image').classList.add('d-block');
    document.getElementById('footer-image').classList.add('mx-atuo');

    /* Iz nekog razloga nisam mogao namjestit css media querie pa sam izabrao ovu opciju, nije idealno ali radi :)*/
}else{
    document.getElementById('qoute-content').setAttribute('style', 'display:flex;');
    document.getElementById('footer-navigation').setAttribute('style', 'flex-direction: row;');

    document.getElementById('footer-image').classList.remove('d-block');
    document.getElementById('footer-image').classList.remove('mx-atuo');

}