window.onload = ()=>{

var buttonMenu = document.querySelector('.menu-mobile');
    var menu = document.querySelector('.menu-mobile  ul');
    var clicou = false;


        buttonMenu.addEventListener('click',()=>{

            if(clicou == false){
                menu.style.transition = '0.5s';
                menu.style.opacity = '1';       
                clicou = true;
                
            }
            else{
                menu.style.transition = '0.5s';  
                menu.style.opacity = '0';
                clicou = false;
            }
        });

    var button1 = document.querySelector('.bullet-01');
    var button2 = document.querySelector('.bullet-02');
    var button3 = document.querySelector('.bullet-03');
        
    button1.addEventListener('click', selecionarBullet01);
    button2.addEventListener('click', selecionarBullet02);
    button3.addEventListener('click', selecionarBullet03);

    var corButton1 = getComputedStyle(button1).backgroundColor;
    var corButton2 = getComputedStyle(button2).backgroundColor;
    var corButton3 = getComputedStyle(button3).backgroundColor;


    function selecionarBullet01(){
        if (corButton1 == 'rgb(161, 161, 161)') {
            button1.style.backgroundColor = '#000000';
            button2.style.backgroundColor = '#a1a1a1';
            button3.style.backgroundColor = '#a1a1a1';
        }
        else{
            button1.style.backgroundColor = '#000000';
            button2.style.backgroundColor = '#a1a1a1';
            button3.style.backgroundColor = '#a1a1a1';
        }
    }


    function selecionarBullet02(){    
    if (corButton2 == 'rgb(161, 161, 161)') {
            button2.style.backgroundColor = '#000000';
            button1.style.backgroundColor = '#a1a1a1';
            button3.style.backgroundColor = '#a1a1a1';

    }        
    }

    function selecionarBullet03(){
        if(corButton3 == 'rgb(161, 161, 161)'){
            button3.style.backgroundColor = '#000000';
            button1.style.backgroundColor = '#a1a1a1';
            button2.style.backgroundColor = '#a1a1a1';
        }
    }

    var map;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-27.648598, -48.577423),
            scrollWheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    initialize();

}    