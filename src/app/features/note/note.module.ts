import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';
import { NotePage } from './pages/note.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NotePageRoutingModule],
  declarations: [NotePage],
})
export class NotePageModule {}
