import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisModel } from '../animais.interface';
import { DataService } from '../data.service';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-apadrinhar',
  templateUrl: './apadrinhar.component.html',
  styleUrls: ['./apadrinhar.component.css']
})
export class ApadrinharComponent implements OnInit {

  animaisApadrinharList: any;


  constructor(private animaisService: AnimaisService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {

    this.animaisService.getAnimiais().subscribe(
      (data) => {
        console.log(data);
        this.animaisApadrinharList = data
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToDetalhesByState(animaisData: AnimaisModel) {
    this.router.navigateByUrl('/detalhes', {
    state: { animaisData: animaisData }
    })
  }
}
