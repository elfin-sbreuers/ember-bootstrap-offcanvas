/* eslint-env node */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-bootstrap-offcanvas',

  included: function(app) {
    app.import(app.bowerDirectory + '/bootstrap-offcanvas/dist/js/bootstrap.offcanvas.min.js');
    app.import(app.bowerDirectory + '/bootstrap-offcanvas/dist/css/bootstrap.offcanvas.min.css');
  }
}
