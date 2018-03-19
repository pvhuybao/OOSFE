import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryCategory implements InMemoryDbService {
  createDb() {
    let categories = [
      { id: 1, name: 'Category No1', description: 'haha', status: 1 },
      { id: 2, name: 'Category No2' },
      { id: 3, name: 'Category No3' }, 
      { id: 4, name: 'Category No4' }
    ];
    return { categories };
  }
}