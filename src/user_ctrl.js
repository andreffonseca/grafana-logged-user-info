import config from 'app/core/config';
import {PanelCtrl} from 'app/plugins/sdk';
import moment from 'moment';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    this.updateClock();
  }

  updateClock() {
    this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);

    console.log(config);
  }
}

ClockCtrl.templateUrl = 'module.html';