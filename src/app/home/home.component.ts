import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string = 'Click the button to change me!'; // ✅ Fix: Added message back
  apiData: any = null; // ✅ API data
  loading: boolean = true; // ✅ Show "Loading..." initially

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      this.apiData = data;
      this.loading = false; // ✅ Stop "Loading..." when data arrives
    });
  }

  updateMessage() {
    this.message = 'Message Updated!'; // ✅ Fix: Ensures button works
  }
}
