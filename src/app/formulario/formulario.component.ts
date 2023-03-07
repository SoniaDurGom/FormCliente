import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario/usuario';

@Component({
  selector: 'usuario-form',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  paises=['España','Francia','Alemania'];
  model=new usuario("","",""); //Inancia de la clase usuario, es a la que se acede luego desde el dormulario.html
  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
