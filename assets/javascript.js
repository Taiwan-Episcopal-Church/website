$( document ).ready(function() {
  let win$            = $(window);
  let hamburger_icon$ = $('.menu-icon-hamburger');
  let close_icon$     = $('.menu-icon-close');
  let mobile_menu$    = $('.menu-mobile');
  let icon_container$ = $('.menu-icon-container');

  hamburger_icon$.click(function(e) {
    e.preventDefault();
    mobile_menu$.show();
    hamburger_icon$.hide();
    close_icon$.show();
  });

  close_icon$.click(function(e) {
    e.preventDefault();
    mobile_menu$.hide();
    close_icon$.hide();
    hamburger_icon$.show();
  });

  win$.resize(function(e) {
    if(win$.width() >= 768) {
      icon_container$.hide();
      mobile_menu$.hide();
    }
    else {
      icon_container$.show();
      hamburger_icon$.show();
      close_icon$.hide();
      mobile_menu$.hide();
    }
  });
});
