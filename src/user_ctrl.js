import config from 'app/core/config';
import {PanelCtrl} from 'app/plugins/sdk';
import moment from 'moment';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    console.log("Constructor...");
    console.log(config);
    super($scope, $injector);
    this.updateClock();
  }

  updateClock() {
    console.log("update funtion...");
    this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);
  }
}

ClockCtrl.templateUrl = 'module.html';