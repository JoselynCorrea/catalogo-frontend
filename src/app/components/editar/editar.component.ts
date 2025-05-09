import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-editar',
  standalone: false,
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  movie: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private indexService: IndexService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.indexService.getMovieById(this.id).subscribe(data => {
      this.movie = data;
    });
  }

  onSubmit(): void {
    this.indexService.editar(this.id, this.movie).subscribe(() => {
      alert('Película actualizada correctamente');
      this.router.navigate(['/movie/'+this.id]);
    });
  }
}
