import { Component } from '@angular/core';

import { RegularExpression } from './regex.model';

@Component({
    selector: 'app-regex',
    templateUrl: 'regex.component.html',
    styleUrls: ['regex.component.css'],
})

export class RegexComponent {

    regexdef: RegularExpression = {
        input: '',
        ouput: '',
        pattern: '',
        globalModifier: false,
        insensitiveModifier: false,
        multilineModifier: false
    };

    private checkPatt(): void {
        if (this.regexdef.input === '' ) {
            this.regexdef.ouput = 'Please give an input string';
            return;
        } else if (this.regexdef.pattern === '' ) {
            this.regexdef.ouput = 'Please give a pattern to match';
            return;
        }
        this.regexdef.ouput = 'Checking ' + this.regexdef.input + ' against pattern: ' + this.regexdef.pattern;
        this.checkAgainstPatt();
    }
    private checkAgainstPatt(): void {
        this.regexdef.ouput = '';
        try {
            const reg = new RegExp(this.regexdef.pattern, this.modifiers() );
            // Write the boolean value of the match results
            this.regexdef.ouput = 'Found a match: ' + reg.test(this.regexdef.input).toString() + '\n';
            // Write the array and count of the matches found
            // const results = reg.exec(this.regexdef.input);
            const results = this.regexdef.input.match(reg);
            const numMathces = results != null ? results.length : 0;
            // How many matches found
            this.regexdef.ouput += 'Number of matches: ' + numMathces + '\n';
            // The matched results
            this.regexdef.ouput += 'Matches Found: \n';
            for ( let i = 0; i < numMathces; i++ ) {
                this.regexdef.ouput += results[i] + '\r\n';
            }
            if ( numMathces === 0 ) { this.regexdef.ouput += ' none'; }

        } catch (error) {
        this.regexdef.ouput = 'There is an issue with your pattern';
        }
    }
    private modifiers(): string {
        let returnStr = '';
        if (this.regexdef.globalModifier) { returnStr = 'g'; }
        if (this.regexdef.insensitiveModifier) { returnStr += 'i'; }
        if (this.regexdef.multilineModifier) { returnStr += 'm'; }
        return returnStr;
    }
}
