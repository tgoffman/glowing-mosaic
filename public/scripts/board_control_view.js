define(['jquery', 'backbone', 'marionette', 'handlebars', 'scripts/board_view'], function ($, Backbone, Marionette, Handlebars, BoardView) {
  var BoardControlView = Marionette.Layout.extend({
    template: Handlebars.compile($('#board-control-temp').html()),
    regions: {
      board: '#board-region'
    },
    onRender: function() {
      this.board.show(new BoardView())
    }
  })
  return BoardControlView
})
