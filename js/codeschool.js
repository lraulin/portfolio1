$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/lraulin.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        for (var i = 0; i < response.courses.completed.length; i++) {
          var title = response.courses.completed[i].title;
          var url = response.courses.completed[i].url;
          var badge = response.courses.completed[i].badge;
          var type = "";
          console.log(title);
          if (title.indexOf('JavaScript') >= 0 || title.indexOf('jQuery') >= 0) {
            type = "js";
          } else if (title.indexOf('CSS') >= 0 || title.indexOf('Bootstrap') >= 0 || title.indexOf('Front-end') >= 0 || title.indexOf('SASS') >= 0) {
            type = "html";
          } else if (title.indexOf('Python') >= 0 || title.indexOf('Django') >= 0) {
            type = "python";
          } else if (title.indexOf('SQL') >= 0) {
            type = "db";
          } else {
            type = "misc";
          }
          console.log(type);
          $("#badges").append('<div class="course ' + type + '"><h3>' + title + '</h3><img src="' + badge + '"><a href="' + url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
        }
      }
    });

    // init isotope
    $('.portfolio-items').isotope({
      // options
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });


    //filter items on button click
    $(".portfolio-filter").on("click", "a", function(e) {
      e.preventDefault();
      $(".active").removeClass("active");
      $(this).parent().addClass("active");
      var filterValue = $(this).attr("data-filter");
      $('#badges').isotope({ filter: filterValue });
    });

});
