$(document).ready(function() {
$(".next i").click(function() {
  var  img_attiva = $("img.active");
   img_attiva.removeClass("active");
if(img_attiva.next("img").length) {

  img_attiva.next("img").addClass("active");
    } else {
            $(".carousel :first-of-type").addClass("active");
        }
    });
    $(".prev i").click(function() {
    var img_attiva = $("img.active");

    img_attiva.removeClass("active");

    if(img_attiva.prev("img").length) {
        img_attiva.prev("img").addClass("active");
    } else {

        $(".carousel img:last-of-type").addClass("active");
    }
})
});
$(".skip span").click(function() {
  var span_attivo = $("span.active")
  span_attivo.removeClass("active")

    $(this).addClass("active")
    var numero_span = $(this).index();
  })
