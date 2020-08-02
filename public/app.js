(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    var val = aliases[name];
    return (val && name !== val) ? expandAlias(val) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/App.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Speedometer = require('./Speedometer');

var _Speedometer2 = _interopRequireDefault(_Speedometer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: 'Main' },
        _react2.default.createElement(_Speedometer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

});

require.register("components/Speedometer.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Store = require('./Store.js');

var _Store2 = _interopRequireDefault(_Store);

var _reactSwitchButton = require('react-switch-button');

var _reactSwitchButton2 = _interopRequireDefault(_reactSwitchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Speedometer = function (_React$Component) {
  _inherits(Speedometer, _React$Component);

  function Speedometer(props) {
    _classCallCheck(this, Speedometer);

    var _this = _possibleConstructorReturn(this, (Speedometer.__proto__ || Object.getPrototypeOf(Speedometer)).call(this, props));

    _this.state = {
      speed: 0,
      accuracy: 10,
      unit: true,
      geoStatus: false
    };
    return _this;
  }

  _createClass(Speedometer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (p) {
          return _this2._onPosition(p);
        }, function (err) {
          return _this2._onErrorPosition(err);
        }, { enableHighAccuracy: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var speed = this._setSpeed();
      var geoStatus = this.state.geoStatus ? 'on' : 'off';
      var accuracy = Math.min(this.state.accuracy, 50);
      var angleLimit = 180;
      var angleFactorOne = 1.5;
      var angleFactorTwo = .4;
      var angle = 0;
      if (speed < angleLimit) {
        angle = speed % angleLimit * angleFactorOne;
      } else {
        angle = angleLimit * angleFactorOne + (speed - angleLimit) * angleFactorTwo;
      }
      angle = Math.min(angle, 340);
      return _react2.default.createElement(
        'div',
        { className: 'Speedometer' },
        _react2.default.createElement(
          'div',
          { className: 'Speedometer-speed' },
          _react2.default.createElement(
            'div',
            { className: 'Speedometer-status' },
            _react2.default.createElement('div', { className: 'Speedometer-accuracy',
              style: { transform: 'scale(' + accuracy / 40 + ')' } }),
            _react2.default.createElement('div', { className: "Speedometer-led Speedometer-led--" + geoStatus })
          ),
          speed,
          _react2.default.createElement(_reactSwitchButton2.default, {
            theme: 'Speedometer-unit',
            name: 'switch-units',
            label: 'mph',
            labelRight: 'km/h',
            checked: this.state.unit ? 'checked' : '',
            onChange: function onChange(e) {
              return _this3._onSwitch(e);
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Speedometer-speedo' },
          _react2.default.createElement('div', {
            className: 'Speedometer-arrow',
            style: { transform: 'rotate(' + angle + 'deg)' } })
        )
      );
    }
  }, {
    key: '_onPosition',
    value: function _onPosition(position) {
      this.setState({
        speed: position.coords.speed,
        accuracy: position.coords.accuracy,
        geoStatus: true
      });
    }
  }, {
    key: '_onErrorPosition',
    value: function _onErrorPosition(error) {
      this.setState({
        geoStatus: false
      });
    }
  }, {
    key: '_onSwitch',
    value: function _onSwitch(evt) {
      var checked = evt.currentTarget.checked;
      this.setState({
        unit: checked
      });
    }
  }, {
    key: '_setSpeed',
    value: function _setSpeed() {
      var speed = this.state.speed;
      // if speed is null OR
      // if accuracy is not accurate
      if (speed == null || this.state.accuracy >= 30) {
        return 0;
      }
      // speed is meter per second, convert kmh
      speed *= 3.6;
      // if !unit, convert to mph
      if (!this.state.unit) {
        speed /= 1.609344;
      }
      return parseFloat(speed).toFixed(0);
    }
  }]);

  return Speedometer;
}(_react2.default.Component);

Speedometer.displayName = 'Speedometer';

exports.default = (0, _Store2.default)(Speedometer, ['unit']);

});

require.register("components/Store.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Based on marklundin/react-localstorage-hoc
  Add `keys` parameters to store only desired keys, not whole state
*/

/*
  A higher order function that wraps a component with functionality
  that save's it's state to local storage. This means the components state
  will persist across page refreshes under the same domain and rules of localStorage.
*/

/*
  Global if localStorage is available on the system
*/

var hasLocalStorage = localStorage;

if (hasLocalStorage) {
  var testKey = 'react-localstorage.hoc.test-key';
  try {
    // Access to global `localStorage` property must be guarded as it
    // fails under iOS private session mode.
    localStorage.setItem(testKey, 'foo');
    localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorage = false;
  }
}

/*
  A HOC function that accepts a component and wraps it in another Component that saves it's state to local storage
*/

var WrapWithLocalStorate = function WrapWithLocalStorate(Component, keys) {

  // Return Component if no localStorage is available
  if (!hasLocalStorage) return Component;

  var name = Component.displayName;

  var LocalStorageComponent = function (_Component) {
    _inherits(LocalStorageComponent, _Component);

    function LocalStorageComponent() {
      _classCallCheck(this, LocalStorageComponent);

      var _this = _possibleConstructorReturn(this, (LocalStorageComponent.__proto__ || Object.getPrototypeOf(LocalStorageComponent)).call(this));

      _this.keys = keys;
      return _this;
    }

    _createClass(LocalStorageComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var ls = localStorage.getItem(name);
        if (ls) {
          this.setState(JSON.parse(ls));
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(name, JSON.stringify(this._filterKeys(nextState)));
      }
    }, {
      key: '_filterKeys',
      value: function _filterKeys(state) {
        var newState = {};
        if (this.keys) {
          var obj = {};
          this.keys.map(function (k) {
            return obj[k] = state[k];
          });
          newState = obj;
        } else {
          newState = state;
        }
        return newState;
      }
    }]);

    return LocalStorageComponent;
  }(Component);

  LocalStorageComponent.displayName = name;

  return LocalStorageComponent;
};

exports.default = WrapWithLocalStorate;

});

require.register("initialize.js", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.querySelector('#app'));
});

// register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

});

;require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');

