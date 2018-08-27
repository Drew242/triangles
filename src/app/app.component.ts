import { Component, OnInit } from '@angular/core';

import { triangles } from './triangles';
import { TriangleService } from './triangle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  triangles           = triangles;
  title               = 'Cherwell Coding Exercise';
  by                  = 'Drew Conly';
  gridName            = 'Triangles';
  infoName            = 'Info';
  triangleCoordinates;
  namedTriangle;
  selectedName;
  selectedCoordinates;

  findCoordinates(i) {
    console.log(i);
    this.triangleCoordinates = triangles[i].coordinates;
  }

  findTriangle(i) {
    console.log(i);
    this.namedTriangle = triangles[i].name;
  }

  constructor(private triangleService: TriangleService) { }

  ngOnInit() {
    this.triangles = triangles;
  }
}
