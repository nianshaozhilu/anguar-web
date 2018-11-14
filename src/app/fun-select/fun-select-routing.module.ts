import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FunSelectComponent } from './fun-select.component';
const routes: Routes = [
    {
        path: '',
        component: FunSelectComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class FunSelectRoutingModule { }