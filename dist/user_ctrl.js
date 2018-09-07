'use strict';

System.register(['app/core/config', 'app/fetures/templating/variable_srv', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var config, VariableSrv, PanelCtrl, _createClass, ClockCtrl;

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
    }, function (_appFeturesTemplatingVariable_srv) {
      VariableSrv = _appFeturesTemplatingVariable_srv.default;
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

        function ClockCtrl($scope, $injector) {
          _classCallCheck(this, ClockCtrl);

          console.log("Constructor...");
          console.log(config.bootData.user);

          var _this = _possibleConstructorReturn(this, (ClockCtrl.__proto__ || Object.getPrototypeOf(ClockCtrl)).call(this, $scope, $injector));

          //this.updateClock();
          console.log(config);
          console.log(_this);
          console.log(_this.VariableSrv);
          console.log(_this.dashboard.templating);
          console.log('end....');

          _this.updateVarable('username', 'aasss');
          return _this;
        }

        _createClass(ClockCtrl, [{
          key: 'updateUserVariable',
          value: function updateUserVariable() {
            //this.time = moment().format('hh:mm:ss');
            //this.$timeout(() => { this.updateClock(); }, 1000);

          }
        }, {
          key: 'updateVarable',
          value: function updateVarable(varname, path) {
            console.log('update variable', varname, path);
            var v = _.find(this.variableSrv.variables, function (check) {
              return check.name === varname;
            });
            if (v) {
              this.variableSrv.setOptionAsCurrent(v, {
                text: path,
                value: path
              });
              this.variableSrv.variableUpdated(v, true);
            }
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
