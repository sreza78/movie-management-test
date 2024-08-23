import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_AVATAR } from "@progress/kendo-angular-layout";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { ReactiveFormsModule } from '@angular/forms';
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import {
  SVGIcon,
  eyeIcon
} from "@progress/kendo-svg-icons";
import { UserService } from "../../services/user.service";
import { AlertService } from "../../services/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_AVATAR, KENDO_LABEL, KENDO_BUTTON],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public svgEye: SVGIcon = eyeIcon;
  @ViewChild("password") public textbox!: TextBoxComponent;

  constructor(private userService : UserService, private alertService: AlertService, private router : Router){

  }

  ngOnInit(){
    let user = localStorage.getItem("loggedin")

    if(user){
      this.router.navigate(["/"])
    }
  }

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    loggedin: new FormControl(),
  });

  public login(): void {
    this.form.markAllAsTouched();

    let username = this.form.get("username")
    let password = this.form.get("password")
    
    if(!username?.valid || !password?.valid){
      this.alertService.showWarning("لطفا نام کاربری و کلمه عبور را وارد کنید")
      return
    }

    this.userService.login(username.value, password.value).then((user) =>{
      localStorage.setItem("loggedin", JSON.stringify({id : user.id, name : user.name}))
      this.router.navigate(["/"])
    })
    .catch(() =>{
      this.alertService.showError("نام کاربری یا کلمه عبور اشتباه است")
    })
  }
}
