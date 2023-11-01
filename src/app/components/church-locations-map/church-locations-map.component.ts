import { Component, Input } from '@angular/core';
import {geoEqualEarth, geoNaturalEarth1, geoPath} from 'd3';
import {HttpClient} from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { combineLatest, map } from 'rxjs';

interface ChurchData {
    city: string;
    name: string;
    diocesis: string;
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-church-locations-map',
    templateUrl: './church-locations-map.component.html',
    styleUrls: ['./church-locations-map.component.scss']
})
export class ChurchLocationsMapComponent {
    @Input() width = 1600;
    @Input() height = 4000;
    @Input() markRadius = 5;

    constructor(private http: HttpClient) {}

    public data$ = combineLatest([
        this.getMapData(),
        this.getChurchData(),
    ]).pipe(
        map(([map, church]) => ({map, church}))
    );

    public projection = geoNaturalEarth1().center([-67, -37]).scale(5600).translate([this.width/2, this.height/2]);
    public path = geoPath(this.projection);

    private getMapData() {
        const jsonUrl = 'https://raw.githubusercontent.com/TortugaGris/chile-geojson/master/regiones.json';
        return this.http.get<FeatureCollection>(jsonUrl);
    }

    private getChurchData() {
        const jsonUrl = '/assets/data/iach-locations.json'
        return this.http.get<ChurchData[]>(jsonUrl);
    }
}
