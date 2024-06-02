import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: "tasks-component",
    templateUrl: "./tasks.component.html",
    styleUrls: ['tasks.component.scss'],
    imports: [
        NgOptimizedImage
    ],
    standalone: true
})
export class TasksComponent {


    addTodoToColumn() {

    }
}
