import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute, 
    private indexService: IndexService,
    private router: Router) { }

 ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.indexService.getMovieById(id).subscribe(data => {
      this.movie = data;
    });
  }
  onSubmit(): void {
    const confirmado = confirm('¿Estás seguro de que deseas eliminar esta película?');
    if (confirmado) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.indexService.eliminar(id).subscribe(() => {
        alert('Película eliminada correctamente');
        this.router.navigate(['/movies']);
      });
    }
  }
}