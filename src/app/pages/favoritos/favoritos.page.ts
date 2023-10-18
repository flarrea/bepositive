import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(public favService: FavoritosService) { }
 
  ngOnInit() {
  }
 
}
