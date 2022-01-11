$(function() {
  $("ul li a").each(function () {
    let $href = $(this).attr("href")
    console.log($href)
    if(location.href.match($href)) {
      $(this).parent().addClass("current")
    } else {
      $(this).parent().removeClass("current")
    }
  });
})

$(function(){
  console.log("どう？")
})