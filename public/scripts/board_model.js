define(['backbone'], function (Backbone) {
  var BoardModel = Backbone.Model.extend({
    url: '/boards'
  });
  return BoardModel
})
