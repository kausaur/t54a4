import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GridOptions ,RowNode} from 'ag-grid/main';

import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './templates/heroes.component.html',
  styleUrls: [ './styles/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  private myGridOptions: GridOptions = {};

  constructor(private router: Router, private heroService: HeroService) {
    this.myGridOptions = <GridOptions>{
        rowData: this.createRowData(),
        columnDefs: this.createColumnDefs(),
        enableColResize: true,
        enableSorting: true,
        enableFilter: true,
        onGridReady: () => {
            this.myGridOptions.api.sizeColumnsToFit();
        }
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
                    this.heroes = heroes;
                });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  private createColumnDefs() {
        return [
            {
                headerName: "ID",
                field: "id",
                width: 400
            },
            {
                headerName: "Name",
                field: "name",
                width: 399
            },
        ];
    }

    private createRowData() {
        return this.heroes;
    }
}
