$(function(){

    // メインビジュアルのふんわり表示
    $(window).on('load',function() {
        $('#top').animate({ opacity: 1 }, { duration: 1000, easing: 'swing'})
    });
      

    // ヘッダーのスムーススクロール
    $('a[href^="#"]').on('click', function() {
        var speed = 300; // スクロールの速度調節(ms)
        // 移動先を取得
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        //ページ更新してメニュー選択すると少しタイトルからずれてしまうため、その修正用
        if($(window).width() < 560){
            var correction = 65;
        }
        else {
            var correction = 50;
        }
        // スムーススクロール
        $('body,html').animate({scrollTop:position - correction}, speed, 'swing');
        return false;
    });

    // メインビジュアルのslick
     $('.slider').slick({
        autoplay: true, // 自動再生させるか
        autoplaySpeed: 5000, // 自動再生のスピード（ms）
        infinite: true, // 無限ループ
        arrows: false, //なぜか左側の矢印がhoverしてもポインターが表示されない
        dots: true,
     });



    // コンテンツのフェードイン表示
    var effect_pos = 250; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 30; // どのぐらい要素を動かすか(px)
    var effect_time = 1000; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0, //初期透明度
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var active_pos = scroll_btm - effect_pos;

        // active_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each(function() {
            var this_pos = $(this).offset().top;
            if ( active_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
    

    // コンテンツのフェードイン表示（左側から）
    var effect_pos_left = 225; 
    var effect_move_left = -50;

    $('.scroll-left').css({
        opacity: 0, 
        transform: 'translateX('+ effect_move_left +'px)',
        transition: effect_time + 'ms'
    });

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var active_pos_left = scroll_btm - effect_pos_left;

        $('.scroll-left').each(function() {
            var this_pos = $(this).offset().top;
            if ( active_pos_left > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0)'
                });
            }
        });
    });

    // コンテンツのフェードイン表示（右側から）
    var effect_pos_right = 150;
    var effect_move_right = 50;

    $('.scroll-right').css({
        opacity: 0,
        transform: 'translateX('+ effect_move_right +'px)',
        transition: effect_time + 'ms'
    });

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var active_pos_right = scroll_btm - effect_pos_right;

        $('.scroll-right').each(function() {
            var this_pos = $(this).offset().top;
            if ( active_pos_right > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0)'
                });
            }
        });
    });


    // ハンバーガーメニューボタンをクリックした際にSPメニューをスライドで表示・非表示にする
    $('.hamb').on('click',function(){
        if($('.nav_menu').hasClass('open')){
            $('.nav_menu').removeClass('open').css('display','none');
            $('.darkLayer').css('display','none');
        }
        else {
            $('.nav_menu').slideDown(200).addClass('open');// ()内でスライドスピード調節(ms)
            $('.darkLayer').css('display','block');
        }
    });

    //　SPメニューをクリックした際に非表示にする
    $('._sp').on('click',function(){
        var windowWidth = $(window).width();
        if(windowWidth <= 560){
            $('.nav_menu').removeClass('open').css('display','none');
            $('.darkLayer').css('display','none');
        }
    });

    //　SPメニューを開いたままPCサイズに広げた際にSPメニューを非表示にする
    $(window).on('resize', function() {
        var windowWidth = $(window).width();
        if(windowWidth > 560) {
            $('.nav_menu').removeClass('open').css('display','flex');
            $('.darkLayer').css('display','none');
        }
        else {
            $('.nav_menu').css('display','none');
        }

    });

    //　画像拡大
    var luminousTrigger = document.querySelector('.luminous');
    if( luminousTrigger !== null ) {
        new Luminous(luminousTrigger);
    }
});


