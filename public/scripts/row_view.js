define(['marionette', 'scripts/tile_view'], function(Marionette, TileView) {
  var RowView = Marionette.CollectionView.extend({
    tagName: 'tr',
    template: function() {}, // unnecessary for template
    itemView: TileView
  })
  return RowView
})
