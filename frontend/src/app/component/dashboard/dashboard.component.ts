import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

  education() {
    this.router.navigateByUrl('/education').
      then(nav => {
        console.log(nav)
      }, err => {
        console.log(err);
      })
  }

  logout() {
    this.router.navigateByUrl('/login').
      then(nav => {
        console.log(nav)
      }, err => {
        console.log(err);
      })

  }

  download_resume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Ashik HC_Resume.pdf');
    link.setAttribute('download', 'Ashik HC_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
