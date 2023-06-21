import { Component, OnInit } from '@angular/core';
import { ArtService } from './cng.service';

@Component({
  selector: 'app-cng',
  templateUrl: './cng.component.html',
  styleUrls: ['./cng.component.css'],
  providers: [ArtService]
})
export class CngComponent implements OnInit {
  arts: any[] = []; // Array to store fetched arts

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.fetchArts(); // Fetch arts when the component initializes
  }

  fetchArts(): void {
    this.artService.getArts().subscribe(
      response => {
        this.arts = response.arts; // Assign the fetched arts to the component property
      },
      error => {
        // Handle error if the API request fails
        console.error(error);
      }
    );
  }

  onCreateArt(keyword: string, image: File): void {
    this.artService.createArt(keyword, image).subscribe(
      response => {
        console.log(response);
        // Handle the response, if needed
        this.fetchArts(); // Fetch the updated arts list after creating the art
      },
      error => {
        // Handle error if the API request fails
        console.error(error);
      }
    );
  }

  onDeleteArt(id: string): void {
    this.artService.deleteArt(id).subscribe(
      response => {
        console.log(response);
        // Handle the response, if needed
        this.fetchArts(); // Fetch the updated arts list after deleting the art
      },
      error => {
        // Handle error if the API request fails
        console.error(error);
      }
    );
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ArtService } from './cng.service';

// @Component({
//   selector: 'app-cng',
//   templateUrl: './cng.component.html',
//   styleUrls: ['./cng.component.css'],
//   providers: [ArtService]
// })
// export class CngComponent implements OnInit {
//   arts: any[] = []; // Array to store fetched arts

//   constructor(private artService: ArtService) { }

//   ngOnInit(): void {
//     this.fetchArts(); // Fetch arts when the component initializes
//   }

//   fetchArts(): void {
//     this.artService.getArts()
//       .subscribe(response => {
//         this.arts = response.arts; // Assign the fetched arts to the component property
//       });
//   }

//   onCreateArt(keyword: string, image: File): void {
//     this.artService.createArt(keyword, image)
//       .subscribe(response => {
//         console.log(response);
//         // Handle the response, if needed
//         // After creating the art, you can fetch the updated arts list by calling this.fetchArts();
//       });
//       this.fetchArts();
//   }



//   // ...
// }









// import { Component } from '@angular/core';
// import { ArtService } from './art.service';

// @Component({
//   selector: 'app-cng',
//   templateUrl: './cng.component.html',
//   styleUrls: ['./cng.component.css'],
//   providers: [ArtService] // Add the service to the component providers
// })
// export class CngComponent {
//   constructor(private artService: ArtService) { }

//   // Use the artService methods in your component
//   onCreateArt(keyword: string, image: File) {
//     this.artService.createArt(keyword, image)
//       .subscribe(response => {
//         console.log(response);
//         // Handle the response, if needed
//       });
//   }

//   // ...
// }


















// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-cng',
//   templateUrl: './cng.component.html',
//   styleUrls: ['./cng.component.css']
// })


// export class CngComponent {
//   arts: any[] = [];

//   constructor(private http: HttpClient) { }

//   onCreateArt(keyword: string, image: File) {
//     const formData = new FormData();
//     formData.append('keyword', keyword);
//     formData.append('image', image);

//     this.createArt(formData).subscribe(
//       response => {
//         console.log(response.message);
//         // Handle the response data, if needed
//       },
//       error => {
//         console.error(error);
//         // Handle the error, if needed
//       }
//     );
//   }

//   onFetchArts() {
//     this.getArts().subscribe(
//       response => {
//         this.arts = response.arts;
//         console.log('Arts fetched successfully');
//       },
//       error => {
//         console.error(error);
//         // Handle the error, if needed
//       }
//     );
//   }

//   onDeleteArt(id: string) {
//     this.deleteArt(id).subscribe(
//       response => {
//         console.log(response.message);
//         // Handle the response data, if needed
//       },
//       error => {
//         console.error(error);
//         // Handle the error, if needed
//       }
//     );
//   }

//   private createArt(formData: FormData) {
//     return this.http.post<any>('api/arts', formData);
//   }

//   private getArts() {
//     return this.http.get<any>('api/arts');
//   }

//   private deleteArt(id: string) {
//     return this.http.delete<any>(`api/arts/${id}`);
//   }
// }


// export class CngComponent {
//   constructor(private http: HttpClient) { }
//   createArt(keyword: string, image: File) {
//     const formData = new FormData();
//     formData.append('keyword', keyword);
//     formData.append('image', image);

//     return this.http.post<any>('http://localhost:3000/api/arts', formData);
//   }

//   getArts() {
//     return this.http.get<any>('http://localhost:3000/api/arts');
//   }
//   deleteArt(id: string) {
//     return this.http.delete<any>(`http://localhost:3000/api/arts/${id}`);
//   }



// }
