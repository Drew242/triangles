import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class TriangleService {
    private baseUrl = 'http://localhost:8080/api/triangles';
    data: any = [];

    constructor(private http: Http) {
    }

    getData() {
      return this.http.get(`${this.baseUrl}`)
          .map((response: Response) => response.json());
    }

    getTriangles() {
      this.getData()
          .subscribe(data => {
              this.data = data;
          });
      return this.data;
    }

    getTriangle(triangle_id) {
      return this.http.get(`${this.baseUrl}/${triangle_id}`)
          .map((response: Response) => response.json());
    }
}
