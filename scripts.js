
const txt = 'Do you want to be my girlfriend?'; /* The text */
const speed = 188; /* The speed/duration of the effect in milliseconds */
function typeWriter(i) {
  if (i < txt.length) {
    document.getElementById("writer").innerHTML += txt.charAt(i);
    setTimeout(() => typeWriter(++i), speed);
  }else{
      setTimeout(function(){
        $('button.icon-btn').css('display', 'block')
        $('button.icon-btn').addClass("animate__fadeInDown")
      }, 500)
  }
}

$(document).ready(function (){
    $('#no-button').click(function (){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Try again.',
            footer: '<i>Are you serious?</i>'
          })
    })

    $("#yes-button").click(function (){
        $('#thinking-out-loud')[0].play();

        setTimeout(() => {
            $('.writer-yes-no-block').addClass('animate__fadeOut')

            $('div.spinning-loader').css('display', 'block');
            $('div.spinning-loader').addClass("animate__fadeIn");
    
            setTimeout(() => {
                $('div.photos-galery').css('display', 'flex');
                $('div.photos-galery').addClass("animate__fadeIn");
            }, 1200);
            
            setTimeout(animatePhotos, 2400);
        }, 1200);
    });

    typeWriter(0)
});

function animatePhotos() {
    function loopThroughPhotos(i) {
        // 22 photos in total
        if (i == 22) {
            $('div.spinning-loader').addClass("animate__fadeOut");
            setTimeout(() => $('div.pyro').css('display', 'block'), 2000);
            setTimeout(() => $('.pyro').css('display', 'none'), 10000)
            setTimeout(() => {
                $("#paragrafo-part").css('display', 'block');
                $('html, body').animate({
                    scrollTop: $("#paragrafo-part").offset().top
                }, 1000, function () {
                    $("#feliz-dia").css('display', 'none')
                });
            }, 12500);
            return;
        }

        setTimeout(() => {
            $('div.photos-galery img').attr('src', `images/${i}.jpeg`);
            loopThroughPhotos(++i);
        }, 1200);
    }

    loopThroughPhotos(1);
}