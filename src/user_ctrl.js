import config from 'app/core/config';
import {PanelCtrl} from 'app/plugins/sdk';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {

    console.log("Constructor...");
    console.log(config.bootData.user);
    super($scope, $injector);
    //this.updateClock();
    console.log(config);
    console.log(this);
    console.log(this.variableSrv);
    console.log(this.dashboard.templating);
    console.log('end....');

    this.updateVarable('username','aasss');
  }

  updateUserVariable() {
    //this.time = moment().format('hh:mm:ss');
    //this.$timeout(() => { this.updateClock(); }, 1000);
    
  }

  updateVarable(varname, path) {
    console.log('update variable', varname, path );
    let v = _.find(this.variableSrv.variables, check => {
      return check.name === varname;
    });
    if(v) {
      this.variableSrv.setOptionAsCurrent(v, {
        text: path,
        value: path,
      });
      this.variableSrv.variableUpdated(v, true);
    }
}
}

ClockCtrl.templateUrl = 'module.html';