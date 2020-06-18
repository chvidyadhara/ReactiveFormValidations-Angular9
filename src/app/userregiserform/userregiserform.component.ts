import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserregsreService } from '../userregsre.service';

@Component({
  selector: 'app-userregiserform',
  templateUrl: './userregiserform.component.html',
  styleUrls: ['./userregiserform.component.css']
})
export class UserregiserformComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean = false;
  cons;

  constructor(private fb: FormBuilder, private regservice: UserregsreService) { }

  reactiveuser() {
    this.userform = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      checkboxs: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],

    }, {

    })
  }
submit() {
    this.submitted = true;
    if (this.userform.valid) {
      this.regservice.userreturn(this.userform.value).subscribe((data) => {
        this.cons = data;
        console.log(this.cons)
        alert("Sucessfully Register")      
      })
    }
    else {
      alert("Feil the required fields")
    }

  }
  ngOnInit() {
    this.reactiveuser()
    //console.log(this.userform)
   
  }
}
