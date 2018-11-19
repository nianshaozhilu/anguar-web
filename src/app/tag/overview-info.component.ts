import { Component, OnDestroy, OnInit, Input, ViewChild  } from '@angular/core';
 
@Component({
    selector:'overview-info',
    templateUrl:'./overview-info.component.html',
    styleUrls:['./tag.component.less','./overview-info.component.less']
})

export class OverviewInfoComponent implements OnInit, OnDestroy {
    @Input() id: any;
    constructor( ){
   
    }
 
    ngOnDestroy(): void {
        
    }

    
    ngOnInit(): void {
        console.log(this.id);
    }
}