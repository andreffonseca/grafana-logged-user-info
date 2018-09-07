import config from 'app/core/config';
import {coreModule} from 'app/core/core';
import {PanelCtrl} from 'app/plugins/sdk';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector, datasourceSrv,  variableSrv) {

    console.log("Constructor...");
    console.log(config.bootData.user);
    super($scope, $injector);
    //this.updateClock();
    /*console.log(config);*/
    console.log(variableSrv);
    //console.log(this.dashboard.templating);
    console.log('end....');
    updateUserVariable('username','it170302')
  }

  updateUserVariable(varname, path) {
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