import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss'],
    standalone: true,
})
export class HomeComponent implements OnInit {

    private _router: Router = inject(Router);

    ngOnInit(): void {
    }

    addNewTask() {
        this._router.navigate(['/task'])
    }

    viewAllTasks() {
        this._router.navigate(['/tasks'])
    }
}
