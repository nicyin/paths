$(function () {

    //Reveal hidden content//

    $('.pairing').each(function () {
      const $container = $(this);
      const $hyperlink = $container.find('.pairing-link');
      const $hyperimage = $container.find('.pairing-img');

      $hyperlink.on('mouseenter', function () {
        $hyperimage.css('opacity', 1);
      });

      $hyperlink.on('mousemove', function (e) {
        const offsetX = 15;
        const offsetY = 15;
        $hyperimage.css({
          left: e.clientX + offsetX + 'px',
          top: e.clientY + offsetY + 'px'
        });
      });

      $hyperlink.on('mouseleave', function () {
        $hyperimage.css('opacity', 0);
      });
    });

  });