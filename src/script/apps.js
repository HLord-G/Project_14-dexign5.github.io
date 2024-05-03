





function adspopup(time) {
    let timers = time * 1000
    setTimeout(() => {
        $(".popup").fadeIn()
    
        setTimeout(() => {
            $(".popup").css({
                "display":"flex"
            })
    
            $("#ads").css({
                "display":"block"
            })
        }, 100);
    }, timers);
    
    
    $(".popup").click(function(){
        $(this).fadeOut()
        $("#ads").fadeOut()
    })
}





function menuAnimations(delay,animation_time) {
let delay_time = delay
let timer = animation_time

setTimeout(() => {
    for (let ani = 0; ani < $(".menuchoice").length; ani++) {

        setTimeout(() => {
            $(".menuchoice").eq(ani).css({
                "top": "0"
            });
        }, ani * 100 + timer);
      
    }
}, delay_time);
}



function animation_icon_timer(timer){
        setTimeout(() => {
            $("#icons").css({
                "left": "105"
            });
        }, timer);
    
        setInterval(() => {
            $("#icons").css({
                "left": "-120"
            });
            setInterval(() => {
                $("#icons").css({
                    "left": "0"
                });
            }, 1160);
        }, 1110);
}


function button_animation_timer(timer){
    var screenWidth = window.innerWidth;

    if (screenWidth <= 796) {


    }else{
        setTimeout(() => {
            $(".memberbtn").fadeIn()
        }, timer);
    }
}



