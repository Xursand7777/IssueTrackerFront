import {AbstractType, Component, inject, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";

interface Food {
    value: string;
    viewValue: string;
}

interface TaskGroupInterface {
    title: FormControl<string>,
    description: FormControl<string>,
    endDate: FormControl<string>,
    assignee: FormControl<string>,
    category: FormControl<string>,
}

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatDatepickerModule,
        MatSelectModule,
        NgForOf,
        ReactiveFormsModule
    ],
    standalone: true
})
export class TaskComponent implements OnInit{
    public showTask = true;
    private _fb = inject(FormBuilder);

    public taskGroup:FormGroup<TaskGroupInterface>;

    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
    ];

    ngOnInit(): void {
        this.taskGroup = this._fb.nonNullable.group({
            title: this._fb.nonNullable.control(''),
            description: this._fb.nonNullable.control(''),
            endDate: this._fb.nonNullable.control(''),
            assignee: this._fb.nonNullable.control(''),
            category: this._fb.nonNullable.control('')
        })
    }

    onAddTask():void {

    }
}
