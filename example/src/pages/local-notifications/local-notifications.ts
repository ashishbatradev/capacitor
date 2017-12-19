import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Plugins,
  LocalNotificationScheduled
} from '@avocadojs/core';

/**
 * Generated class for the LocalNotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {
  notif: LocalNotificationScheduled;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  async scheduleLocalNotification() {
    var now = new Date();
    this.notif = await Plugins.LocalNotifications.schedule({
      title: 'Get 20% off!',
      body: 'Swipe to learn more',
      identifier: 'special-deal',
      scheduleAt: {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds() + 10
      },
      repeat: {
        every: 'day',
        times: 5
      },
      actions: [
        { id: 'clear', title: 'Clear' },
        { id: 'snooze', title: 'Snooze' }
      ]
    });
  }

  cancelNotification() {
    this.notif && Plugins.LocalNotifications.cancel([this.notif.id]);
  }

}