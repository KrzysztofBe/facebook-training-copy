import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.scss']
})
export class MyStoryComponent implements OnInit {

  @Input() avatar ?= '';
  @Input() image ?= '';
  @Input() name ?= '';

  constructor() { }

  ngOnInit(): void {
  }

}
