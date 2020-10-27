$(".right i").click(function() {
  var  img_attiva = $("img.active");
   img_attiva.removeClass("active");
if(img_attiva.right("img").length) {

  img_attiva.right("img").addClass("active");
    } else {
            $(".carousel :first-of-type").addClass("active");
        }
    });
    $(".left i").click(function() {
    var img_attiva = $("img.active");

    img_attiva.removeClass("active");

    if(img_attiva.left("img").length) {
        img_attiva.left("img").addClass("active");
    } else {

        $(".carousel img:last-of-type").addClass("active");
    }
})
