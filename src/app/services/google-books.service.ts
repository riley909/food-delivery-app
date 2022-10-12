import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../pages/tabs/books/models/book';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  url = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<Book[]> {
    console.log('service: searching');
    return this.http
      .get<{ items: Book[] }>(`${this.url}?q=${query}`)
      .pipe(map((books) => books.items || []));
  }

  getBookById(volumeId: string) {
    return this.http.get(`${this.url}/${volumeId}`).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }
}
