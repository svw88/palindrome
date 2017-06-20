import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }

    checkPalindrome(input) {
        input = input.toLowerCase().replace(/\s/gi,'').replace(/[^\w\s]/gi, '');
        console.log(input);
        var reverse = input.split("").reverse().join("");
        console.log(reverse);
        if (reverse == input) {
            return true;
        } else {
            return false;
        }


    }
}