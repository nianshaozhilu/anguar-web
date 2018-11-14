import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { TagIndexComponent } from './tag-index.component';
 
 
    const routes: Routes = [
        {
            path:'',
            data:{
                title:'基本信息'
            },
            children: [
                {
                  path:'index',
                  component:TagIndexComponent,
                  data:{
                    title:'基本信息'
                  }
                },
                 
              ]
        }
    ];
 

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class TagIndexRoutingModule { }