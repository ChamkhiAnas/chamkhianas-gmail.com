import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {


  title = 'greenchip';
  subs;
  isOpen;

  candidatform = new FormGroup({
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', Validators.required),
    campus: new FormControl('', Validators.required),
    motivation: new FormControl('', Validators.required),
  });



  constructor(private _apiservice: ApiService, private modalService: BsModalService) {
  }

  modalRef: BsModalRef;

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }



  //candidater service ...
  onSubmit() {
    const newCandidat = {
      lastName: this.candidatform.controls['lastname'].value,
      firstName: this.candidatform.controls['firstname'].value,
      address: this.candidatform.controls['address'].value,
      number: this.candidatform.controls['number'].value,
      email: this.candidatform.controls['email'].value,
      campus: this.candidatform.controls['campus'].value,
      motivation: this.candidatform.controls['motivation'].value
    };
    if (!this.candidatform.controls['motivation'].invalid && !this.candidatform.controls['campus'].invalid && !this.candidatform.controls['number'].invalid && !this.candidatform.controls['address'].invalid && !this.candidatform.controls['firstname'].invalid && !this.candidatform.controls['lastname'].invalid) {
      this._apiservice.addSubscribers(newCandidat).subscribe(
        noError => {
          alert("Merci de votre candidature " + this.candidatform.controls['lastname'].value + ' ' + this.candidatform.controls['firstname'].value)
          this.modalRef.hide();
        },
        err => {
          if (err.error.code == 11000) {
            alert("vous avez deja candidater " + this.candidatform.controls['lastname'].value + ' ' + this.candidatform.controls['firstname'].value)
            this.modalRef.hide();
          }
          else {
            alert("merci de saisir tous les champs");
          }
          console.log(err)
        })
    }
  }


  ngOnInit() {
    this.isOpen = false;

    console.log(" **********Made by********* \n \n Khalil Kessa && Anas Chamkhi \n Honorable mentions:  Alae Essaki \n\n  ************:DD*********** ");

  }


  openNav() {
    let menu = document.querySelector('.itemsList ul');
    if (this.isOpen) {
      (<any>menu).style = "display:none"
      this.isOpen = false
    }
    else {
      (<any>menu).style = "display:flex"
      this.isOpen = true

    }
  }

  closeNave() {
    let menu = document.querySelector('.itemsList ul');
    (<any>menu).style = "display:none"
    this.isOpen = false;
  }

}
