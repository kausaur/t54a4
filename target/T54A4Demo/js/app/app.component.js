System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.winHeight = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("#####################init : " + window.innerHeight);
                    this.winHeight = window.innerHeight - 20 - 82;
                };
                AppComponent.prototype.onResize = function (event) {
                    console.log("#####################resize : " + window.innerHeight);
                    this.winHeight = window.innerHeight - 20 - 82;
                };
                return AppComponent;
            }());
            __decorate([
                core_1.HostListener('window:resize', ['$event']),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Object]),
                __metadata("design:returntype", void 0)
            ], AppComponent.prototype, "onResize", null);
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: './templates/app.component.html',
                    styleUrls: ['./styles/app.component.css'],
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map