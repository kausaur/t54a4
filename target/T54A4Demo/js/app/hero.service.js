System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, HeroService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    //private heroesUrl = 'rest/heroes';  // URL to web api
                    this.heroesUrl = 'rest/dbheroes'; // URL to web api
                }
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        // Simulate server latency with 2 second delay
                        setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
                    });
                };
                HeroService.prototype.getHero = function (id) {
                    var url = this.heroesUrl + "/" + id;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                HeroService.prototype.handleSuccess = function (response) {
                    console.error('Response: ' + response); // for demo purposes only
                    return new Promise();
                };
                return HeroService;
            }());
            HeroService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], HeroService);
            exports_1("HeroService", HeroService);
        }
    };
});
//# sourceMappingURL=hero.service.js.map