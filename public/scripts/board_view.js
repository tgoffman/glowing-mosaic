define(['underscore', 'jquery', 'backbone', 'marionette', 'handlebars', 'scripts/row_view'], function (_, $, Backbone, Marionette, Handlebars, RowView) {

  var BoardView = Marionette.Layout.extend({
    template: Handlebars.compile($('#board-temp').html()),
    ui: {rows: '.rows'},
    events: {
      'click .reset': '__onResetClick'
    },
    initialize: function(options) {
      if (!options.rows) {
        options.rows = 6
      }

      if (!options.columns) {
        options.columns = 6
      }

      this.row_collections = []

      for (var i=0; i < options.rows; i++) {
        var collection = new Backbone.Collection()

        for (var j=0; j < options.columns;j++) {
          collection.add(new Backbone.Model())
        }
        this.row_collections.push(collection)
      }
      
      _.bindAll(this, '__onResetClick')
    },
    onRender: function(current_view) {
      _.each(this.row_collections, function(collection) {
        var view = new RowView({collection: collection}).render()
        current_view.ui.rows.append(view.$el)
      })
    },

    //private
    __onResetClick: function() {
      app.vent.trigger('board.clear')
    }
  })
  return BoardView
})
