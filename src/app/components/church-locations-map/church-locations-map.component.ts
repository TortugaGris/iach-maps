import { Component, Input } from '@angular/core';
import { json } from 'd3';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-church-locations-map',
    templateUrl: './church-locations-map.component.html',
    styleUrls: ['./church-locations-map.component.scss']
})
export class ChurchLocationsMapComponent {
    @Input() width = 440;
    @Input() height = 300;

    constructor(private http: HttpClient) {

    }

    public data$ = this.getData();

    private getData() {
        const jsonUrl = 'https://raw.githubusercontent.com/TortugaGris/chile-geojson/master/regiones.json';
        return this.http.get(jsonUrl);
    }
}
