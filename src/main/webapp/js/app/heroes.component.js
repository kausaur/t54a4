System.register(["@angular/core", "@angular/router", "app/hero.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, hero_service_1, HeroesComponent, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }
        ],
        execute: function () {
            HeroesComponent = (function () {
                function HeroesComponent(router, heroService) {
                    var _this = this;
                    this.router = router;
                    this.heroService = heroService;
                    this.myGridOptions = {};
                    this.myGridOptions = {
                        rowData: this.createRowData(),
                        columnDefs: this.createColumnDefs(),
                        enableColResize: true,
                        enableSorting: true,
                        enableFilter: true,
                        onGridReady: function () {
                            _this.myGridOptions.api.sizeColumnsToFit();
                        }
                    };
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) {
                        _this.heroes = heroes;
                    });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                };
                HeroesComponent.prototype.createColumnDefs = function () {
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
                };
                HeroesComponent.prototype.createRowData = function () {
                    return this.heroes;
                };
                return HeroesComponent;
            }());
            HeroesComponent = __decorate([
                core_1.Component({
                    selector: 'my-heroes',
                    templateUrl: './templates/heroes.component.html',
                    styleUrls: ['./styles/heroes.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof hero_service_1.HeroService !== "undefined" && hero_service_1.HeroService) === "function" && _a || Object])
            ], HeroesComponent);
            exports_1("HeroesComponent", HeroesComponent);
        }
    };
});
//# sourceMappingURL=heroes.component.js.map