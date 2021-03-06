import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

var components = [ BreadcrumbsComponent, SidebarComponent, HeaderComponent ];

@NgModule({
  declarations: [ components ],
  imports: [ CommonModule ],
  exports: [ components ]
})

export class SharedModule { }
