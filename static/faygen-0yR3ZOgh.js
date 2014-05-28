
(function(){
var Data = {};
Data.Data = {};
var Fay = {};
Fay.FFI = {};
Fay.FFI._Nullable = function Nullable(slot1){
  this.slot1 = slot1;
};
Fay.FFI._Nullable.prototype.instance = "Nullable";
Fay.FFI.Nullable = function(slot1){
  return new Fay$$$(function(){
    return new Fay.FFI._Nullable(slot1);
  });
};
Fay.FFI._Null = function Null(){
};
Fay.FFI._Null.prototype.instance = "Null";
Fay.FFI.Null = new Fay$$$(function(){
  return new Fay.FFI._Null();
});
Fay.FFI._Defined = function Defined(slot1){
  this.slot1 = slot1;
};
Fay.FFI._Defined.prototype.instance = "Defined";
Fay.FFI.Defined = function(slot1){
  return new Fay$$$(function(){
    return new Fay.FFI._Defined(slot1);
  });
};
Fay.FFI._Undefined = function Undefined(){
};
Fay.FFI._Undefined.prototype.instance = "Undefined";
Fay.FFI.Undefined = new Fay$$$(function(){
  return new Fay.FFI._Undefined();
});
Fay$$objConcat(Fay$$fayToJsHash,{"Nullable": function(type,argTypes,_obj){
  var obj_ = {"instance": "Nullable"};
  var obj_slot1 = Fay$$fayToJs(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  return obj_;
},"Null": function(type,argTypes,_obj){
  var obj_ = {"instance": "Null"};
  return obj_;
},"Defined": function(type,argTypes,_obj){
  var obj_ = {"instance": "Defined"};
  var obj_slot1 = Fay$$fayToJs(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  return obj_;
},"Undefined": function(type,argTypes,_obj){
  var obj_ = {"instance": "Undefined"};
  return obj_;
}});
Fay$$objConcat(Fay$$jsToFayHash,{"Nullable": function(type,argTypes,obj){
  return new Fay.FFI._Nullable(Fay$$jsToFay(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],obj["slot1"]));
},"Null": function(type,argTypes,obj){
  return new Fay.FFI._Null();
},"Defined": function(type,argTypes,obj){
  return new Fay.FFI._Defined(Fay$$jsToFay(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],obj["slot1"]));
},"Undefined": function(type,argTypes,obj){
  return new Fay.FFI._Undefined();
}});
var Prelude = {};
Prelude._Just = function Just(slot1){
  this.slot1 = slot1;
};
Prelude._Just.prototype.instance = "Just";
Prelude.Just = function(slot1){
  return new Fay$$$(function(){
    return new Prelude._Just(slot1);
  });
};
Prelude._Nothing = function Nothing(){
};
Prelude._Nothing.prototype.instance = "Nothing";
Prelude.Nothing = new Fay$$$(function(){
  return new Prelude._Nothing();
});
Prelude._Left = function Left(slot1){
  this.slot1 = slot1;
};
Prelude._Left.prototype.instance = "Left";
Prelude.Left = function(slot1){
  return new Fay$$$(function(){
    return new Prelude._Left(slot1);
  });
};
Prelude._Right = function Right(slot1){
  this.slot1 = slot1;
};
Prelude._Right.prototype.instance = "Right";
Prelude.Right = function(slot1){
  return new Fay$$$(function(){
    return new Prelude._Right(slot1);
  });
};
Prelude.maybe = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) instanceof Prelude._Nothing) {
          var m = $p1;
          return m;
        }
        if (Fay$$_($p3) instanceof Prelude._Just) {
          var x = Fay$$_($p3).slot1;
          var f = $p2;
          return Fay$$_(f)(x);
        }
        throw ["unhandled case in maybe",[$p1,$p2,$p3]];
      });
    };
  };
};
Prelude.$62$$62$$61$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$_(Fay$$bind($p1)($p2));
    });
  };
};
Prelude.$62$$62$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$_(Fay$$then($p1)($p2));
    });
  };
};
Prelude.$_return = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay(["unknown"],Fay$$return(Fay$$fayToJs(["unknown"],$p1))));
  });
};
Prelude.fail = new Fay$$$(function(){
  return Prelude.error;
});
Prelude.when = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var m = $p2;
      var p = $p1;
      return Fay$$_(p) ? Fay$$_(Fay$$_(Fay$$then)(m))(Fay$$_(Fay$$$_return)(Fay$$unit)) : Fay$$_(Fay$$$_return)(Fay$$unit);
    });
  };
};
Prelude.unless = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var m = $p2;
      var p = $p1;
      return Fay$$_(p) ? Fay$$_(Fay$$$_return)(Fay$$unit) : Fay$$_(Fay$$_(Fay$$then)(m))(Fay$$_(Fay$$$_return)(Fay$$unit));
    });
  };
};
Prelude.forM = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var fn = $p2;
      var lst = $p1;
      return Fay$$_(Fay$$_(Prelude.$36$)(Prelude.sequence))(Fay$$_(Fay$$_(Prelude.map)(fn))(lst));
    });
  };
};
Prelude.forM_ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var m = $p2;
      var $tmp1 = Fay$$_($p1);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        return Fay$$_(Fay$$_(Fay$$then)(Fay$$_(m)(x)))(Fay$$_(Fay$$_(Prelude.forM_)(xs))(m));
      }
      if (Fay$$_($p1) === null) {
        return Fay$$_(Fay$$$_return)(Fay$$unit);
      }
      throw ["unhandled case in forM_",[$p1,$p2]];
    });
  };
};
Prelude.mapM = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var lst = $p2;
      var fn = $p1;
      return Fay$$_(Fay$$_(Prelude.$36$)(Prelude.sequence))(Fay$$_(Fay$$_(Prelude.map)(fn))(lst));
    });
  };
};
Prelude.mapM_ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var m = $p1;
        return Fay$$_(Fay$$_(Fay$$then)(Fay$$_(m)(x)))(Fay$$_(Fay$$_(Prelude.mapM_)(m))(xs));
      }
      if (Fay$$_($p2) === null) {
        return Fay$$_(Fay$$$_return)(Fay$$unit);
      }
      throw ["unhandled case in mapM_",[$p1,$p2]];
    });
  };
};
Prelude.$61$$60$$60$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var x = $p2;
      var f = $p1;
      return Fay$$_(Fay$$_(Fay$$bind)(x))(f);
    });
  };
};
Prelude.$_void = function($p1){
  return new Fay$$$(function(){
    var f = $p1;
    return Fay$$_(Fay$$_(Fay$$then)(f))(Fay$$_(Fay$$$_return)(Fay$$unit));
  });
};
Prelude.$62$$61$$62$ = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var x = $p3;
        var g = $p2;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(f)(x)))(g);
      });
    };
  };
};
Prelude.$60$$61$$60$ = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var x = $p3;
        var f = $p2;
        var g = $p1;
        return Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(f)(x)))(g);
      });
    };
  };
};
Prelude.sequence = function($p1){
  return new Fay$$$(function(){
    var ms = $p1;
    return (function(){
      var k = function($p1){
        return function($p2){
          return new Fay$$$(function(){
            var m$39$ = $p2;
            var m = $p1;
            return Fay$$_(Fay$$_(Fay$$bind)(m))(function($p1){
              var x = $p1;
              return Fay$$_(Fay$$_(Fay$$bind)(m$39$))(function($p1){
                var xs = $p1;
                return Fay$$_(Fay$$$_return)(Fay$$_(Fay$$_(Fay$$cons)(x))(xs));
              });
            });
          });
        };
      };
      return Fay$$_(Fay$$_(Fay$$_(Prelude.foldr)(k))(Fay$$_(Fay$$$_return)(null)))(ms);
    })();
  });
};
Prelude.sequence_ = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Fay$$$_return)(Fay$$unit);
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var m = $tmp1.car;
      var ms = $tmp1.cdr;
      return Fay$$_(Fay$$_(Fay$$then)(m))(Fay$$_(Prelude.sequence_)(ms));
    }
    throw ["unhandled case in sequence_",[$p1]];
  });
};
Prelude._GT = function GT(){
};
Prelude._GT.prototype.instance = "GT";
Prelude.GT = new Fay$$$(function(){
  return new Prelude._GT();
});
Prelude._LT = function LT(){
};
Prelude._LT.prototype.instance = "LT";
Prelude.LT = new Fay$$$(function(){
  return new Prelude._LT();
});
Prelude._EQ = function EQ(){
};
Prelude._EQ.prototype.instance = "EQ";
Prelude.EQ = new Fay$$$(function(){
  return new Prelude._EQ();
});
Prelude.compare = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Fay$$_(Fay$$gt)(x))(y)) ? Prelude.GT : Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(x))(y)) ? Prelude.LT : Prelude.EQ;
    });
  };
};
Prelude.succ = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$add)(x))(1);
  });
};
Prelude.pred = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$sub)(x))(1);
  });
};
Prelude.enumFrom = function($p1){
  return new Fay$$$(function(){
    var i = $p1;
    return Fay$$_(Fay$$_(Fay$$cons)(i))(Fay$$_(Prelude.enumFrom)(Fay$$_(Fay$$_(Fay$$add)(i))(1)));
  });
};
Prelude.enumFromTo = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var n = $p2;
      var i = $p1;
      return Fay$$_(Fay$$_(Fay$$_(Fay$$gt)(i))(n)) ? null : Fay$$_(Fay$$_(Fay$$cons)(i))(Fay$$_(Fay$$_(Prelude.enumFromTo)(Fay$$_(Fay$$_(Fay$$add)(i))(1)))(n));
    });
  };
};
Prelude.enumFromBy = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var by = $p2;
      var fr = $p1;
      return Fay$$_(Fay$$_(Fay$$cons)(fr))(Fay$$_(Fay$$_(Prelude.enumFromBy)(Fay$$_(Fay$$_(Fay$$add)(fr))(by)))(by));
    });
  };
};
Prelude.enumFromThen = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var th = $p2;
      var fr = $p1;
      return Fay$$_(Fay$$_(Prelude.enumFromBy)(fr))(Fay$$_(Fay$$_(Fay$$sub)(th))(fr));
    });
  };
};
Prelude.enumFromByTo = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var to = $p3;
        var by = $p2;
        var fr = $p1;
        return (function(){
          var neg = function($p1){
            return new Fay$$$(function(){
              var x = $p1;
              return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(x))(to)) ? null : Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(neg)(Fay$$_(Fay$$_(Fay$$add)(x))(by)));
            });
          };
          var pos = function($p1){
            return new Fay$$$(function(){
              var x = $p1;
              return Fay$$_(Fay$$_(Fay$$_(Fay$$gt)(x))(to)) ? null : Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(pos)(Fay$$_(Fay$$_(Fay$$add)(x))(by)));
            });
          };
          return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(by))(0)) ? Fay$$_(neg)(fr) : Fay$$_(pos)(fr);
        })();
      });
    };
  };
};
Prelude.enumFromThenTo = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var to = $p3;
        var th = $p2;
        var fr = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Prelude.enumFromByTo)(fr))(Fay$$_(Fay$$_(Fay$$sub)(th))(fr)))(to);
      });
    };
  };
};
Prelude.fromIntegral = function($p1){
  return new Fay$$$(function(){
    return $p1;
  });
};
Prelude.fromInteger = function($p1){
  return new Fay$$$(function(){
    return $p1;
  });
};
Prelude.not = function($p1){
  return new Fay$$$(function(){
    var p = $p1;
    return Fay$$_(p) ? false : true;
  });
};
Prelude.otherwise = true;
Prelude.show = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_string(JSON.stringify(Fay$$fayToJs(["automatic"],$p1)));
  });
};
Prelude.error = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay(["unknown"],(function() { throw Fay$$fayToJs_string($p1) })());
  });
};
Prelude.$_undefined = new Fay$$$(function(){
  return Fay$$_(Prelude.error)(Fay$$list("Prelude.undefined"));
});
Prelude.either = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) instanceof Prelude._Left) {
          var a = Fay$$_($p3).slot1;
          var f = $p1;
          return Fay$$_(f)(a);
        }
        if (Fay$$_($p3) instanceof Prelude._Right) {
          var b = Fay$$_($p3).slot1;
          var g = $p2;
          return Fay$$_(g)(b);
        }
        throw ["unhandled case in either",[$p1,$p2,$p3]];
      });
    };
  };
};
Prelude.until = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var x = $p3;
        var f = $p2;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? x : Fay$$_(Fay$$_(Fay$$_(Prelude.until)(p))(f))(Fay$$_(f)(x));
      });
    };
  };
};
Prelude.$36$$33$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var x = $p2;
      var f = $p1;
      return Fay$$_(Fay$$_(Fay$$seq)(x))(Fay$$_(f)(x));
    });
  };
};
Prelude.$_const = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var a = $p1;
      return a;
    });
  };
};
Prelude.id = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return x;
  });
};
Prelude.$46$ = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var x = $p3;
        var g = $p2;
        var f = $p1;
        return Fay$$_(f)(Fay$$_(g)(x));
      });
    };
  };
};
Prelude.$36$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var x = $p2;
      var f = $p1;
      return Fay$$_(f)(x);
    });
  };
};
Prelude.flip = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var y = $p3;
        var x = $p2;
        var f = $p1;
        return Fay$$_(Fay$$_(f)(y))(x);
      });
    };
  };
};
Prelude.curry = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var y = $p3;
        var x = $p2;
        var f = $p1;
        return Fay$$_(f)(Fay$$list([x,y]));
      });
    };
  };
};
Prelude.uncurry = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var p = $p2;
      var f = $p1;
      return (function($tmp1){
        if (Fay$$listLen(Fay$$_($tmp1),2)) {
          var x = Fay$$index(0,Fay$$_($tmp1));
          var y = Fay$$index(1,Fay$$_($tmp1));
          return Fay$$_(Fay$$_(f)(x))(y);
        }
        return (function(){ throw (["unhandled case",$tmp1]); })();
      })(p);
    });
  };
};
Prelude.snd = function($p1){
  return new Fay$$$(function(){
    if (Fay$$listLen(Fay$$_($p1),2)) {
      var x = Fay$$index(1,Fay$$_($p1));
      return x;
    }
    throw ["unhandled case in snd",[$p1]];
  });
};
Prelude.fst = function($p1){
  return new Fay$$$(function(){
    if (Fay$$listLen(Fay$$_($p1),2)) {
      var x = Fay$$index(0,Fay$$_($p1));
      return x;
    }
    throw ["unhandled case in fst",[$p1]];
  });
};
Prelude.div = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$gt)(x))(0)))(Fay$$_(Fay$$_(Fay$$lt)(y))(0)))) {
        return Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Fay$$_(Prelude.quot)(Fay$$_(Fay$$_(Fay$$sub)(x))(1)))(y)))(1);
      } else {if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$lt)(x))(0)))(Fay$$_(Fay$$_(Fay$$gt)(y))(0)))) {
          return Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Fay$$_(Prelude.quot)(Fay$$_(Fay$$_(Fay$$add)(x))(1)))(y)))(1);
        }
      }
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Prelude.quot)(x))(y);
    });
  };
};
Prelude.mod = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$gt)(x))(0)))(Fay$$_(Fay$$_(Fay$$lt)(y))(0)))) {
        return Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Fay$$_(Prelude.rem)(Fay$$_(Fay$$_(Fay$$sub)(x))(1)))(y)))(y)))(1);
      } else {if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$lt)(x))(0)))(Fay$$_(Fay$$_(Fay$$gt)(y))(0)))) {
          return Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Fay$$_(Prelude.rem)(Fay$$_(Fay$$_(Fay$$add)(x))(1)))(y)))(y)))(1);
        }
      }
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Prelude.rem)(x))(y);
    });
  };
};
Prelude.divMod = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$gt)(x))(0)))(Fay$$_(Fay$$_(Fay$$lt)(y))(0)))) {
        return (function($tmp1){
          if (Fay$$listLen(Fay$$_($tmp1),2)) {
            var q = Fay$$index(0,Fay$$_($tmp1));
            var r = Fay$$index(1,Fay$$_($tmp1));
            return Fay$$list([Fay$$_(Fay$$_(Fay$$sub)(q))(1),Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Fay$$_(Fay$$add)(r))(y)))(1)]);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(Fay$$_(Fay$$_(Prelude.quotRem)(Fay$$_(Fay$$_(Fay$$sub)(x))(1)))(y));
      } else {if (Fay$$_(Fay$$_(Fay$$_(Fay$$and)(Fay$$_(Fay$$_(Fay$$lt)(x))(0)))(Fay$$_(Fay$$_(Fay$$gt)(y))(1)))) {
          return (function($tmp1){
            if (Fay$$listLen(Fay$$_($tmp1),2)) {
              var q = Fay$$index(0,Fay$$_($tmp1));
              var r = Fay$$index(1,Fay$$_($tmp1));
              return Fay$$list([Fay$$_(Fay$$_(Fay$$sub)(q))(1),Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Fay$$_(Fay$$add)(r))(y)))(1)]);
            }
            return (function(){ throw (["unhandled case",$tmp1]); })();
          })(Fay$$_(Fay$$_(Prelude.quotRem)(Fay$$_(Fay$$_(Fay$$add)(x))(1)))(y));
        }
      }
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Prelude.quotRem)(x))(y);
    });
  };
};
Prelude.min = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$jsToFay(["unknown"],Math.min(Fay$$_(Fay$$fayToJs(["unknown"],$p1)),Fay$$_(Fay$$fayToJs(["unknown"],$p2))));
    });
  };
};
Prelude.max = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$jsToFay(["unknown"],Math.max(Fay$$_(Fay$$fayToJs(["unknown"],$p1)),Fay$$_(Fay$$fayToJs(["unknown"],$p2))));
    });
  };
};
Prelude.recip = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$divi)(1))(x);
  });
};
Prelude.negate = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return (-(Fay$$_(x)));
  });
};
Prelude.abs = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(x))(0)) ? Fay$$_(Prelude.negate)(x) : x;
  });
};
Prelude.signum = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$_(Fay$$gt)(x))(0)) ? 1 : Fay$$_(Fay$$_(Fay$$_(Fay$$eq)(x))(0)) ? 0 : (-(1));
  });
};
Prelude.pi = new Fay$$$(function(){
  return Fay$$jsToFay_double(Math.PI);
});
Prelude.exp = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.exp(Fay$$fayToJs_double($p1)));
  });
};
Prelude.sqrt = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.sqrt(Fay$$fayToJs_double($p1)));
  });
};
Prelude.log = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.log(Fay$$fayToJs_double($p1)));
  });
};
Prelude.$42$$42$ = new Fay$$$(function(){
  return Prelude.unsafePow;
});
Prelude.$94$$94$ = new Fay$$$(function(){
  return Prelude.unsafePow;
});
Prelude.unsafePow = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$jsToFay(["unknown"],Math.pow(Fay$$_(Fay$$fayToJs(["unknown"],$p1)),Fay$$_(Fay$$fayToJs(["unknown"],$p2))));
    });
  };
};
Prelude.$94$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var b = $p2;
      var a = $p1;
      if (Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(b))(0))) {
        return Fay$$_(Prelude.error)(Fay$$list("(^): negative exponent"));
      } else {if (Fay$$_(Fay$$_(Fay$$_(Fay$$eq)(b))(0))) {
          return 1;
        } else {if (Fay$$_(Fay$$_(Prelude.even)(b))) {
            return (function(){
              return new Fay$$$(function(){
                var x = new Fay$$$(function(){
                  return Fay$$_(Fay$$_(Prelude.$94$)(a))(Fay$$_(Fay$$_(Prelude.quot)(b))(2));
                });
                return Fay$$_(Fay$$_(Fay$$mult)(x))(x);
              });
            })();
          }
        }
      }
      var b = $p2;
      var a = $p1;
      return Fay$$_(Fay$$_(Fay$$mult)(a))(Fay$$_(Fay$$_(Prelude.$94$)(a))(Fay$$_(Fay$$_(Fay$$sub)(b))(1)));
    });
  };
};
Prelude.logBase = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var x = $p2;
      var b = $p1;
      return Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Prelude.log)(x)))(Fay$$_(Prelude.log)(b));
    });
  };
};
Prelude.sin = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.sin(Fay$$fayToJs_double($p1)));
  });
};
Prelude.tan = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.tan(Fay$$fayToJs_double($p1)));
  });
};
Prelude.cos = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.cos(Fay$$fayToJs_double($p1)));
  });
};
Prelude.asin = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.asin(Fay$$fayToJs_double($p1)));
  });
};
Prelude.atan = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.atan(Fay$$fayToJs_double($p1)));
  });
};
Prelude.acos = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_double(Math.acos(Fay$$fayToJs_double($p1)));
  });
};
Prelude.sinh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Prelude.exp)(x)))(Fay$$_(Prelude.exp)((-(Fay$$_(x)))))))(2);
  });
};
Prelude.tanh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return (function(){
      return new Fay$$$(function(){
        var a = new Fay$$$(function(){
          return Fay$$_(Prelude.exp)(x);
        });
        var b = new Fay$$$(function(){
          return Fay$$_(Prelude.exp)((-(Fay$$_(x))));
        });
        return Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Fay$$_(Fay$$sub)(a))(b)))(Fay$$_(Fay$$_(Fay$$add)(a))(b));
      });
    })();
  });
};
Prelude.cosh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Prelude.exp)(x)))(Fay$$_(Prelude.exp)((-(Fay$$_(x)))))))(2);
  });
};
Prelude.asinh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Prelude.log)(Fay$$_(Fay$$_(Fay$$add)(x))(Fay$$_(Prelude.sqrt)(Fay$$_(Fay$$_(Fay$$add)(Fay$$_(Fay$$_(Prelude.$42$$42$)(x))(2)))(1))));
  });
};
Prelude.atanh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Prelude.log)(Fay$$_(Fay$$_(Fay$$divi)(Fay$$_(Fay$$_(Fay$$add)(1))(x)))(Fay$$_(Fay$$_(Fay$$sub)(1))(x)))))(2);
  });
};
Prelude.acosh = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Prelude.log)(Fay$$_(Fay$$_(Fay$$add)(x))(Fay$$_(Prelude.sqrt)(Fay$$_(Fay$$_(Fay$$sub)(Fay$$_(Fay$$_(Prelude.$42$$42$)(x))(2)))(1))));
  });
};
Prelude.properFraction = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return (function(){
      return new Fay$$$(function(){
        var a = new Fay$$$(function(){
          return Fay$$_(Prelude.truncate)(x);
        });
        return Fay$$list([a,Fay$$_(Fay$$_(Fay$$sub)(x))(Fay$$_(Prelude.fromIntegral)(a))]);
      });
    })();
  });
};
Prelude.truncate = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(x))(0)) ? Fay$$_(Prelude.ceiling)(x) : Fay$$_(Prelude.floor)(x);
  });
};
Prelude.round = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_int(Math.round(Fay$$fayToJs_double($p1)));
  });
};
Prelude.ceiling = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_int(Math.ceil(Fay$$fayToJs_double($p1)));
  });
};
Prelude.floor = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_int(Math.floor(Fay$$fayToJs_double($p1)));
  });
};
Prelude.subtract = new Fay$$$(function(){
  return Fay$$_(Prelude.flip)(Fay$$sub);
});
Prelude.even = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$eq)(Fay$$_(Fay$$_(Prelude.rem)(x))(2)))(0);
  });
};
Prelude.odd = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Prelude.not)(Fay$$_(Prelude.even)(x));
  });
};
Prelude.gcd = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var b = $p2;
      var a = $p1;
      return (function(){
        var go = function($p1){
          return function($p2){
            return new Fay$$$(function(){
              if (Fay$$_($p2) === 0) {
                var x = $p1;
                return x;
              }
              var y = $p2;
              var x = $p1;
              return Fay$$_(Fay$$_(go)(y))(Fay$$_(Fay$$_(Prelude.rem)(x))(y));
            });
          };
        };
        return Fay$$_(Fay$$_(go)(Fay$$_(Prelude.abs)(a)))(Fay$$_(Prelude.abs)(b));
      })();
    });
  };
};
Prelude.quot = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Fay$$_(Fay$$eq)(y))(0)) ? Fay$$_(Prelude.error)(Fay$$list("Division by zero")) : Fay$$_(Fay$$_(Prelude.quot$39$)(x))(y);
    });
  };
};
Prelude.quot$39$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$jsToFay_int(~~(Fay$$fayToJs_int($p1)/Fay$$fayToJs_int($p2)));
    });
  };
};
Prelude.quotRem = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      return Fay$$list([Fay$$_(Fay$$_(Prelude.quot)(x))(y),Fay$$_(Fay$$_(Prelude.rem)(x))(y)]);
    });
  };
};
Prelude.rem = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Fay$$_(Fay$$eq)(y))(0)) ? Fay$$_(Prelude.error)(Fay$$list("Division by zero")) : Fay$$_(Fay$$_(Prelude.rem$39$)(x))(y);
    });
  };
};
Prelude.rem$39$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return Fay$$jsToFay_int(Fay$$fayToJs_int($p1) % Fay$$fayToJs_int($p2));
    });
  };
};
Prelude.lcm = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === 0) {
        return 0;
      }
      if (Fay$$_($p1) === 0) {
        return 0;
      }
      var b = $p2;
      var a = $p1;
      return Fay$$_(Prelude.abs)(Fay$$_(Fay$$_(Fay$$mult)(Fay$$_(Fay$$_(Prelude.quot)(a))(Fay$$_(Fay$$_(Prelude.gcd)(a))(b))))(b));
    });
  };
};
Prelude.find = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? Fay$$_(Prelude.Just)(x) : Fay$$_(Fay$$_(Prelude.find)(p))(xs);
      }
      if (Fay$$_($p2) === null) {
        return Prelude.Nothing;
      }
      throw ["unhandled case in find",[$p1,$p2]];
    });
  };
};
Prelude.filter = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.filter)(p))(xs)) : Fay$$_(Fay$$_(Prelude.filter)(p))(xs);
      }
      if (Fay$$_($p2) === null) {
        return null;
      }
      throw ["unhandled case in filter",[$p1,$p2]];
    });
  };
};
Prelude.$_null = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return true;
    }
    return false;
  });
};
Prelude.map = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$cons)(Fay$$_(f)(x)))(Fay$$_(Fay$$_(Prelude.map)(f))(xs));
      }
      throw ["unhandled case in map",[$p1,$p2]];
    });
  };
};
Prelude.nub = function($p1){
  return new Fay$$$(function(){
    var ls = $p1;
    return Fay$$_(Fay$$_(Prelude.nub$39$)(ls))(null);
  });
};
Prelude.nub$39$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p1) === null) {
        return null;
      }
      var ls = $p2;
      var $tmp1 = Fay$$_($p1);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        return Fay$$_(Fay$$_(Fay$$_(Prelude.elem)(x))(ls)) ? Fay$$_(Fay$$_(Prelude.nub$39$)(xs))(ls) : Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.nub$39$)(xs))(Fay$$_(Fay$$_(Fay$$cons)(x))(ls)));
      }
      throw ["unhandled case in nub'",[$p1,$p2]];
    });
  };
};
Prelude.elem = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var y = $tmp1.car;
        var ys = $tmp1.cdr;
        var x = $p1;
        return Fay$$_(Fay$$_(Fay$$or)(Fay$$_(Fay$$_(Fay$$eq)(x))(y)))(Fay$$_(Fay$$_(Prelude.elem)(x))(ys));
      }
      if (Fay$$_($p2) === null) {
        return false;
      }
      throw ["unhandled case in elem",[$p1,$p2]];
    });
  };
};
Prelude.notElem = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var ys = $p2;
      var x = $p1;
      return Fay$$_(Prelude.not)(Fay$$_(Fay$$_(Prelude.elem)(x))(ys));
    });
  };
};
Prelude.sort = new Fay$$$(function(){
  return Fay$$_(Prelude.sortBy)(Prelude.compare);
});
Prelude.sortBy = function($p1){
  return new Fay$$$(function(){
    var cmp = $p1;
    return Fay$$_(Fay$$_(Prelude.foldr)(Fay$$_(Prelude.insertBy)(cmp)))(null);
  });
};
Prelude.insertBy = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) === null) {
          var x = $p2;
          return Fay$$list([x]);
        }
        var ys = $p3;
        var x = $p2;
        var cmp = $p1;
        return (function($tmp1){
          if (Fay$$_($tmp1) === null) {
            return Fay$$list([x]);
          }
          var $tmp2 = Fay$$_($tmp1);
          if ($tmp2 instanceof Fay$$Cons) {
            var y = $tmp2.car;
            var ys$39$ = $tmp2.cdr;
            return (function($tmp2){
              if (Fay$$_($tmp2) instanceof Prelude._GT) {
                return Fay$$_(Fay$$_(Fay$$cons)(y))(Fay$$_(Fay$$_(Fay$$_(Prelude.insertBy)(cmp))(x))(ys$39$));
              }
              return Fay$$_(Fay$$_(Fay$$cons)(x))(ys);
            })(Fay$$_(Fay$$_(cmp)(x))(y));
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(ys);
      });
    };
  };
};
Prelude.conc = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var ys = $p2;
      var $tmp1 = Fay$$_($p1);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        return Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.conc)(xs))(ys));
      }
      var ys = $p2;
      if (Fay$$_($p1) === null) {
        return ys;
      }
      throw ["unhandled case in conc",[$p1,$p2]];
    });
  };
};
Prelude.concat = new Fay$$$(function(){
  return Fay$$_(Fay$$_(Prelude.foldr)(Prelude.conc))(null);
});
Prelude.concatMap = function($p1){
  return new Fay$$$(function(){
    var f = $p1;
    return Fay$$_(Fay$$_(Prelude.foldr)(Fay$$_(Fay$$_(Prelude.$46$)(Prelude.$43$$43$))(f)))(null);
  });
};
Prelude.foldr = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) === null) {
          var z = $p2;
          return z;
        }
        var $tmp1 = Fay$$_($p3);
        if ($tmp1 instanceof Fay$$Cons) {
          var x = $tmp1.car;
          var xs = $tmp1.cdr;
          var z = $p2;
          var f = $p1;
          return Fay$$_(Fay$$_(f)(x))(Fay$$_(Fay$$_(Fay$$_(Prelude.foldr)(f))(z))(xs));
        }
        throw ["unhandled case in foldr",[$p1,$p2,$p3]];
      });
    };
  };
};
Prelude.foldr1 = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$listLen(Fay$$_($p2),1)) {
        var x = Fay$$index(0,Fay$$_($p2));
        return x;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var f = $p1;
        return Fay$$_(Fay$$_(f)(x))(Fay$$_(Fay$$_(Prelude.foldr1)(f))(xs));
      }
      if (Fay$$_($p2) === null) {
        return Fay$$_(Prelude.error)(Fay$$list("foldr1: empty list"));
      }
      throw ["unhandled case in foldr1",[$p1,$p2]];
    });
  };
};
Prelude.foldl = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) === null) {
          var z = $p2;
          return z;
        }
        var $tmp1 = Fay$$_($p3);
        if ($tmp1 instanceof Fay$$Cons) {
          var x = $tmp1.car;
          var xs = $tmp1.cdr;
          var z = $p2;
          var f = $p1;
          return Fay$$_(Fay$$_(Fay$$_(Prelude.foldl)(f))(Fay$$_(Fay$$_(f)(z))(x)))(xs);
        }
        throw ["unhandled case in foldl",[$p1,$p2,$p3]];
      });
    };
  };
};
Prelude.foldl1 = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Prelude.foldl)(f))(x))(xs);
      }
      if (Fay$$_($p2) === null) {
        return Fay$$_(Prelude.error)(Fay$$list("foldl1: empty list"));
      }
      throw ["unhandled case in foldl1",[$p1,$p2]];
    });
  };
};
Prelude.$43$$43$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var y = $p2;
      var x = $p1;
      return Fay$$_(Fay$$_(Prelude.conc)(x))(y);
    });
  };
};
Prelude.$33$$33$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var b = $p2;
      var a = $p1;
      return (function(){
        var go = function($p1){
          return function($p2){
            return new Fay$$$(function(){
              if (Fay$$_($p1) === null) {
                return Fay$$_(Prelude.error)(Fay$$list("(!!): index too large"));
              }
              if (Fay$$_($p2) === 0) {
                var $tmp1 = Fay$$_($p1);
                if ($tmp1 instanceof Fay$$Cons) {
                  var h = $tmp1.car;
                  return h;
                }
              }
              var n = $p2;
              var $tmp1 = Fay$$_($p1);
              if ($tmp1 instanceof Fay$$Cons) {
                var t = $tmp1.cdr;
                return Fay$$_(Fay$$_(go)(t))(Fay$$_(Fay$$_(Fay$$sub)(n))(1));
              }
              throw ["unhandled case in go",[$p1,$p2]];
            });
          };
        };
        return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(b))(0)) ? Fay$$_(Prelude.error)(Fay$$list("(!!): negative index")) : Fay$$_(Fay$$_(go)(a))(b);
      })();
    });
  };
};
Prelude.head = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("head: empty list"));
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var h = $tmp1.car;
      return h;
    }
    throw ["unhandled case in head",[$p1]];
  });
};
Prelude.tail = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("tail: empty list"));
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var t = $tmp1.cdr;
      return t;
    }
    throw ["unhandled case in tail",[$p1]];
  });
};
Prelude.init = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("init: empty list"));
    }
    if (Fay$$listLen(Fay$$_($p1),1)) {
      var a = Fay$$index(0,Fay$$_($p1));
      return null;
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var h = $tmp1.car;
      var t = $tmp1.cdr;
      return Fay$$_(Fay$$_(Fay$$cons)(h))(Fay$$_(Prelude.init)(t));
    }
    throw ["unhandled case in init",[$p1]];
  });
};
Prelude.last = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("last: empty list"));
    }
    if (Fay$$listLen(Fay$$_($p1),1)) {
      var a = Fay$$index(0,Fay$$_($p1));
      return a;
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var t = $tmp1.cdr;
      return Fay$$_(Prelude.last)(t);
    }
    throw ["unhandled case in last",[$p1]];
  });
};
Prelude.iterate = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var x = $p2;
      var f = $p1;
      return Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.iterate)(f))(Fay$$_(f)(x)));
    });
  };
};
Prelude.repeat = function($p1){
  return new Fay$$$(function(){
    var x = $p1;
    return Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Prelude.repeat)(x));
  });
};
Prelude.replicate = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p1) === 0) {
        return null;
      }
      var x = $p2;
      var n = $p1;
      return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(n))(0)) ? null : Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.replicate)(Fay$$_(Fay$$_(Fay$$sub)(n))(1)))(x));
    });
  };
};
Prelude.cycle = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("cycle: empty list"));
    }
    var xs = $p1;
    return (function(){
      var xs$39$ = new Fay$$$(function(){
        return Fay$$_(Fay$$_(Prelude.$43$$43$)(xs))(xs$39$);
      });
      return xs$39$;
    })();
  });
};
Prelude.take = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p1) === 0) {
        return null;
      }
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var n = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(n))(0)) ? null : Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.take)(Fay$$_(Fay$$_(Fay$$sub)(n))(1)))(xs));
      }
      throw ["unhandled case in take",[$p1,$p2]];
    });
  };
};
Prelude.drop = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var xs = $p2;
      if (Fay$$_($p1) === 0) {
        return xs;
      }
      if (Fay$$_($p2) === null) {
        return null;
      }
      var xss = $p2;
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var n = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(n))(0)) ? xss : Fay$$_(Fay$$_(Prelude.drop)(Fay$$_(Fay$$_(Fay$$sub)(n))(1)))(xs);
      }
      throw ["unhandled case in drop",[$p1,$p2]];
    });
  };
};
Prelude.splitAt = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var xs = $p2;
      if (Fay$$_($p1) === 0) {
        return Fay$$list([null,xs]);
      }
      if (Fay$$_($p2) === null) {
        return Fay$$list([null,null]);
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var n = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Fay$$lt)(n))(0)) ? Fay$$list([null,Fay$$_(Fay$$_(Fay$$cons)(x))(xs)]) : (function($tmp1){
          if (Fay$$listLen(Fay$$_($tmp1),2)) {
            var a = Fay$$index(0,Fay$$_($tmp1));
            var b = Fay$$index(1,Fay$$_($tmp1));
            return Fay$$list([Fay$$_(Fay$$_(Fay$$cons)(x))(a),b]);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(Fay$$_(Fay$$_(Prelude.splitAt)(Fay$$_(Fay$$_(Fay$$sub)(n))(1)))(xs));
      }
      throw ["unhandled case in splitAt",[$p1,$p2]];
    });
  };
};
Prelude.takeWhile = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.takeWhile)(p))(xs)) : null;
      }
      throw ["unhandled case in takeWhile",[$p1,$p2]];
    });
  };
};
Prelude.dropWhile = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? Fay$$_(Fay$$_(Prelude.dropWhile)(p))(xs) : Fay$$_(Fay$$_(Fay$$cons)(x))(xs);
      }
      throw ["unhandled case in dropWhile",[$p1,$p2]];
    });
  };
};
Prelude.span = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return Fay$$list([null,null]);
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(p)(x)) ? (function($tmp1){
          if (Fay$$listLen(Fay$$_($tmp1),2)) {
            var a = Fay$$index(0,Fay$$_($tmp1));
            var b = Fay$$index(1,Fay$$_($tmp1));
            return Fay$$list([Fay$$_(Fay$$_(Fay$$cons)(x))(a),b]);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(Fay$$_(Fay$$_(Prelude.span)(p))(xs)) : Fay$$list([null,Fay$$_(Fay$$_(Fay$$cons)(x))(xs)]);
      }
      throw ["unhandled case in span",[$p1,$p2]];
    });
  };
};
Prelude.$_break = function($p1){
  return new Fay$$$(function(){
    var p = $p1;
    return Fay$$_(Prelude.span)(Fay$$_(Fay$$_(Prelude.$46$)(Prelude.not))(p));
  });
};
Prelude.zipWith = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var $tmp1 = Fay$$_($p3);
        if ($tmp1 instanceof Fay$$Cons) {
          var b = $tmp1.car;
          var bs = $tmp1.cdr;
          var $tmp1 = Fay$$_($p2);
          if ($tmp1 instanceof Fay$$Cons) {
            var a = $tmp1.car;
            var as = $tmp1.cdr;
            var f = $p1;
            return Fay$$_(Fay$$_(Fay$$cons)(Fay$$_(Fay$$_(f)(a))(b)))(Fay$$_(Fay$$_(Fay$$_(Prelude.zipWith)(f))(as))(bs));
          }
        }
        return null;
      });
    };
  };
};
Prelude.zipWith3 = function($p1){
  return function($p2){
    return function($p3){
      return function($p4){
        return new Fay$$$(function(){
          var $tmp1 = Fay$$_($p4);
          if ($tmp1 instanceof Fay$$Cons) {
            var c = $tmp1.car;
            var cs = $tmp1.cdr;
            var $tmp1 = Fay$$_($p3);
            if ($tmp1 instanceof Fay$$Cons) {
              var b = $tmp1.car;
              var bs = $tmp1.cdr;
              var $tmp1 = Fay$$_($p2);
              if ($tmp1 instanceof Fay$$Cons) {
                var a = $tmp1.car;
                var as = $tmp1.cdr;
                var f = $p1;
                return Fay$$_(Fay$$_(Fay$$cons)(Fay$$_(Fay$$_(Fay$$_(f)(a))(b))(c)))(Fay$$_(Fay$$_(Fay$$_(Fay$$_(Prelude.zipWith3)(f))(as))(bs))(cs));
              }
            }
          }
          return null;
        });
      };
    };
  };
};
Prelude.zip = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var b = $tmp1.car;
        var bs = $tmp1.cdr;
        var $tmp1 = Fay$$_($p1);
        if ($tmp1 instanceof Fay$$Cons) {
          var a = $tmp1.car;
          var as = $tmp1.cdr;
          return Fay$$_(Fay$$_(Fay$$cons)(Fay$$list([a,b])))(Fay$$_(Fay$$_(Prelude.zip)(as))(bs));
        }
      }
      return null;
    });
  };
};
Prelude.zip3 = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var $tmp1 = Fay$$_($p3);
        if ($tmp1 instanceof Fay$$Cons) {
          var c = $tmp1.car;
          var cs = $tmp1.cdr;
          var $tmp1 = Fay$$_($p2);
          if ($tmp1 instanceof Fay$$Cons) {
            var b = $tmp1.car;
            var bs = $tmp1.cdr;
            var $tmp1 = Fay$$_($p1);
            if ($tmp1 instanceof Fay$$Cons) {
              var a = $tmp1.car;
              var as = $tmp1.cdr;
              return Fay$$_(Fay$$_(Fay$$cons)(Fay$$list([a,b,c])))(Fay$$_(Fay$$_(Fay$$_(Prelude.zip3)(as))(bs))(cs));
            }
          }
        }
        return null;
      });
    };
  };
};
Prelude.unzip = function($p1){
  return new Fay$$$(function(){
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      if (Fay$$listLen(Fay$$_($tmp1.car),2)) {
        var x = Fay$$index(0,Fay$$_($tmp1.car));
        var y = Fay$$index(1,Fay$$_($tmp1.car));
        var ps = $tmp1.cdr;
        return (function($tmp1){
          if (Fay$$listLen(Fay$$_($tmp1),2)) {
            var xs = Fay$$index(0,Fay$$_($tmp1));
            var ys = Fay$$index(1,Fay$$_($tmp1));
            return Fay$$list([Fay$$_(Fay$$_(Fay$$cons)(x))(xs),Fay$$_(Fay$$_(Fay$$cons)(y))(ys)]);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(Fay$$_(Prelude.unzip)(ps));
      }
    }
    if (Fay$$_($p1) === null) {
      return Fay$$list([null,null]);
    }
    throw ["unhandled case in unzip",[$p1]];
  });
};
Prelude.unzip3 = function($p1){
  return new Fay$$$(function(){
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      if (Fay$$listLen(Fay$$_($tmp1.car),3)) {
        var x = Fay$$index(0,Fay$$_($tmp1.car));
        var y = Fay$$index(1,Fay$$_($tmp1.car));
        var z = Fay$$index(2,Fay$$_($tmp1.car));
        var ps = $tmp1.cdr;
        return (function($tmp1){
          if (Fay$$listLen(Fay$$_($tmp1),3)) {
            var xs = Fay$$index(0,Fay$$_($tmp1));
            var ys = Fay$$index(1,Fay$$_($tmp1));
            var zs = Fay$$index(2,Fay$$_($tmp1));
            return Fay$$list([Fay$$_(Fay$$_(Fay$$cons)(x))(xs),Fay$$_(Fay$$_(Fay$$cons)(y))(ys),Fay$$_(Fay$$_(Fay$$cons)(z))(zs)]);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(Fay$$_(Prelude.unzip3)(ps));
      }
    }
    if (Fay$$_($p1) === null) {
      return Fay$$list([null,null,null]);
    }
    throw ["unhandled case in unzip3",[$p1]];
  });
};
Prelude.lines = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return null;
    }
    var s = $p1;
    return (function(){
      var isLineBreak = function($p1){
        return new Fay$$$(function(){
          var c = $p1;
          return Fay$$_(Fay$$_(Fay$$or)(Fay$$_(Fay$$_(Fay$$eq)(c))("\r")))(Fay$$_(Fay$$_(Fay$$eq)(c))("\n"));
        });
      };
      return (function($tmp1){
        if (Fay$$listLen(Fay$$_($tmp1),2)) {
          var a = Fay$$index(0,Fay$$_($tmp1));
          if (Fay$$_(Fay$$index(1,Fay$$_($tmp1))) === null) {
            return Fay$$list([a]);
          }
        }
        if (Fay$$listLen(Fay$$_($tmp1),2)) {
          var a = Fay$$index(0,Fay$$_($tmp1));
          var $tmp2 = Fay$$_(Fay$$index(1,Fay$$_($tmp1)));
          if ($tmp2 instanceof Fay$$Cons) {
            var cs = $tmp2.cdr;
            return Fay$$_(Fay$$_(Fay$$cons)(a))(Fay$$_(Prelude.lines)(cs));
          }
        }
        return (function(){ throw (["unhandled case",$tmp1]); })();
      })(Fay$$_(Fay$$_(Prelude.$_break)(isLineBreak))(s));
    })();
  });
};
Prelude.unlines = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return null;
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var l = $tmp1.car;
      var ls = $tmp1.cdr;
      return Fay$$_(Fay$$_(Prelude.$43$$43$)(l))(Fay$$_(Fay$$_(Fay$$cons)("\n"))(Fay$$_(Prelude.unlines)(ls)));
    }
    throw ["unhandled case in unlines",[$p1]];
  });
};
Prelude.words = function($p1){
  return new Fay$$$(function(){
    var str = $p1;
    return (function(){
      var words$39$ = function($p1){
        return new Fay$$$(function(){
          if (Fay$$_($p1) === null) {
            return null;
          }
          var s = $p1;
          return (function($tmp1){
            if (Fay$$listLen(Fay$$_($tmp1),2)) {
              var a = Fay$$index(0,Fay$$_($tmp1));
              var b = Fay$$index(1,Fay$$_($tmp1));
              return Fay$$_(Fay$$_(Fay$$cons)(a))(Fay$$_(Prelude.words)(b));
            }
            return (function(){ throw (["unhandled case",$tmp1]); })();
          })(Fay$$_(Fay$$_(Prelude.$_break)(isSpace))(s));
        });
      };
      var isSpace = function($p1){
        return new Fay$$$(function(){
          var c = $p1;
          return Fay$$_(Fay$$_(Prelude.elem)(c))(Fay$$list(" \t\r\n\u000c\u000b"));
        });
      };
      return Fay$$_(words$39$)(Fay$$_(Fay$$_(Prelude.dropWhile)(isSpace))(str));
    })();
  });
};
Prelude.unwords = new Fay$$$(function(){
  return Fay$$_(Prelude.intercalate)(Fay$$list(" "));
});
Prelude.and = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return true;
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var x = $tmp1.car;
      var xs = $tmp1.cdr;
      return Fay$$_(Fay$$_(Fay$$and)(x))(Fay$$_(Prelude.and)(xs));
    }
    throw ["unhandled case in and",[$p1]];
  });
};
Prelude.or = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return false;
    }
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var x = $tmp1.car;
      var xs = $tmp1.cdr;
      return Fay$$_(Fay$$_(Fay$$or)(x))(Fay$$_(Prelude.or)(xs));
    }
    throw ["unhandled case in or",[$p1]];
  });
};
Prelude.any = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return false;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(Fay$$or)(Fay$$_(p)(x)))(Fay$$_(Fay$$_(Prelude.any)(p))(xs));
      }
      throw ["unhandled case in any",[$p1,$p2]];
    });
  };
};
Prelude.all = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return true;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var p = $p1;
        return Fay$$_(Fay$$_(Fay$$and)(Fay$$_(p)(x)))(Fay$$_(Fay$$_(Prelude.all)(p))(xs));
      }
      throw ["unhandled case in all",[$p1,$p2]];
    });
  };
};
Prelude.intersperse = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var sep = $p1;
        return Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.prependToAll)(sep))(xs));
      }
      throw ["unhandled case in intersperse",[$p1,$p2]];
    });
  };
};
Prelude.prependToAll = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var sep = $p1;
        return Fay$$_(Fay$$_(Fay$$cons)(sep))(Fay$$_(Fay$$_(Fay$$cons)(x))(Fay$$_(Fay$$_(Prelude.prependToAll)(sep))(xs)));
      }
      throw ["unhandled case in prependToAll",[$p1,$p2]];
    });
  };
};
Prelude.intercalate = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var xss = $p2;
      var xs = $p1;
      return Fay$$_(Prelude.concat)(Fay$$_(Fay$$_(Prelude.intersperse)(xs))(xss));
    });
  };
};
Prelude.maximum = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("maximum: empty list"));
    }
    var xs = $p1;
    return Fay$$_(Fay$$_(Prelude.foldl1)(Prelude.max))(xs);
  });
};
Prelude.minimum = function($p1){
  return new Fay$$$(function(){
    if (Fay$$_($p1) === null) {
      return Fay$$_(Prelude.error)(Fay$$list("minimum: empty list"));
    }
    var xs = $p1;
    return Fay$$_(Fay$$_(Prelude.foldl1)(Prelude.min))(xs);
  });
};
Prelude.product = function($p1){
  return new Fay$$$(function(){
    var xs = $p1;
    return Fay$$_(Fay$$_(Fay$$_(Prelude.foldl)(Fay$$mult))(1))(xs);
  });
};
Prelude.sum = function($p1){
  return new Fay$$$(function(){
    var xs = $p1;
    return Fay$$_(Fay$$_(Fay$$_(Prelude.foldl)(Fay$$add))(0))(xs);
  });
};
Prelude.scanl = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var l = $p3;
        var z = $p2;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$cons)(z))((function($tmp1){
          if (Fay$$_($tmp1) === null) {
            return null;
          }
          var $tmp2 = Fay$$_($tmp1);
          if ($tmp2 instanceof Fay$$Cons) {
            var x = $tmp2.car;
            var xs = $tmp2.cdr;
            return Fay$$_(Fay$$_(Fay$$_(Prelude.scanl)(f))(Fay$$_(Fay$$_(f)(z))(x)))(xs);
          }
          return (function(){ throw (["unhandled case",$tmp1]); })();
        })(l));
      });
    };
  };
};
Prelude.scanl1 = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Prelude.scanl)(f))(x))(xs);
      }
      throw ["unhandled case in scanl1",[$p1,$p2]];
    });
  };
};
Prelude.scanr = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        if (Fay$$_($p3) === null) {
          var z = $p2;
          return Fay$$list([z]);
        }
        var $tmp1 = Fay$$_($p3);
        if ($tmp1 instanceof Fay$$Cons) {
          var x = $tmp1.car;
          var xs = $tmp1.cdr;
          var z = $p2;
          var f = $p1;
          return (function($tmp1){
            var $tmp2 = Fay$$_($tmp1);
            if ($tmp2 instanceof Fay$$Cons) {
              var h = $tmp2.car;
              var t = $tmp2.cdr;
              return Fay$$_(Fay$$_(Fay$$cons)(Fay$$_(Fay$$_(f)(x))(h)))(Fay$$_(Fay$$_(Fay$$cons)(h))(t));
            }
            return Prelude.$_undefined;
          })(Fay$$_(Fay$$_(Fay$$_(Prelude.scanr)(f))(z))(xs));
        }
        throw ["unhandled case in scanr",[$p1,$p2,$p3]];
      });
    };
  };
};
Prelude.scanr1 = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        return null;
      }
      if (Fay$$listLen(Fay$$_($p2),1)) {
        var x = Fay$$index(0,Fay$$_($p2));
        return Fay$$list([x]);
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var x = $tmp1.car;
        var xs = $tmp1.cdr;
        var f = $p1;
        return (function($tmp1){
          var $tmp2 = Fay$$_($tmp1);
          if ($tmp2 instanceof Fay$$Cons) {
            var h = $tmp2.car;
            var t = $tmp2.cdr;
            return Fay$$_(Fay$$_(Fay$$cons)(Fay$$_(Fay$$_(f)(x))(h)))(Fay$$_(Fay$$_(Fay$$cons)(h))(t));
          }
          return Prelude.$_undefined;
        })(Fay$$_(Fay$$_(Prelude.scanr1)(f))(xs));
      }
      throw ["unhandled case in scanr1",[$p1,$p2]];
    });
  };
};
Prelude.lookup = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      if (Fay$$_($p2) === null) {
        var _key = $p1;
        return Prelude.Nothing;
      }
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        if (Fay$$listLen(Fay$$_($tmp1.car),2)) {
          var x = Fay$$index(0,Fay$$_($tmp1.car));
          var y = Fay$$index(1,Fay$$_($tmp1.car));
          var xys = $tmp1.cdr;
          var key = $p1;
          return Fay$$_(Fay$$_(Fay$$_(Fay$$eq)(key))(x)) ? Fay$$_(Prelude.Just)(y) : Fay$$_(Fay$$_(Prelude.lookup)(key))(xys);
        }
      }
      throw ["unhandled case in lookup",[$p1,$p2]];
    });
  };
};
Prelude.length = function($p1){
  return new Fay$$$(function(){
    var xs = $p1;
    return Fay$$_(Fay$$_(Prelude.length$39$)(0))(xs);
  });
};
Prelude.length$39$ = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var $tmp1 = Fay$$_($p2);
      if ($tmp1 instanceof Fay$$Cons) {
        var xs = $tmp1.cdr;
        var acc = $p1;
        return Fay$$_(Fay$$_(Prelude.length$39$)(Fay$$_(Fay$$_(Fay$$add)(acc))(1)))(xs);
      }
      var acc = $p1;
      return acc;
    });
  };
};
Prelude.reverse = function($p1){
  return new Fay$$$(function(){
    var $tmp1 = Fay$$_($p1);
    if ($tmp1 instanceof Fay$$Cons) {
      var x = $tmp1.car;
      var xs = $tmp1.cdr;
      return Fay$$_(Fay$$_(Prelude.$43$$43$)(Fay$$_(Prelude.reverse)(xs)))(Fay$$list([x]));
    }
    if (Fay$$_($p1) === null) {
      return null;
    }
    throw ["unhandled case in reverse",[$p1]];
  });
};
Prelude.print = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay(["unknown"],(function(x) { if (console && console.log) console.log(x) })(Fay$$fayToJs(["automatic"],$p1))));
  });
};
Prelude.putStrLn = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay(["unknown"],(function(x) { if (console && console.log) console.log(x) })(Fay$$fayToJs_string($p1))));
  });
};
Prelude.ifThenElse = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var b = $p3;
        var a = $p2;
        var p = $p1;
        return Fay$$_(p) ? a : b;
      });
    };
  };
};
Fay$$objConcat(Fay$$fayToJsHash,{"Just": function(type,argTypes,_obj){
  var obj_ = {"instance": "Just"};
  var obj_slot1 = Fay$$fayToJs(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  return obj_;
},"Nothing": function(type,argTypes,_obj){
  var obj_ = {"instance": "Nothing"};
  return obj_;
},"Left": function(type,argTypes,_obj){
  var obj_ = {"instance": "Left"};
  var obj_slot1 = Fay$$fayToJs(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  return obj_;
},"Right": function(type,argTypes,_obj){
  var obj_ = {"instance": "Right"};
  var obj_slot1 = Fay$$fayToJs(argTypes && (argTypes)[1] ? (argTypes)[1] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  return obj_;
},"GT": function(type,argTypes,_obj){
  var obj_ = {"instance": "GT"};
  return obj_;
},"LT": function(type,argTypes,_obj){
  var obj_ = {"instance": "LT"};
  return obj_;
},"EQ": function(type,argTypes,_obj){
  var obj_ = {"instance": "EQ"};
  return obj_;
}});
Fay$$objConcat(Fay$$jsToFayHash,{"Just": function(type,argTypes,obj){
  return new Prelude._Just(Fay$$jsToFay(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],obj["slot1"]));
},"Nothing": function(type,argTypes,obj){
  return new Prelude._Nothing();
},"Left": function(type,argTypes,obj){
  return new Prelude._Left(Fay$$jsToFay(argTypes && (argTypes)[0] ? (argTypes)[0] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],obj["slot1"]));
},"Right": function(type,argTypes,obj){
  return new Prelude._Right(Fay$$jsToFay(argTypes && (argTypes)[1] ? (argTypes)[1] : (type)[0] === "automatic" ? ["automatic"] : ["unknown"],obj["slot1"]));
},"GT": function(type,argTypes,obj){
  return new Prelude._GT();
},"LT": function(type,argTypes,obj){
  return new Prelude._LT();
},"EQ": function(type,argTypes,obj){
  return new Prelude._EQ();
}});
var FFI = {};
var Language = {};
Language.Fay = {};
Language.Fay.Yesod = {};
Language.Fay.Yesod._Text = function Text(){
};
Language.Fay.Yesod._Text.prototype.instance = "Text";
Language.Fay.Yesod.Text = new Fay$$$(function(){
  return new Language.Fay.Yesod._Text();
});
Language.Fay.Yesod.fromString = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay(["user","Text",[]],Fay$$fayToJs_string($p1));
  });
};
Language.Fay.Yesod.$_toString = function($p1){
  return new Fay$$$(function(){
    return Fay$$jsToFay_string(Fay$$fayToJs(["user","Text",[]],$p1));
  });
};
Language.Fay.Yesod._Returns = function Returns(){
};
Language.Fay.Yesod._Returns.prototype.instance = "Returns";
Language.Fay.Yesod.Returns = new Fay$$$(function(){
  return new Language.Fay.Yesod._Returns();
});
Language.Fay.Yesod.call = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      var g = $p2;
      var f = $p1;
      return Fay$$_(Fay$$_(Language.Fay.Yesod.ajaxCommand)(Fay$$_(f)(Language.Fay.Yesod.Returns)))(g);
    });
  };
};
Language.Fay.Yesod.callWithErrorHandling = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        var h = $p3;
        var g = $p2;
        var f = $p1;
        return Fay$$_(Fay$$_(Fay$$_(Language.Fay.Yesod.ajaxCommandWithErrorHandling)(Fay$$_(f)(Language.Fay.Yesod.Returns)))(g))(h);
      });
    };
  };
};
Language.Fay.Yesod.ajaxCommand = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return new Fay$$Monad(Fay$$jsToFay(["unknown"],jQuery['ajax']({ url: window['yesodFayCommandPath'], type: 'POST', data: { json: JSON.stringify(Fay$$fayToJs(["automatic"],$p1)) }, dataType: 'json', success : Fay$$fayToJs(["function",[["automatic"],["action",[["unknown"]]]]],$p2)})));
    });
  };
};
Language.Fay.Yesod.ajaxCommandWithErrorHandling = function($p1){
  return function($p2){
    return function($p3){
      return new Fay$$$(function(){
        return new Fay$$Monad(Fay$$jsToFay(["unknown"],jQuery['ajax']({ url: window['yesodFayCommandPath'], type: 'POST', data: { json: JSON.stringify(Fay$$fayToJs(["automatic"],$p1)) }, dataType: 'json', success : Fay$$fayToJs(["function",[["automatic"],["action",[["unknown"]]]]],$p2), error: Fay$$fayToJs(["action",[["unknown"]]],$p3)})));
      });
    };
  };
};
Fay$$objConcat(Fay$$fayToJsHash,{"Text": function(type,argTypes,_obj){
  var obj_ = {"instance": "Text"};
  return obj_;
},"Returns": function(type,argTypes,_obj){
  var obj_ = {"instance": "Returns"};
  return obj_;
}});
Fay$$objConcat(Fay$$jsToFayHash,{"Text": function(type,argTypes,obj){
  return new Language.Fay.Yesod._Text();
},"Returns": function(type,argTypes,obj){
  return new Language.Fay.Yesod._Returns();
}});
var SharedTypes = {};
SharedTypes._GetFib = function GetFib(slot1,slot2){
  this.slot1 = slot1;
  this.slot2 = slot2;
};
SharedTypes._GetFib.prototype.instance = "GetFib";
SharedTypes.GetFib = function(slot1){
  return function(slot2){
    return new Fay$$$(function(){
      return new SharedTypes._GetFib(slot1,slot2);
    });
  };
};
Fay$$objConcat(Fay$$fayToJsHash,{"GetFib": function(type,argTypes,_obj){
  var obj_ = {"instance": "GetFib"};
  var obj_slot1 = Fay$$fayToJs_int(_obj.slot1);
  if (undefined !== obj_slot1) {
    obj_['slot1'] = obj_slot1;
  }
  var obj_slot2 = Fay$$fayToJs(["user","Returns",[["int"]]],_obj.slot2);
  if (undefined !== obj_slot2) {
    obj_['slot2'] = obj_slot2;
  }
  return obj_;
}});
Fay$$objConcat(Fay$$jsToFayHash,{"GetFib": function(type,argTypes,obj){
  return new SharedTypes._GetFib(Fay$$jsToFay_int(obj["slot1"]),Fay$$jsToFay(["user","Returns",[["int"]]],obj["slot2"]));
}});
var Home = {};
Home.getElementById = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay(["user","Element",[]],document.getElementById(Fay$$fayToJs_string($p1))));
  });
};
Home.getAttribute = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return new Fay$$Monad(Fay$$jsToFay_string(Fay$$fayToJs(["user","Element",[]],$p2)[Fay$$fayToJs_string($p1)]));
    });
  };
};
Home.setInnerHTML = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return new Fay$$Monad(Fay$$jsToFay(["unknown"],Fay$$fayToJs(["user","Element",[]],$p1).innerHTML=Fay$$fayToJs_string($p2)));
    });
  };
};
Home.onKeyUp = function($p1){
  return function($p2){
    return new Fay$$$(function(){
      return new Fay$$Monad(Fay$$jsToFay(["unknown"],Fay$$fayToJs(["user","Element",[]],$p1).onkeyup=Fay$$fayToJs(["action",[["unknown"]]],$p2)));
    });
  };
};
Home.alert = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay(["unknown"],window.alert(Fay$$fayToJs_string($p1))));
  });
};
Home.parseInt = function($p1){
  return new Fay$$$(function(){
    return new Fay$$Monad(Fay$$jsToFay_int(window.parseInt(Fay$$fayToJs_string($p1), 10)));
  });
};
Home.main = new Fay$$$(function(){
  return Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(Home.getElementById)(Fay$$list("fibindex"))))(function($p1){
    var input = $p1;
    return Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(Home.getElementById)(Fay$$list("fibresult"))))(function($p1){
      var result = $p1;
      return Fay$$_(Fay$$_(Prelude.$36$)(Fay$$_(Home.onKeyUp)(input)))(Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(Fay$$_(Home.getAttribute)(Fay$$list("value")))(input)))(function($p1){
        var indexS = $p1;
        return Fay$$_(Fay$$_(Fay$$bind)(Fay$$_(Home.parseInt)(indexS)))(function($p1){
          var index = $p1;
          return Fay$$_(Fay$$_(Prelude.$36$)(Fay$$_(Language.Fay.Yesod.call)(Fay$$_(SharedTypes.GetFib)(index))))(Fay$$_(Fay$$_(Prelude.$46$)(Fay$$_(Home.setInnerHTML)(result)))(Prelude.show));
        });
      }));
    });
  });
});

;
Fay$$_(Home.main);


})();
