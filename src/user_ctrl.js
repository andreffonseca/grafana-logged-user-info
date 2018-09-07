import config from 'app/core/config';
import { VariableSrv } from 'app/features/all';
import {PanelCtrl} from 'app/plugins/sdk';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {

    console.log("Constructor...");
    console.log(config.bootData.user);
    super($scope, $injector);
    //this.updateClock();
    console.log(config);
    console.log(this);
    console.log(VariableSrv);
    console.log(this.dashboard.templating);
    console.log('end....');
  }

  updateUserVariable() {
    //this.time = moment().format('hh:mm:ss');
    //this.$timeout(() => { this.updateClock(); }, 1000);
    
  }

}

ClockCtrl.templateUrl = 'module.html';