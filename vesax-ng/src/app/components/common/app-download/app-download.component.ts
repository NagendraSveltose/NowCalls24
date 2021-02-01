import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule,FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

enquiry_url = "http://localhost:4000/add_inquiry_user"


enquiryForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    msg: new FormControl(),
    
  })


    constructor( private httpClient: HttpClient ) { }

    ngOnInit(): void {
    }

onsubmitenquiry() {
    this.httpClient.post(this.enquiry_url, this.enquiryForm.value).subscribe(
      (result) => {
        console.log(result)
        const messageres = result
        $("#status").append(`<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Enquiry Successful</h3>`)
      },
      (error) => {
        console.log(error);
      })
    console.log("Button clicked");
    console.log(this.enquiryForm.value);


  }


    appDownloadContent = [
        {
            title: 'Download Vesax App',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btnBox: [
                {
                    img: 'assets/img/play-store.png',
                    text: 'GET IT ON',
                    subText: 'Google Play',
                    link: '#'
                },
                {
                    img: 'assets/img/apple-store.png',
                    text: 'Download on the',
                    subText: 'Apple Store',
                    link: '#'
                }
            ]
        }
    ]
    appDownloadImage = [
        {
            img: 'assets/img/aboutrs.png'
        }
    ];

}