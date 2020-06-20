import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class MusicaService {
    constructor(private http: HttpClient) { }
    
    async consultarCanciones() {
        return this.http.get<any>('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b284db959637031077380e7e2c6f2775&format=json');
    }
}