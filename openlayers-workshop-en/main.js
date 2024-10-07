import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';

new Map({
  target: 'map-container',
  layers: [
    new TileLayer({
        source: new OSM({
            attributions: '&copy; BG Mountains contributors!',
            url:'https://bgmtile.kade.si/{z}/{x}/{y}.png',
          }),
    }),
  ],
  view: new View({
    center: fromLonLat([25, 43]),
    zoom: 8,
  }),
});