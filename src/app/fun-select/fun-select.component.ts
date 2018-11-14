import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'fun-select',
    templateUrl:'./fun-select.component.html',
    styleUrls:['./fun-select.component.less']
})

export class FunSelectComponent implements OnInit, OnDestroy {

    constructor(private router: Router){}

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    getModule(url:any):void {
        this.router.navigateByUrl(url);
    }
}