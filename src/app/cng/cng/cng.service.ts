import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient) {}

  // Implement HTTP methods here

  getArts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/arts');
  }

  createArt(keyword: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('keyword', keyword);
    formData.append('image', image);
    return this.http.post<any>('http://localhost:3000/api/arts', formData);
  }

  deleteArt(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/arts/${id}`);
  }



}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ArtService {
//   private backendUrl = 'http://localhost:3000/api/arts';

//   constructor(private http: HttpClient) {}

//   createArt(keyword: string, image: File) {
//     const formData = new FormData();
//     formData.append('keyword', keyword);
//     formData.append('image', image);

//     return this.http.post<any>(this.backendUrl, formData);
//   }

//   getArts() {
//     return this.http.get<any>(this.backendUrl);
//   }

//   deleteArt(id: string) {
//     return this.http.delete<any>(`${this.backendUrl}/${id}`);
//   }
// }
