import { Component, OnDestroy, OnInit, Input, ViewChild  } from '@angular/core';
 
@Component({
    selector:'detail-info',
    templateUrl:'./detail-info.component.html',
    styleUrls:['./tag.component.less']
})

export class DetailInfoComponent implements OnInit, OnDestroy {
    @Input() id: any;
    constructor( ){
   
    }
 
    ngOnDestroy(): void {
        
    }

    
    ngOnInit(): void {
        console.log(this.id);
    }
}