import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit{
  public usuarios:any=[];
  constructor(private service:UsuarioServiceService){

  }
  ngOnInit(): void {
      this.service.getUsuarios().subscribe((respons:any)=>{
        this.usuarios=respons;
      })
  }

}
