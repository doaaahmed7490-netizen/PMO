import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { user } from '../../models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public form: FormGroup<user>;
}
