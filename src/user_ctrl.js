import config from 'app/core/config';
import {PanelCtrl} from 'app/plugins/sdk';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {

    console.log("Constructor...");
    console.log(config);
    super($scope, $injector);
    this.updateClock();

  }

  updateClock() {
    //this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);
  }
}

ClockCtrl.templateUrl = 'module.html';