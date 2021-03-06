'use strict';

System.register(['app/core/config', 'app/core/core', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var config, coreModule, PanelCtrl, _createClass, ClockCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_appCoreCore) {
      coreModule = _appCoreCore.coreModule;
    }, function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('ClockCtrl', ClockCtrl = function (_PanelCtrl) {
        _inherits(ClockCtrl, _PanelCtrl);

        function ClockCtrl($scope, $injector, datasourceSrv, variableSrv) {
          _classCallCheck(this, ClockCtrl);

          console.log("Constructor...");
          console.log(config.bootData.user);

          var _this = _possibleConstructorReturn(this, (ClockCtrl.__proto__ || Object.getPrototypeOf(ClockCtrl)).call(this, $scope, $injector));

          //this.updateClock();
          console.log(variableSrv);
          //console.log(this.dashboard.templating);
          console.log('end....');

          var v = _.find(variableSrv.variables, function (check) {
            return check.name === 'username';
          });
          if (v) {
            variableSrv.setOptionAsCurrent(v, {
              text: 'andreffonseca',
              value: 'andreffonseca'
            });
            variableSrv.variableUpdated(v, true);
          }

          _this.updateUserVariable('username', 'it170302');
          return _this;
        }

        _createClass(ClockCtrl, [{
          key: 'updateUserVariable',
          value: function updateUserVariable(varname, path) {
            console.log('update variable', varname, path);
          }
        }]);

        return ClockCtrl;
      }(PanelCtrl));

      _export('ClockCtrl', ClockCtrl);

      ClockCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=user_ctrl.js.map
