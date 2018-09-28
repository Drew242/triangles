import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class TriangleService {
    private baseUrl = 'http://localhost:55398/api/triangles';

    constructor(private http: Http) {
    }

    getTriangles() {
      return this.http.get(`${this.baseUrl}`)
          .map((response: Response) => response);
    }

    getTriangle(triangle_id) {
      return this.http.get(`${this.baseUrl}/${triangle_id}`)
          .map((response: Response) => response);
    }
}
