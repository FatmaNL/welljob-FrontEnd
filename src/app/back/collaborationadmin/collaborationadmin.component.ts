import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collaboration } from 'src/app/collaboration';
import { CollaborationService } from './collaborationadmin.service';

@Component({
  selector: 'app-collaborationadmin',
  templateUrl: './collaborationadmin.component.html',
  styleUrls: ['./collaborationadmin.component.css']
})
export class CollaborationadminComponent implements OnInit {

  collaborations: any;
  
  public editCollaboration: any;
  public deleteCollaboration: any;

  constructor(private collaborationService: CollaborationService) { }


  ngOnInit(): void {
    this.getCollaborations();
  }

  public getCollaborations(): void {
    this.collaborationService.getCollaborations().subscribe(
      (response: Collaboration[]) => {
        this.collaborations = response;
        console.log(this.collaborations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCollaboration(addForm: NgForm): void {
    // document.getElementById('add-collaboration-form').click();
    this.collaborationService.addCollaboration(addForm.value).subscribe(
      (response: Collaboration) => {
        console.log(response);
        this.getCollaborations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCollaboration(collaboration: Collaboration, id:number): void {
    this.collaborationService.updateCollaboration(collaboration, id).subscribe(
      (response: Collaboration) => {
        console.log(response);
        this.getCollaborations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCollaboration(id: number): void {
    this.collaborationService.deleteCollaboration(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCollaborations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(collaboration: Collaboration, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCollaborationModal');
    }
    if (mode === 'edit') {
      this.editCollaboration= collaboration;
      button.setAttribute('data-target', '#updateCollaborationModal');
    }
    if (mode === 'delete') {
      this.deleteCollaboration = collaboration;
      button.setAttribute('data-target', '#deleteCollaborationModal');
    }
    container.appendChild(button);
    button.click();
  }
}
