import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-blog',
  templateUrl: './project-blog.component.html',
  styleUrls: ['./project-blog.component.css']
})
export class ProjectBlogComponent implements OnInit {
  @Input() imgPath: string;
  @Input() category: string;
  @Input() projectName: string;
  @Input() details: string;
  @Input() projectURL: string;
  @Input() ownerName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
