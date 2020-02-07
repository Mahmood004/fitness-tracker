import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'app-stop-training',
    template: `
        <h1 mat-dialog-title>Confirmation Dialog Box</h1>
        <mat-dialog-content>You have done {{ receivedData.progress }}%. Are you sure?</mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-actions>

    `
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any) {}
}