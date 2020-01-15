var old;

$("#phone").hover(
  function() {
    old = $(this).text();
    $(this).text("(855)326-9945");
  },
  function() {
    $(this).text(old);
  }
);

$("#cs").hover(
  function() {
    old = $(this).text();
    $(this).text("getticket.com/support");
  },
  function() {
    $(this).text(old);
  }
);

$("#email").hover(
  function() {
    old = $(this).text();
    $(this).text("getticket@gmail.com");
  },
  function() {
    $(this).text(old);
  }
);
