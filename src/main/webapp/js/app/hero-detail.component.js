System.register(["rxjs/add/operator/switchMap", "@angular/core", "@angular/router", "@angular/common", "app/hero.service"], function (exports_1, context_1) {
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
    var core_1, router_1, common_1, hero_service_1, HeroDetailComponent, _a;
    return {
        setters: [
            function (_1) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }
        ],
        execute: function () {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route, location) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = location;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
                        .subscribe(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return HeroDetailComponent;
            }());
            HeroDetailComponent = __decorate([
                core_1.Component({
                    selector: 'hero-detail',
                    templateUrl: './templates/hero-detail.component.html',
                    styleUrls: ['./styles/hero-detail.component.css']
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof hero_service_1.HeroService !== "undefined" && hero_service_1.HeroService) === "function" && _a || Object, router_1.ActivatedRoute,
                    common_1.Location])
            ], HeroDetailComponent);
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    };
});
//# sourceMappingURL=hero-detail.component.js.map