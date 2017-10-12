$(document).ready(function(){

	// ease scroll
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
	
	// wow
	new WOW().init();
    
    // Contact form
    $(document).ready(function(){
        $('#btn_submit').click(function(){
            // собираем данные с формы
            var user_name    = $('#name').val();
            var phone    = $('#phone').val();
            var user_email   = $('#email').val();
            var text_comment = $('#text').val();
            
            if (~location.pathname.indexOf("/en_index")) {
                $.ajax({
                    url: "en_action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "phone":    phone,
                        "user_email":   user_email,
                        "text_comment": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            }
            else {
                $.ajax({
                    url: "action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "phone":    phone,
                        "user_email":   user_email,
                        "text_comment": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            }
            
            $('#name').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#text').val('');
        });
    });
    
    // less menu
    $(window).on("scroll", function() {
		if (window.scrollY > 50) {
            $(".navbar-inverse").css({
                "padding-top": "0"
            });
        }
        else {
            $(".navbar-inverse").css({
               "padding-top": "23px"
            });
        }
    });
    
    
	// to top
	$(window).on("scroll", function() {
		if (window.scrollY > 500) {
		  $(".to-top").css("display", "block");
		}
		else {
		  $(".to-top").css("display", "none");
		}
    });

    $(".to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
	
    // close menu on click at link
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') ) {
			$(this).collapse('hide');
		}
	});
    
});