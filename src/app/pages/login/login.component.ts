import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  listOfOption = [];
  listOfTagOptions = [];
  langs = [];
  lang:string;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();

   
    }
    this.router.navigateByUrl('fun-select');
    if (this.validateForm.status=="VALID"){
      this.router.navigateByUrl('fun-select');
    }
   
  }

  constructor(
    private fb: FormBuilder,
    private translate:TranslateService,
    private router: Router
    ) {
      
  }

  ngOnInit(): void {
    this.langs = [{
      label:'简体中文',
      value:'zh'
    },{
      label:'English',
      value:'en'
    }]
     
 
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      lang:[]
    });
    this.lang = this.translate.getBrowserLang();
  }

  //切换语言
  changeLang() {
    
    this.translate.use(this.lang);
   
  }
 
}
