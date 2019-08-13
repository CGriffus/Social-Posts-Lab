import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;

  posts: Post[] = [
    { title: "My new post", thought: "blah blah blah" },
    { title: "Another new post", thought: "bleh bleh blah" }
  ];

  constructor() {}

  addNewPostHandler(newPost: object): void {
    // console.log("added post");
    this.posts.unshift(newPost);
  }

  removePostHandler() {}

  toggleFormHandler() {}

  ngOnInit() {}
}
