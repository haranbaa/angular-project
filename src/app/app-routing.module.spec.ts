import { MockDataService } from './mock-data.service';

describe('MockDataService', () => {
  let service: MockDataService;

  beforeEach(() => {
    service = new MockDataService();
  });

  it('should return a message', () => {
    expect(service.getMessage()).toBe('Hello from Mock Service');
  });
});
