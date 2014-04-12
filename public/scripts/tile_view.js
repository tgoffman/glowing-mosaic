define(['underscore','marionette', 'scripts/lib/rcolor'], function(_, Marionette, RColor) {
  var TileView = Marionette.ItemView.extend({
    tagName: 'td',
    className: 'tile',

    events: {
      'click': '__onClick'
    },

    initialize: function () {
      this.previous_colors = [] //array of previously chosen colors

      _.bindAll(this, '__onClick')
    },
    
    template: Handlebars.compile($('#tile-temp').html()),

    onRender: function() {
    },

    //private
    __onClick: function (event) {
      if (this.model.get('color')) {
        this.$el.css('background-color', 'white')
        this.model.unset('color')
      } else {
        var new_color = new RColor().get(true)
        // ensure our picked color has not been previously seen
        while (_.contains(this.previous_colors, new_color)) {
          new_color = new RColor().get(true)
        }

        this.$el.css('background-color', new_color)
        this.model.set('color', new_color)
        this.previous_colors.push(new_color)
      }
    }
  })
  return TileView
})
