import { Component } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  serviceMessage: string = '';

  constructor(private mockService: MockDataService) {}

  ngOnInit() {
    this.serviceMessage = this.mockService.getMessage();
  }
}
