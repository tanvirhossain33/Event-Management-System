import {PipeTransform, Pipe} from 'angular2/core';
import {IEvent} from './event';


@Pipe({
    name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform{
    
    transform(value : IEvent[], args: string[]): IEvent[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    
        return filter ? value.filter((event: IEvent) =>
            event.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}