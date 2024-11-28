import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'http://localhost/tu_ruta/craer.php'; // Cambia esto por la ruta a tu archivo PHP

  constructor(private http: HttpClient) { }

  guardarTarea(tarea: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarea);
  }
}
