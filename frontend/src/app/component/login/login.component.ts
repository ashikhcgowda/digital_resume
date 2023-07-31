import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/service/login-api.service';
import { LoginDialogAlertComponent } from '../login-dialog-alert/login-dialog-alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginform! : FormGroup;

  isLoggedin?: boolean;
 
  constructor(private fb:FormBuilder,private login_service:LoginApiService,
    private router: Router,
    private ngZone: NgZone,public dialog: MatDialog
   ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group
    ({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      city: new FormControl('',Validators.required),
      phonenumber: new FormControl('',[Validators.required])
    })
  }

  get myForm() {
    return this.loginform.controls;
  }

  onsubmit(value:any)
  {
this.submitted = true;
if(!this.loginform.valid)
{
  return false;
}
else
{
    return this.login_service.createlogin(this.loginform.value).subscribe(
    {
      
      complete: () => {
        console.log('login successfully created!', this.loginform.value.name);
        this.openDialog();
        this.router.navigate(['/dashboard/about'])
      },
      error: (e) => {
        console.log(e);
      },
    })
    
  }}

openDialog()
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width="80%";
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  this.dialog.open(LoginDialogAlertComponent,
    {
      height: 'auto',
      width:'auto'
    })
}


}



