import config from 'app/core/config';
import {coreModule} from 'app/core/core';
import {PanelCtrl} from 'app/plugins/sdk';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector, datasourceSrv,  variableSrv) {

    console.log("Constructor...");
    console.log(config.bootData.user);
    super($scope, $injector);
    //this.updateClock();
    console.log(variableSrv);
    //console.log(this.dashboard.templating);
    console.log('end....');

    let v = _.find(variableSrv.variables, check => {
      return check.name === 'username';
    });
    if(v) {
      variableSrv.setOptionAsCurrent(v, {
        text: 'andreffonseca',
        value: 'andreffonseca',
      });
      variableSrv.variableUpdated(v, true);
    }

    this.updateUserVariable('username','it170302');
  }

  updateUserVariable(varname, path) {
    console.log('update variable', varname, path );
     
  }

}

ClockCtrl.templateUrl = 'module.html';