import { Component} from '@angular/core';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
    this.indexService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  
}
