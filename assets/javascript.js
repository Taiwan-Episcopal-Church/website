$( document ).ready(function() {
  let win$            = $(window);
  let hamburger_icon$ = $('.menu-icon-hamburger');
  let close_icon$     = $('.menu-icon-close');
  let mobile_menu$    = $('.menu-mobile');
  let icon_container$ = $('.menu-icon-container');

  hamburger_icon$.click(function(e) {
    e.preventDefault();
    mobile_menu$.toggle();
    hamburger_icon$.toggle();
    close_icon$.toggle();
  });

  close_icon$.click(function(e) {
    e.preventDefault();
    mobile_menu$.toggle();
    close_icon$.toggle();
    hamburger_icon$.toggle();
  });

  win$.resize(function(e) {
    if(win$.width() >= 768) {
      icon_container$.hide();
    }
    else {
      icon_container$.show();
    }
  });
});
