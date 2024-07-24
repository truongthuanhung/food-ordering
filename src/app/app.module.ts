import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhoneIconComponent } from './components/icons/phone-icon/phone-icon.component';
import { EmailIconComponent } from './components/icons/email-icon/email-icon.component';
import { TwitterIconComponent } from './components/icons/twitter-icon/twitter-icon.component';
import { FacebookIconComponent } from './components/icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from './components/icons/instagram-icon/instagram-icon.component';
import { GithubIconComponent } from './components/icons/github-icon/github-icon.component';
import { LogoComponent } from './components/icons/logo/logo.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeMenuItemComponent } from './components/home-menu-item/home-menu-item.component';
import { TeaIconComponent } from './components/icons/tea-icon/tea-icon.component';
import { DishIconComponent } from './components/icons/dish-icon/dish-icon.component';
import { DrinkIconComponent } from './components/icons/drink-icon/drink-icon.component';
import { DessertIconComponent } from './components/icons/dessert-icon/dessert-icon.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { FeedbackItemComponent } from './components/feedback-item/feedback-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IconsProviderModule } from './icons-provider.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxSonnerToaster } from 'ngx-sonner';
import { LoginComponent } from './pages/login/login.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PhoneIconComponent,
    EmailIconComponent,
    TwitterIconComponent,
    FacebookIconComponent,
    InstagramIconComponent,
    GithubIconComponent,
    LogoComponent,
    MainLayoutComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HomeMenuItemComponent,
    TeaIconComponent,
    DishIconComponent,
    DrinkIconComponent,
    DessertIconComponent,
    ServiceItemComponent,
    FeedbackItemComponent,
    MenuComponent,
    BlogComponent,
    ContactComponent,
    BookingComponent,
    LoginComponent,
    BlogDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NgxSonnerToaster,
    NzInputModule,
    IconsProviderModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
