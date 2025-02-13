import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getMessage(): string {
    return 'Hello from Mock Service!';
  }
}
