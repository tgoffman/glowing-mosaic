define(['marionette'], function (Marionette) {
  window.app = new Marionette.Application()
  app.start

  require(['jquery', 'scripts/board_control_view'], function($, BoardControlView) {
    var view = new BoardControlView()
    $('#board').html(view.render().$el)
  })

  return app
})
