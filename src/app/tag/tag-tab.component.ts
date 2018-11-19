import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector:'tag-tab',
    templateUrl:'./tag-tab.component.html',
    styleUrls:['./tag.component.less']
})

export class TagTabComponent implements OnInit, OnDestroy {
    id:any;
    constructor(   private activeRoute: ActivatedRoute,){
        this.activeRoute.queryParams.subscribe(params => {
           
            this.id = params['id'];     
            console.log(this.id)
        });
    }
 
    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.id = 1;
    }
}