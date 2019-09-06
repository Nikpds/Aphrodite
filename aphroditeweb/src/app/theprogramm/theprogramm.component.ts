import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theprogramm',
  templateUrl: './theprogramm.component.html',
  styleUrls: ['./theprogramm.component.sass']
})
export class TheprogrammComponent implements OnInit {
  beachesPath =
    `https://www.google.com/travel/things-to-do/see-all?g2lb=4208993%2C4223281%2C4242` +
    `898%2C4252106%2C4253230%2C4254308%2C4258168%2C4260007%2C4262509%2C4264355%2C4265959&hl=en&gl` +
    `=gr&un=1&ved=2ahUKEwjs_r25i-fiAhVB3KQKHWgyDJ0QuL0BMBl6BAgMEBE&ictx=1&dest_src=ts&dest_state_type=satt` +
    `d&biw=412&bih=718&dest_mid=%2Fm%2F0fv16b`;
  foodPath = `https://www.tripadvisor.com.gr/Restaurants-g608863-Syvota_Thesprotia_Region_Epirus.html`;
  barsPath = `https://www.tripadvisor.com.gr/Attractions-g189452-Activities-c20-t99-Parga_Preveza_Region_Epirus.html`;
  churchPath =
    `https://www.google.com/maps/dir//39.462046,20.257348/@39.4592507,20.255749,16.75z/data=!4m2!4m1!3e0`;
  kostasPath =
    'https://www.google.com/maps/place/39.454724,20.303232/data=!4m6!3m5!1s0' +
    '!7e2!8m2!3d39.4547245!4d20.3032319?utm_source=mstt_1';
  nansyPath =
    'https://www.google.com/maps/place/Sunny+Garden+Villa/@39.4532962,20.2810581,15z/' +
    'data=!4m2!3m1!1s0x0:0xb8314c17b84fad2d?sa=X&ved=2ahUKEwjprZ_v0pDjAhVGYVAKHRHcANwQ_BIwD3oECA4QCA';
  ktimaPath =
    `https://www.google.com/maps/place/Sun+Bar+-+Dei+Beach/@39.4177052,20.2338221,15.96z/data=!4m5!3m4!1s0x135c83e15ef1` +
    `db3f:0xbd8720318e94601e!8m2!3d39.4165575!4d20.2314071`;
  constructor() { }

  ngOnInit() { }
}
