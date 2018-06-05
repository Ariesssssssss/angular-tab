import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * 路由方式添加tab
   * @param data
   */
  tabs(data) {
    this.router.navigate([data]);
  }

}
