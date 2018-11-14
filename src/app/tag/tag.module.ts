import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TagIndexRoutingModule } from './tag-routing.module';
import { TagIndexComponent } from './tag-index.component';


@NgModule({
    imports:[
        SharedModule,
        TagIndexRoutingModule
    ],
    declarations:[
        TagIndexComponent
    ]
})
export class TagModule { }
