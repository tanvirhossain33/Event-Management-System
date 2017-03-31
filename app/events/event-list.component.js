System.register(['angular2/core', './event-filter.pipe', '../shared/thumb.component', './event.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, event_filter_pipe_1, thumb_component_1, event_service_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_filter_pipe_1_1) {
                event_filter_pipe_1 = event_filter_pipe_1_1;
            },
            function (thumb_component_1_1) {
                thumb_component_1 = thumb_component_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent(_eventService) {
                    this._eventService = _eventService;
                    this.pageTitle = ' + Event List + ';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                EventListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                EventListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._eventService.getEvents()
                        .subscribe(function (events) { return _this.events = events; }, function (error) { return _this.errorMessage = error; });
                };
                EventListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Event List: ' + message;
                };
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'el-events',
                        templateUrl: 'app/events/event-list.component.html',
                        styleUrls: ['app/events/event-list.component.css'],
                        pipes: [event_filter_pipe_1.EventFilterPipe],
                        directives: [thumb_component_1.ThumbComponent]
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], EventListComponent);
                return EventListComponent;
            }());
            exports_1("EventListComponent", EventListComponent);
        }
    }
});
//# sourceMappingURL=event-list.component.js.map