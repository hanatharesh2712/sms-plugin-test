import { Component } from '@angular/core';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public smsTextmessage: string = '';
  public appHashString: string = '';
  public readonly isAndroid: boolean = false;
  constructor(private smsRetriever: SmsRetriever, private platform: Platform) {
      this.isAndroid = platform.is('android');
  }
  getHashCode() {
    this.smsRetriever.getAppHash()
      .then((res: any) => {
        this.appHashString = res;
        console.log(res);
      })
      .catch((error: any) => console.error(error));
  }

  getSMS() {
    this.smsRetriever.startWatching()
      .then((res: any) => {
        this.smsTextmessage = res.Message;
        console.log(res);
      })
      .catch((error: any) => console.error(error));
  }
}
