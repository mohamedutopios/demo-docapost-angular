export class Book {
    id: number;
    title: string;
    author: string;
    isRead: boolean;
  
    constructor(id = 0, title = '', author = '', isRead = false) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isRead = isRead;
    }
  }
  