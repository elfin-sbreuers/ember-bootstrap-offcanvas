module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('bootstrap-offcanvas', '2.4.0');
  }
};
