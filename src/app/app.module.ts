import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './components/profile/profile.component';
import { PanelComponent } from './components/panel/panel.component';
import { SettingComponent } from './components/setting/setting.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { SliderComponent } from './components/slider/slider.component';
import {TouchDirective} from "./directives/touch.directive";
import { PlayDirective } from './directives/play.directive';
import {HttpClientModule} from "@angular/common/http";
import { NotificationComponent } from './components/notification/notification.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PanelComponent,
    SettingComponent,
    SearchComponent,
    ContentComponent,
    SliderComponent,
    TouchDirective,
    PlayDirective,
    NotificationComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
