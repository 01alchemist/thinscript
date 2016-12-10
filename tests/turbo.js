(function(__declare, __extern) {
  var ShapeType;
  (function (ShapeType) {
    ShapeType[ShapeType['TRIANGLE'] = 0] = 'TRIANGLE';
    ShapeType[ShapeType['MESH'] = 1] = 'MESH';
  })(ShapeType || (ShapeType = {}));

  var Vector = {};
  Vector.NAME = 'Vector';
  Vector.internal_init = function(ptr) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.type = 0;
  };

  Vector.new = function(x, y, z) {
    let ptr = unsafe.alloc();
    this.x = x;
    this.y = y;
    this.z = z;
    this.type = 0;
    return ptr;
  };

  var newVector = __extern.newVector = function(x, y, z) {
    var v = new Vector();
    v.x = x;
    v.y = y;
    v.z = z;

    return v;
  };

  function turbo() {
    __declare.log("I am from turbo.js");
  }
}(
  typeof global !== 'undefined' ? global : this,
  typeof exports !== 'undefined' ? exports : this
));
