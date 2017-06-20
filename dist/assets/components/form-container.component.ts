import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HelperService } from '../services/helper.service'

@Component({
    selector: 'form-container',
    template: `
        <div class="landing-container">
            <div align="center">
              <h2>Palindrome Detector</h2>
            </div>
            <br>
            <br>
            <form [formGroup]="palindromeForm" (ngSubmit)="checkPalindrome()">
                <div class="form-group">
                    <input 
                        formControlName="input" 
                        id="input" 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter phrase to check"
                        required>
                    <br>
                    <br>    
                    <div *ngIf="result!='' && palindromeForm.controls.input.valid" align="center">    
                        <h4>{{result}}</h4>
                    </div>  
                    <br>
                    <br>  
                    <div align="center">    
                        <button [disabled]="!palindromeForm.controls.input.valid" type="submit" class="btn btn-default">
                            Check
                        </button>
                    </div>  
                </div>
            </form>
        </div>
    `
})

export class FormContainerComponent implements OnInit {

    result = '';

    palindromeForm: FormGroup;

    constructor(private helperService: HelperService) {
        this.palindromeForm = new FormGroup({
            input: new FormControl()
        });
    };

    ngOnInit() { }

    checkPalindrome() {

        if (this.helperService.checkPalindrome(this.palindromeForm.controls.input.value)) {
            this.result = 'This is a palindrome'
        } else {
            this.result = 'This is not a palindrome'
        };
    }
}
