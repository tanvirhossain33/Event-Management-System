import {Component} from 'angular2/core';
import {EventListComponent} from './events/event-list.component';
import {EventService} from './events/event.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';  //Load all features
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import {EventDetailComponent} from './events/event-detail.component'

@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Events']">Event List</a></li> 
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [EventService, HTTP_PROVIDERS, ROUTER_PROVIDERS]     
    
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/events', name: 'Events', component: EventListComponent},
    {path: '/event/:id', name: 'EventDetail', component: EventDetailComponent}
])

export class AppComponent {
    pageTitle: string = 'Local Event App';
 }