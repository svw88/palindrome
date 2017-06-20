import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }

    checkPalindrome(input) {
        input = input.toLowerCase().replace(/[^\w\s]/gi, '');
        var reverse = input.split("").reverse().join("");
        if (reverse == input) {
            return true;
        } else {
            return false;
        }


    }
}