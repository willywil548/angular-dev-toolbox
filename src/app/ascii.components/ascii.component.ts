import { Component, Input } from '@angular/core';

import { Ascii } from './ascii.model';

@Component({
    selector: 'app-ascii',
    templateUrl: 'ascii.component.html',
    styleUrls: ['./ascii.component.css'],
})

export class AsciiComponent {
    convert: Ascii = {
        inputText: '',
        outputText: ''
    };
    tempStr: string;
    pattern = new RegExp('^[0-9 ]+$');

    isNumeric(input: string): void {
        if (this.pattern.test(input)) {
            this.ConvertToCharacter(input);
        } else {
            this.ConvertToAscii(input);
        }
    }

    ConvertToAscii(input: string): void {
        this.tempStr = '';
        let i;
        for (i = 0; i < input.length; i++ ) {
            this.tempStr += input.charCodeAt(i) + ' ';
        }
        this.convert.outputText = this.tempStr;
    }

    ConvertToCharacter(input: string): void {
        let tempArray = [];
        this.tempStr = '';
        tempArray = input.split(' ');
        tempArray.forEach(num => {
            if (num > 31 && num < 127) {
                this.tempStr += String.fromCharCode(num);
            } else {
                this.tempStr += 'unknown character code ' + num;
            }
        });
        this.convert.outputText = this.tempStr;
    }
}

