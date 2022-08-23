import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-apadrinhar',
  templateUrl: './apadrinhar.component.html',
  styleUrls: ['./apadrinhar.component.css']
})
export class ApadrinharComponent implements OnInit {

  constructor(private animaisService: AnimaisService) { }

  ngOnInit(): void {

    this.animaisService.getAnimiais().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
