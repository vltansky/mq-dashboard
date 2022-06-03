import {
  Component,
  Pipe,
  PipeTransform,
  OnInit,
  ViewChild,
} from "@angular/core";
import { SwiperOptions } from "swiper";
import { SwiperComponent } from "swiper/angular";
import { DomSanitizer } from "@angular/platform-browser";
import { EndPointService } from "./end-point.service";
import { GraphSite } from "./GraphSite";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

@Pipe({ name: "safe" })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("swiperSlideShow", { static: false })
  swiperSlideShow?: SwiperComponent;

  endPoints: GraphSite[] = [];

  config: SwiperOptions = {
    slidesPerView: 3,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    spaceBetween: 30,
  };

  constructor(private endPointService: EndPointService) {}

  ngOnInit() {
    this.getEndPoints();
  }

  ngAfterViewInit(): void {
    console.log(this.swiperSlideShow?.swiperRef.autoplay);
  }

  getEndPoints() {
    this.endPointService
      .getEndPoints()
      .subscribe((endPoints) => (this.endPoints = endPoints));
  }

  startCarousell() {
    this.swiperSlideShow?.swiperRef.autoplay.start();
  }

  stopCarousell() {
    this.swiperSlideShow?.swiperRef.autoplay.stop();
  }
}
