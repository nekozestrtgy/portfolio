$(function(){

// メニューと矢印ボタン

  // 矢印ボタン
  $('i.fas.fa-angle-double-down').on('click', function() {
    $('html,body').animate({scrollTop: $('#second-block').offset().top}, 500, 'swing')
  })

  // メニュー
  $('.about-me').on('click', function() {
    $('html,body').animate({scrollTop: $('#second-block').offset().top}, 500, 'swing')
  })

  $('.works').on('click', function() {
    $('html,body').animate({scrollTop: $('#third-block').offset().top}, 500, 'swing')
  })

  $('.contact').on('click', function() {
    $('html,body').animate({scrollTop: $('#fourth-block').offset().top}, 500, 'swing')
  })

  $('.title').on('click', function() {
    $('html,body').animate({scrollTop: 0}, 500, 'swing')
  })


// works-details
  $('.content__works.predawner > a').on('click', function(e) {
    if ($('.works-details').is(':visible')) {
      $('.works-details').hide()
      $('.works-details.predawner').fadeIn()
      return
    }
    else {
      $('.works-details.predawner').slideDown()
    }
  })
  $('.content__works.chatspace > a').on('click', function(e) {
    if ($('.works-details').is(':visible')) {
      $('.works-details').hide()
      $('.works-details.chatspace').fadeIn()
      return
    }
    else {
      $('.works-details.chatspace').slideDown()
    }
  })
  $('.content__works.copysite > a').on('click', function(e) {
    if ($('.works-details').is(':visible')) {
      $('.works-details').hide()
      $('.works-details.copysite').fadeIn()
      return
    }
    else {
      $('.works-details.copysite').slideDown()
    }
  })
  $('.content__works.portfolio > a').on('click', function(e) {
    if ($('.works-details').is(':visible')) {
      $('.works-details').hide()
      $('.works-details.portfolio').fadeIn()
      return
    }
    else {
      $('.works-details.portfolio').slideDown()
    }
  })

  // 閉じる矢印ボタン
  $('i.fas.fa-angle-double-up').on('click', function() {
    $('.works-details').slideUp()
  })
})
