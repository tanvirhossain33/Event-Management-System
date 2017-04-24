import {Component} from 'angular2/core'
import {RouteParams} from 'angular2/router'

@Component({
    templateUrl: 'app/events/event-detail.component.html'
})

export class EventDetailComponent{
    pageTitle: string = 'Event Detail';


    constructor(private _routeParams: RouteParams){
        let id = this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
}