let orm = require("../config/orm");
let burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne([id], function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
