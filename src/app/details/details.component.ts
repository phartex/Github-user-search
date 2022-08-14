import { Component, Input, OnInit } from '@angular/core';
import { IGithubUser } from '../shared/interfaces/IGithubResult';
import { Iprofile } from '../shared/interfaces/Iprofile';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
@Input() singleUser!:IGithubUser;



singleUserProfile!:Iprofile;
  constructor(private _gitHubService:GithubService) { }

  ngOnInit(): void {
    this._gitHubService.getProfile(this.singleUser.login).subscribe((data)=>{
      console.log(data);
      this.singleUserProfile = data;
    })
    
  }
  

}
