import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nodes: any = [
    {
      name: 'Module lead ',
      cssClass: 'ngx-org-ceo',
      image: '',
      //title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Angular Developer',
          cssClass: 'ngx-org-head',
          //image: 'assets/node.svg',
          title: 'Angular and Front-end Technology',
        }, 
      ]
    },
  ];

  orgnodes: any = [
    {
      name: 'Software Developer',
      cssClass: 'ngx-org-ceo',
      image: '',
      //title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Web Developer',
          cssClass: 'ngx-org-head',
          //image: 'assets/node.svg',
          title: 'Front-end Technology',
        },  
        {
          name: 'Angular Developer',
          cssClass: 'ngx-org-head',
          //image: 'assets/node.svg',
          title: 'Angular and Front-end Technology',
        }, 
      ]
    },
  ];
}
