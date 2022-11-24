$("button.icon-btn").hover(function(){
    $("#heart-emoji").fadeOut(200, function(){
        $("#teamo").fadeIn()
    })
}, function(){
    $("#teamo").fadeOut(200, ()=>{
        $("#heart-emoji").fadeIn()
    })
})

var i = 0, j = 0;
var txt1 = 'Feliz dia das mães, minha mãe'; /* The text */
var txt2 = 'Seu filho te ama MUITO!'
var speed = 140; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("writer1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }else{
      setTimeout(function(){
        typeWriter2()
      }, 500)
  }
}

function typeWriter2(){
    if (j < txt2.length) {
        document.getElementById("writer2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }else{
        setTimeout(function(){
            $("#feliz-dia").fadeOut(300, function(){
                setTimeout(function(){
                    $("#main-view").fadeIn(400, function(){
                        animatePhotos()
                    })
                }, 400)
            })
        }, 1000)
      }
}

typeWriter1()


$(document).ready(function (){
    $("button.add-btn").click(function (){
        $("#paragrafo-part").css('display', 'block')
        $('html, body').animate({
            scrollTop: $("#paragrafo-part").offset().top
        }, 1000);
    });
});

function animatePhotos(){
    let photos = [
        "images/chile_resta.jpeg",
        "images/jardim_botanico.jpeg",
        "images/mae_neve.jpeg",
        "images/profile_mom.jpeg",
        "images/rio_vermelho.jpeg",
        'images/rasta.jpeg',
        'images/eu_bebe.jpeg',
        'images/mama_angel.jpeg',
        'images/foto2016.jpeg',
        "images/chile_jardim.jpeg",
        "images/linda_foto_pequeno.jpeg",
        "images/dente_bugado_pequeno.jpeg",
        "images/jantando_com_meus_avos.jpeg",
        "images/careca.jpeg",
        "images/ano_novo.jpeg",
    ]
    var y = 5
    var x = 0
    function loopPhotos(){
        if(x < photos.length){
            $(`.main-nav li.item${y} .bg`).css(
                'opacity',
                1
            )
            $(".main-nav li.item" + y + " .bg").css(
                'background',
                `url(${photos[x]})`
            )
            setTimeout(function(){
                $(`.main-nav li.item${y} .bg`).css(
                    'opacity',
                    0.5
                )
                y--
                if(y == 0){
                    y = 5
                }
                x++
                loopPhotos()
            }, 200)
        }else{
            var t = 5
            var ite = 0
            var is_backwards = true
            function animate(){
                if(ite < 2){
                    if(t <= 5 && t >= 1){
                        $(`.main-nav li.item${t} .bg`).css(
                            'opacity',
                            1
                        )
                        setTimeout(function(){
                            $(`.main-nav li.item${t} .bg`).css(
                                'opacity',
                                0.5
                            )
                            t = t + (is_backwards ? -1 : 1)
                            animate()
                        }, 300)
                    }else{
                        t = t + (!is_backwards ? -1 : 1)
                        is_backwards = !is_backwards
                        ite++
                        animate()
                    }
                }else{
                    $('button.icon-btn').css('display', 'block')
                    $('button.icon-btn').addClass("animate__fadeInDown")
                    setTimeout(function(){
                        $('button.icon-btn').removeClass("animate__fadeInDown")
                        $('button.icon-btn').removeClass("animate__animated")
                        $('button.icon-btn').addClass('pulse')
                    }, 1500)
                }
            }
            animate()
        }
    }
    loopPhotos()
}