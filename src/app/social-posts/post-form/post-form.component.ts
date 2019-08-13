import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<any>();
  constructor() {}

  addPost(postForm: NgForm): void {
    this.onAdd.emit({
      title: postForm.value.title,
      thought: postForm.value.thought
    });
  }

  ngOnInit() {}
}
