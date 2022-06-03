import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent, SafePipe } from "./app.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [SafePipe, AppComponent],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
