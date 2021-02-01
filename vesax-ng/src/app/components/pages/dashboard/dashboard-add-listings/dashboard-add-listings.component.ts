import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
    selector: 'app-dashboard-add-listings',
    templateUrl: './dashboard-add-listings.component.html',
    styleUrls: ['./dashboard-add-listings.component.scss']
})
export class DashboardAddListingsComponent implements OnInit {
    add_listing_url = 'http://localhost:4000/addStore'

    listingform = new FormGroup({
        title: new FormControl(),
        category: new FormControl(),
        keyword: new FormControl(),
        city: new FormControl(),
        address: new FormControl(),
        state: new FormControl(),
        // img: new FormControl(),
        zipcode: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
    })
    constructor(private httpClient: HttpClient) { }


    ngOnInit(): void {
    }

    submitListing() {
        this.httpClient.post(this.add_listing_url, this.listingform.value).subscribe(
            (result) => {
                console.log(result);
                console.log("Listing send successfully");
            },
            (error) => {
                console.log(error);
            }
        )
        console.log("Listing Button Pressed")
        console.log(this.listingform.value);
    }

    breadcrumb = [
        {
            title: 'Add Listings',
            subTitle: 'Dashboard'
        }
    ]

}