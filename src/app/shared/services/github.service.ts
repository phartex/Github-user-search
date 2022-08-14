import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGithubResult, IGithubUser } from '../interfaces/IGithubResult';
import { Observable } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from '../GitCred';
import { Iprofile } from '../interfaces/Iprofile';


// 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
const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/vnd.github+json"),
};


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient,) { }
  // createAccount(payload:ICreateNewAccount):Observable<ICreateChildResponse>{
  //   try {
  //     let path = environment.baseUrlPhoenixAccountCreation + environment.createAccount;

  //   return this.http.post<ICreateChildResponse>(path,payload,httpOptions);

  //   } catch (error) {
  //   error
  //   }
  // }

  getUser(user: string): Observable<IGithubResult> {
    const numbaq = 4;
    let path = `${environment.getGithubListUrl}?q=${user}`;
    return this._http.get<IGithubResult>(path, httpOptions);
  }

  getProfile(user: string): Observable<Iprofile> {
    let path = `${environment.getProfileList}/${user}`;

    return this._http.get<Iprofile>(path, httpOptions);
  }
}
