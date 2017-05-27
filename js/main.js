// init isotope
$('.portfolio-items').isotope({
  // options
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});


//filter items on button click
$(".portfolio-filter").on("click", "a", function(e) {
  e.preventDefault();
  var filterValue = $(this).attr("data-filter");
  $('.portfolio-items').isotope({ filter: filterValue });
});
