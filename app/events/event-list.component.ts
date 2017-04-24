import {Component, OnInit} from 'angular2/core';
import {IEvent} from './event';
import {EventFilterPipe} from './event-filter.pipe';
import {ThumbComponent} from '../shared/thumb.component';
import {EventService} from './event.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component ({
    templateUrl: 'app/events/event-list.component.html',
    styleUrls: ['app/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives: [ThumbComponent, ROUTER_DIRECTIVES]
})
export class EventListComponent implements OnInit{
    pageTitle: string = ' + Event List + ';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    searchCriteria: string;
    events: IEvent[];
    errorMessage: string;

    constructor(private _eventService: EventService){

    }        


    toggleImage(): void{
        this.showImage = !this.showImage;
    }            

    ngOnInit(): void{
        this._eventService.getEvents()
            .subscribe(events => this.events = events,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Event List: ' + message;
    }
}