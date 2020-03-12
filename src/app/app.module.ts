import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
// import { FooterComponent } from './component/footer/footer.component';
// import { MainBottomDropmenuComponent } from './component/partials-menu/main-bottom-dropmenu/main-bottom-dropmenu.component';
// import { SwiperSlideComponent } from './component/swiper-slide/swiper-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // FooterComponent,
    // MainBottomDropmenuComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
