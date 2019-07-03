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
import Overlay from 'ol/Overlay';
import { click } from 'ol/events/condition';
import Select from 'ol/interaction/Select';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  @ViewChild('slickModal') element;

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
  places = [
    {
      id: 1,
      label: 'Εκκλησία',
      location: fromLonLat([20.2569615, 39.4613958]),
      googlemapspath:
        `https://www.google.com/maps/dir/''/%CE%91%CE%B3%CE%AF%CE%B1+%CE%A0%CE%B1%CF%81%CE%B1%CF%83%CE%BA%CE%B5%CF%85%CE%AE,+%CE%` +
        `A3%CF%8D%CE%B2%CE%BF%CF%84%CE%B1+461+00/@39.4600705,20.2444492,13z/data=!4m14!4m13!1m5!1m1!1s0x135c81e985caee5b:0x6c83d0a260` +
        `771205!2m2!1d20.2569809!2d39.4613348!1m5!1m1!1s0x135c81e985caee5b:0x6c83d0a260771205!2m2!1d20.2569809!2d39.4613348!3e3">`
    },
    {
      id: 2,
      label: 'Κώστας',
      location: fromLonLat([20.303232, 39.454724]),
      googlemapspath:
        'https://www.google.com/maps/place/39.454724,20.303232/data=!4m6!3m5!1s0' +
        '!7e2!8m2!3d39.4547245!4d20.3032319?utm_source=mstt_1'
    },
    {
      id: 3,
      label: 'Νάνσυ',
      location: fromLonLat([20.2810581, 39.4532962]),
      googlemapspath:
        'https://www.google.com/maps/place/Sunny+Garden+Villa/@39.4532962,20.2810581,15z/' +
        'data=!4m2!3m1!1s0x0:0xb8314c17b84fad2d?sa=X&ved=2ahUKEwjprZ_v0pDjAhVGYVAKHRHcANwQ_BIwD3oECA4QCA'
    },
    {
      id: 4,
      label: 'Δεξίωση',
      location: fromLonLat([20.2338221, 39.4177052]),
      googlemapspath:
        `https://www.google.com/maps/place/Sun+Bar+-+Dei+Beach/@39.4177052,20.2338221,15.96z/data=!4m5!3m4!1s0x135c83e15ef1` +
        `db3f:0xbd8720318e94601e!8m2!3d39.4165575!4d20.2314071`
    }
  ];

  constructor() { }

  ngOnInit() {
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../../assets/marker-icon.png'
      })
    });
    const vectorSource = new Vector({
      features: this.createFeatures(this.places)
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

    // add labels for each place
    this.places.forEach(place => this.addLabel(place));

    const select = new Select({
      condition: click
    });

    select.on('select', evt => {
      // if a place is selected
      if (evt.selected && evt.selected.length > 0) {
        const selectedFeature = evt.selected[0];
        selectedFeature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              opacity: 0.75,
              src: '../../assets/marker-icon.png'
            })
          })
        );
        const place = this.places.filter(
          p => p.id === selectedFeature.getId()
        )[0];
        window.open(place.googlemapspath, '_blank');
      }
    });

    this.map.addInteraction(select);
  }

  slickInit(s: any) {
    s.slick.slickPlay();
  }

  createFeatures(places: any[]): Feature[] {
    return places.map(place => {
      const feature = new Feature({ geometry: new Point(place.location) });
      feature.setId(place.id);
      return feature;
    });
  }

  addLabel(place: any): Overlay {
    const div = document.createElement('div');
    div.innerHTML = place.label;
    div.className = 'markerTitle';
    const label = new Overlay({
      position: place.location,
      element: div
    });
    this.map.addOverlay(label);
  }
}
