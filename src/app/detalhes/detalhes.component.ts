import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisModel } from '../animais.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  mockAnimais: AnimaisModel = {
    adotado: false,
    altura: "20 cm",
    apadrinhado: false,
    cor: "Branco",
    historia: "Essa raça originou-se do cruzamento do Lhasa Apso (Tibet) com o Pequinês (China) há muitos séculos.",
    id: 1,
    idade: "1 ano",
    nome: "Mel",
    observacao: "Brincalhão, Astuto, Extrovertido, Amigável, Vivaz",
    pelo: "Longo",
    peso: "8 kg",
    porte: "Pequeno",
    raca: "Shih-Tzu",
    sexo: "Fêmea",
    situacao: "Disponivel para ser adotado (a) e apadrinhado"
  };

  animaisData: AnimaisModel;

  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.animaisData = nav?.extras?.state?.['animaisData']
   }

  ngOnInit(): void {

    if (!this.animaisData){
      this.animaisData = this.dataService.getAnimaisData()
      }

  }

}
