import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs';
import { USER_SERVICE_LOGIN } from '../../app.constants';
import { ResService } from '../../core/common/res.service';
import {Md5} from "ts-md5/dist/md5";


@Injectable()
export class LoginService extends ResService{

constructor( private http: Http) {
    super();
}

getLogin(accountName: any, password: any) : Promise<any> {
    let params =new URLSearchParams();
    params.set("accountName", accountName);
    params.set("password", Md5.hashStr(password).toString());
    return this.http.post(USER_SERVICE_LOGIN,params).toPromise()
    .then(this.extractData)
    .catch(this.handleError);
}

}