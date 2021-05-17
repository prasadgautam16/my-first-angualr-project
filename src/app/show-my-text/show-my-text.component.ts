import { Component } from '@angular/core';

@Component({
    selector : 'app-show-my-text',
    templateUrl: './show-my-text.component.html'
})
export class ShowMyText {
    public textInputField : string = "";

    clearInputField() {
        this.textInputField = ""
    }

    isInputFieldEmpty() {
        return this.textInputField ? true : false;
    }

}