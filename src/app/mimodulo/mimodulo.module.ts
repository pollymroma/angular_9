import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './componentes/panel/panel.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';



@NgModule({
  declarations: [PanelComponent, ContenidoComponent],
  imports: [
    CommonModule
  ],
  exports: [ //lo exporto para que sea publico y lo pueda usar otro, si no queda en delcarations
    PanelComponent
  ]
})
export class MimoduloModule { }
