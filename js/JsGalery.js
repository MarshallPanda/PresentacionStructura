// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p");

  // Add image and caption to lightbox
  $lightbox
    .append($img)
    .append($caption);

  // Add lightbox to the document
  $('body').append($lightbox);

  // Handle click event on gallery images
  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image source and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Update image source and caption in the lightbox
    $img.attr('src', src);
    $caption.text(cap);

    // Show the lightbox
    $lightbox.fadeIn('fast');

    // Close the lightbox when clicking anywhere on it
    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

})();
