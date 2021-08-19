import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

interface MenuItem {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  dark = false;
  menuItems: MenuItem[];

  // translations
  backText = 'Go back';
  influencerText = 'Influencers';
  noteText = 'Notes';
  aboutText = 'About';

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initTranslate();
    this.initApp();
    this.initMenuItems();
  }

  private initTranslate(): void {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.getTranslationTexts();
  }

  private initApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private initMenuItems() {
    this.menuItems = [
      {
        title: this.influencerText,
        url: '/app/tabs/influencers',
        icon: 'people',
      },
      {
        title: this.noteText,
        url: '/app/tabs/notes',
        icon: 'book',
      },
      {
        title: this.aboutText,
        url: '/app/tabs/about',
        icon: 'information-circle',
      },
    ];
  }

  private getTranslationTexts(): void {
    this.translate.get(['BACK_BUTTON_TEXT', 'Influencer', 'Notes', 'About']).subscribe((values) => {
      this.backText = values.BACK_BUTTON_TEXT;
      this.influencerText = values.influencerText;
      this.noteText = values.noteText;
      this.aboutText = values.aboutText;
    });
  }
}
