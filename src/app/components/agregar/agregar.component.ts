import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-agregar',
  standalone: false,
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  movie = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  };

  constructor(private indexService: IndexService, private router: Router) {}

  onSubmit(): void {
    this.indexService.agregar(this.movie).subscribe(() => {
      alert('Película agregada correctamente');
      this.router.navigate(['/movies']);
    });
  }
}
