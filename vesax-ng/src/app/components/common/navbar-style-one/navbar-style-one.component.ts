import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule,FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {
  Titles = ["Mr", "Mrs", "Miss"]
  Services = ["MyService", "yourService"]

form: FormGroup;
  associateForm: FormGroup;
  serviceList: any = [
    { id: 1, name: 'Menufacture' },
    { id: 2, name: 'Reseller' },
    { id: 3, name: 'Authorise Dealer' }
  ];

  signup_url = "http://localhost:4000/ragister_info"
  login_url = "http://localhost:4000/login"
  business_url = "http://localhost:4000/venderbusinessDetails"
  contact_url = "http://localhost:4000/venderContactsDetails"
  additional_url = "http://localhost:4000/addtional_info"


  registrationForm = new FormGroup({
    title: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    city: new FormControl()
  })
  loginForm = new FormGroup({
    phone: new FormControl()
  })

 businessForm = new FormGroup({
   services: new FormControl(),
   business_name: new FormControl(),
   land_mark: new FormControl(),
   area_info: new FormControl(),
   country: new FormControl(),
   pincode: new FormControl()

 })

contactForm = new FormGroup({
    contact_name: new FormControl(),
    Mobile_number: new FormControl(),
    whatsapp: new FormControl(),
    email_id: new FormControl(),
    business_id: new FormControl(),
    landline_number: new FormControl(),
    business_name: new FormControl(),
    website: new FormControl(),
    country: new FormControl(),
    pincode: new FormControl(),
    social_media: new FormControl(),
    toll_free_no: new FormControl(),
    fax: new FormControl()
})

 additionalForm = new FormGroup({
   vender_id: new FormControl(),
    vender_services: new FormControl(),
    associat_company: new FormControl(),
    opening_time: new FormControl()
 })

  //registrationForm: FormGroup
  // constructor(public formBuilder: FormBuilder, private httpClient: HttpClient) { }

constructor(private fb: FormBuilder, private httpClient: HttpClient ) {
    this.form = this.fb.group({
      website: this.fb.array([], [Validators.required])
    })

    this.additionalForm = this.fb.group({
      Company_Name: this.fb.array([
        this.fb.control(null)
      ])
    })

var wrap = $("#wrap");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 147) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }

});

  }

  addMore(): void {
      (this.additionalForm.get('Company_Name') as FormArray).push(
        this.fb.control(null)
      );
    }
  
    remove(index) {
      (this.additionalForm.get('Company_Name') as FormArray).removeAt(index);
    }

   getCompanyFormControls(): AbstractControl[] {
      return (<FormArray> this.additionalForm.get('Company_Name')).controls
    }


  ngOnInit(): void {
  }

  onsubmit() {
    this.httpClient.post(this.signup_url, this.registrationForm.value).subscribe(
      (result) => {
        console.log(result)
        const messageres = result
        $("#status").append(`<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Registration Successful</h3>`)
      },
      (error) => {
        console.log(error);
      })
    console.log("Button clicked");
    console.log(this.registrationForm.value);


  }
  onsubmitlogin() {
    this.httpClient.post(this.login_url, this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        $("#loginresponse").append(`<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Login Successful</h3>`)
      },
      (error) => {
        console.log(error);
      }
    )
    console.log("Login Button Clicked")
    console.log(this.loginForm.value);

  }

  onsubmitbusiness(){
    this.httpClient.post(this.business_url,this.businessForm.value).subscribe(
      (result) => {
        console.log(result);
        $("#businessresponse").append('<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Business Information Updated</h3>')
      },
      (error) => {
        console.log(error);
      }
    )
    console.log("Business Button Clicked")
    console.log(this.businessForm.value);
  }

onsubmitcontact(){
  this.httpClient.post(this.contact_url,this.contactForm.value).subscribe(
    (result) => {
      console.log(result);
      $("#contactresponse").append('<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Contact Information Updated</h3>')
    },
     (error) => {
        console.log(error);
     }
  )
  console.log("Contact Button Clicked")
    console.log(this.businessForm.value);
}

onsubmitadditional(){
  this.httpClient.post(this.additional_url,this.additionalForm.value).subscribe(
    (result) => {
      console.log(result);
      $("#addtionalresponse").append('<h3><i class="fa fa-check-circle-o" aria-hidden="true"></i>Additional Information Updated</h3>')
    },
    (error) => {
      console.log(error);
    }
  )
  console.log("Additional Button Clicked");
  console.log(this.additionalForm.value);
}



}
