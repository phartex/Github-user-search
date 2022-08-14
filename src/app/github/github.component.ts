import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGithubResult, IGithubUser } from '../shared/interfaces/IGithubResult';
import { GithubService } from '../shared/services/github.service';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  username!: string;
  gitHubResult?: any;
  gitHubProfile: any;
  profileUserName: any;
  totalCount!: number;
  loading$ = this.loader.loading$;

  start: any;
  last: any;
  p: number = 1;
  constructor(private _githubService: GithubService, private router: Router, private loader: LoaderService) { }

  ngOnInit(): void { }

  search() {
    this._githubService.getUser(this.username).subscribe((data) => {
      console.log(data);
      this.gitHubResult = data.items;
      this.totalCount = data.total_count;
    });

  }

  listCount(count: number) {
    this.start = count
    this.start = this.start * 10 - 9
    this.last = count * 10
    if (this.last > this.gitHubResult.length) {
      this.last = this.gitHubResult.length;
    }
    console.log('start' + '      ' + this.start + '      ' + 'last' + '      ' + this.last);
  }
}
