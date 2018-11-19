import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TagIndexRoutingModule } from './tag-routing.module';
import { TagIndexComponent } from './tag-index.component';
import { TagTabComponent } from './tag-tab.component';
import { OverviewInfoComponent } from "./overview-info.component";
import { DetailInfoComponent } from './detail-info.component'; 

@NgModule({
    imports:[
        SharedModule,
        TagIndexRoutingModule
    ],
    declarations:[
        TagIndexComponent,
        TagTabComponent,
        OverviewInfoComponent,
        DetailInfoComponent
    ]
})
export class TagModule { }
