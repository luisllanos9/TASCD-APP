import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private oneSignal: OneSignal) { }

  InitialConfiguration() {
    this.oneSignal.startInit('44ebf5dd-4ee8-4dec-972d-e44289f2beca', '553953274955');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
      // do something when notification is received
      console.log('Notificacion R ');
    });

    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      // do something when a notification is opened
      console.log('Notificacion O ');
    });

    this.oneSignal.endInit();
  }


}
