$(document).ready(function(){

/* Start Header Section  */

// Start Banner Section



// End Banner Section



/* end Header Section  */


// Start info Section
$(window).scroll(function(){
let getScrollTop = $(this).scrollTop();
// console.log(getScrollTop);

if(getScrollTop >= 220){
        $(".infoTexts").addClass("fromLefts");
        $(".infoPics").addClass("fromRights");
}else{
        $(".infoTexts").removeClass("fromLefts");
        $(".infoPics").removeClass("fromRights");
}
});

// End info Section

// Start Adv Section
$("#videos").click(function(){
 var getModal = $(this).data("bs-target");
 var getVideoSrc = $(this).data("video");
 var videoUrlWithAuto = getVideoSrc+"?autoplay=1";
        // notice space " iframe" = child
 $(getModal + " iframe").attr("src",videoUrlWithAuto);
         // notice space " button.btn-close" = child
 $(getModal + " button.btn-close").click(function(){
 $(getModal + " iframe").attr("src",getVideoSrc);

 });
});
// End Adv Section


// Start Premises Section
$("#lightSlider").lightSlider({
        auto:true,
        item:4,
        loop:true,
        slideMove:1,
        speed:600,
});
// End Premises Section



// Start pricing Section
$(window).scroll(function(){
        let myScroll = $(this).scrollTop();
        // console.log(myScroll);

        if(myScroll >= 2450){
                $(".cardOnes").addClass("moveLefts");
                $(".cardTwos").addClass("moveBottons");
                $(".cardThrees").addClass("moveRights");
        }else{
                $(".cardOnes").removeClass("moveLefts");
                $(".cardTwos").removeClass("moveBottons");
                $(".cardThrees").removeClass("moveRights");
        }
});
// End pricing Section


// Start Join Us Section
$( "#accordion" ).accordion();   // jq ui can't affect well.
// Start Join Us Section


// Start Footer Section
        $("#getYear").text(new Date().getUTCFullYear());

// End Footer Section


// Start Progress
$(window).scroll(function(){
        var getProgress = $("#progresses");
        var getProgressValues = $("#progressValues");
        var getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop);

        /*
        ! formula = scrollTop * 100 /  projecthight - currenthight(clienthight).
        error here
        */

        // by jQ
        var getscrollHeight = $(document).height();    // projecthight
        // console.log(getscrollHeight);
        var getclientHeight = $(window).height();   // currentheight
        // console.log(getclientHeight);
        var calcHeight = getscrollHeight - getclientHeight;
        var getFinalHeight = Math.round(getScrollTop * 100 / calcHeight);
        //var getFinalHeight = Math.floor(getScrollTop * 100 / calcHeight);

        getProgressValues.text(`${getFinalHeight}%`);

        getProgress.css({
                "background": `conic-gradient(steelblue ${getFinalHeight}%,#eee ${getFinalHeight}%)`
        });




        // by js
       // var getScrolllHeight = document.documentElement.scrollHeight;   // projecthight

        //var getclientHeight = document.documentElement.clientHeight;    // currentheight

        //var calcHeight = getscrollHeight - getclientHeight;

        //var getFinalHeight = Math.round(getscrollHeight * 100 / calcHeight);



       /*  getProgressValues.text($(`{getFinalHeight}%`));

        getProgress.css({
                "background": `conic-gradient(steelblue ${getFinalHeight}%,#eee ${getFinalHeight}%)`
        }); */
});
// End Progress



});