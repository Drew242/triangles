import { Component, OnInit } from '@angular/core';

import { Triangle } from './triangle';
import { triangles } from './triangles';
import { TriangleService } from './triangle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  triangles: Triangle[] = [];
  title: String         = 'Cherwell Coding Exercise';
  by: String            = 'Drew Conly';
  gridName: String      = 'Triangles';
  infoName: String      = 'Info';
  triangleCoordinates;
  namedTriangle;

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
    this.triangleService.getTriangles()
      .subscribe(data => {
        console.log(data);
        this.triangles = data.json();
        console.log(this.triangles);
    });
  }
}
