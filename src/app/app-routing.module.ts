import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SettingComponent} from "./components/setting/setting.component";
import {SearchComponent} from "./components/search/search.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {ChatComponent} from "./components/chat/chat.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
