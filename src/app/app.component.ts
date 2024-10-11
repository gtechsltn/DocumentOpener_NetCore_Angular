import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFileurlPipe } from './pipe/app.fileurl.pipe';
import { AppFilehttpService } from './services/app.filehttp.service';
import { NgForOf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFileurlPipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   files: string[] | undefined;
   selectedFile: string;;

   pdfUrl: SafeResourceUrl ;

   constructor(private serv: AppFilehttpService, private sanitizer: DomSanitizer){
    this.selectedFile = '';
    this.pdfUrl =  this.sanitizer.bypassSecurityTrustResourceUrl('');
   }

   ngOnInit(): void {
      this.serv.getFiles().subscribe(files => {
        this.files = files;
      });
   }

    download(event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      this.selectedFile = selectElement.value;
      this.serv.getDocument(this.selectedFile).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      });
    }
}
