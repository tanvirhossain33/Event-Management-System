import {Component} from 'angular2/core';
import {EventListComponent} from './events/event-list.component';
import {EventService} from './events/event.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';  //Load all features
import {ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a>Home</a></li>
                    <li><a>Event List</a></li>
                </ul>
            </div>
        </nav>
        </div>
        `,
    directives: [EventListComponent],
    providers: [EventService, HTTP_PROVIDERS, ROUTER_PROVIDERS]     
    
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/events', name: 'Events', component: EventListComponent}
])

export class AppComponent {
    pageTitle: string = 'Local Event App';
 }