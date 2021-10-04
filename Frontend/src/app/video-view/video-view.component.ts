import { sanitizeIdentifier } from '@angular/compiler';
import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @Input()
  embedLink: string = "";

  trustedEmbedLink: SafeResourceUrl | undefined;

  ngOnInit(): void {
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(embedLink: string): void {
    this.trustedEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
  }



}
