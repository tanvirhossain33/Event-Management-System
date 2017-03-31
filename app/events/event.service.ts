
import {Injectable} from 'angular2/core';
import {IEvent} from './event';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService{

    private _eventUrl = 'http://localhost:3000/data.json';

    constructor(private _http: Http){

    }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this._eventUrl)
            .map((response: Response) => <IEvent[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}   