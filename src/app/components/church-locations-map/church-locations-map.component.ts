import { Component, Input } from '@angular/core';
import {geoEqualEarth, geoNaturalEarth1, geoPath} from 'd3';
import {HttpClient} from '@angular/common/http';
import { FeatureCollection } from 'geojson';

@Component({
    selector: 'app-church-locations-map',
    templateUrl: './church-locations-map.component.html',
    styleUrls: ['./church-locations-map.component.scss']
})
export class ChurchLocationsMapComponent {
    @Input() width = 400;
    @Input() height = 1000;

    constructor(private http: HttpClient) {}

    public data$ = this.getData();
    private projection = geoNaturalEarth1().center([-67, -37]).scale(1400).translate([this.width/2, this.height/2]);
    public path = geoPath(this.projection);

    private getData() {
        const jsonUrl = 'https://raw.githubusercontent.com/TortugaGris/chile-geojson/master/regiones.json';
        return this.http.get<FeatureCollection>(jsonUrl);
    }
}
