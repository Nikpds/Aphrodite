import { Component, OnInit, ViewChild } from '@angular/core';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import Vector from 'ol/source/Vector';
import OlTileLayer from 'ol/layer/Tile';
import OlVectorLayer from 'ol/layer/Vector';
import OlView from 'ol/View';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  @ViewChild('slickModal') element;
  googlemapspath = `https://www.google.com/maps/dir/''/%CE%91%CE%B3%CE%AF%CE%B1+%CE%A0%CE%B1%CF%81%CE%B1%CF%83%CE%BA%CE%B5%CF%85%CE%AE` +
    `,+%CE%A3%CF%8D%CE%B2%CE%BF%CF%84%CE%B1+461+00/@39.4600705,20.2444492,13z/data=!4m14!4m13!1m5!1m1!1s0x135c81e985caee5b:0x6c83d0a260` +
    `771205!2m2!1d20.2569809!2d39.4613348!1m5!1m1!1s0x135c81e985caee5b:0x6c83d0a260771205!2m2!1d20.2569809!2d39.4613348!3e3">`;
  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;
  slides = [
    { img: '../../assets/photos/SID_2825.jpg' },
    { img: '../../assets/photos/SID_2206.jpg' },
    { img: '../../assets/photos/SID_2802.jpg' },
    { img: '../../assets/photos/SID_3216.jpg' },
    { img: '../../assets/photos/SID_2756.jpg' },
    { img: '../../assets/photos/SID_2581.jpg' }
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    draggable: false
  };
  constructor() { }

  ngOnInit() {

    const church = new Feature({
      text: 'asdasd',
      geometry: new Point(
        fromLonLat([20.2569615, 39.4613958])
      ),  // Cordinates of New York's Town Hall
    });
    const kostasHome = new Feature({
      geometry: new Point(
        fromLonLat([20.303232, 39.454724])
      ),  // Cordinates of New York's Town Hall
    });
    const nansyHome = new Feature({
      geometry: new Point(
        fromLonLat([20.2810581, 39.4532962])
      ),  // Cordinates of New York's Town Hall
    });

    const iconStyle = new Style({
      image: new Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../../assets/marker-icon.png',
        text: 'asdasd'
      })),

    });
    const vectorSource = new Vector({
      features: [nansyHome, kostasHome, church]
    });
    const markerVectorLayer = new OlVectorLayer({
      source: vectorSource,
      style: iconStyle
    });
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: fromLonLat([20.2619615, 39.4613958]),
      zoom: 12
    });

    this.map = new OlMap({
      target: 'invitation-map',
      layers: [this.layer, markerVectorLayer],
      view: this.view
    });

  }

  slickInit(s: any) {
    s.slick.slickPlay();
  }
}
