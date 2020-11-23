$(document).ready(function(){
    $('.section-left-all_news').click(function(){
        $.get('http://data.fixer.io/api/latest?access_key=e101b3702e2a5e3b6dab5a5270a9afaf',
             // {'access_key':'e101b3702e2a5e3b6dab5a5270a9afaf'},
              function(e){
            var eur = e.rates.RUB.toFixed(2);
            var usd = e.rates.USD;
            var rub = (eur / usd).toFixed(2);
            $('.course').append(`
                <ul class="course_exchange">
                    <li>
                        <span class="eur">EUR</span>
                        <span class="eur_rub">${eur}</span>
                    </li>
                    <li>
                        <span class="eur">USD</span>
                        <span class="eur_rub">${rub}</span>
                    </li>
                </ul>
            `)
        });
    });
    
    $(function() {
        $('.hamburger_button').click(function() {
            $('.header-news').slideToggle();
            $('.nav').slideToggle();
            /*$('html,body').css("overflow","hidden");*/
            if ($('html,body').css("overflow")==("hidden")){
                $('html,body').css("overflow","visible");

            }else{
                $('html,body').css("overflow","hidden");

            };
        });
    });
    
    
});