$(function () {

    //Reveal hidden content//

    $('.slide-content').each(function () {
      const $container = $(this);
      const $hyperlink = $container.find('.reveal-link');
      const $hyperimage = $container.find('.reveal-content');

      $hyperlink.on('mouseenter', function () {
        $hyperimage.css('opacity', 1);
      });

      $hyperlink.on('mousemove', function (e) {
        const offsetX = 80;
        const offsetY = 280;
        $hyperimage.css({
          left: e.clientX - offsetX + 'px',
          top: e.clientY - offsetY + 'px'
        });
      });

      $hyperlink.on('mouseleave', function () {
        $hyperimage.css('opacity', 0);
      });
    });

  });