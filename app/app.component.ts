import {Component} from 'angular2/core';
import {EventListComponent} from './events/event-list.component';
import {EventService} from './events/event.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';  //Load all features
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <el-events></el-events>
        </div>
        `,
    directives: [EventListComponent],
    providers: [EventService, HTTP_PROVIDERS, ROUTER_PROVIDERS]     
    
})
export class AppComponent {
    pageTitle: string = 'Local Event App';
 }