import { Component, signal } from '@angular/core';
import { NgxFloatUiModule } from 'ngx-float-ui';

@Component({
  selector: 'app-root',
  imports: [NgxFloatUiModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('float-ui-demo');
}
