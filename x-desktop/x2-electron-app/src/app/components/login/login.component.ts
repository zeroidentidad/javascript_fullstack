import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { LoginService } from '../../providers/login.service';
  import { Router, ActivatedRoute } from '@angular/router';
  import { MatSnackBar } from '@angular/material';
  import { TranslateService } from "@ngx-translate/core";

import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hideForm: boolean;
  savedForm: boolean;
  errorForm: boolean;
  hidePassword: boolean = true;

  usernameControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private fb: FormBuilder,
    public service:LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {

    // if url "/login?logout=1"
    let logoutParam = this.route.snapshot.queryParamMap.get('logout');
    if (logoutParam == '1') {
      this.logout();
    }

    // redirect to home if already logged in
    if (this.service.currentUserValue) {
      this.router.navigate(['/']);
    }


  }

  createForm() {



    this.usernameControl = this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]);
    this.passwordControl = this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]);

    this.loginForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl
    });

    // Reset
    this.hideForm = false;
    this.savedForm = false;
    this.errorForm = false;

  }

  onSubmit() {

    // True == form en cours de traitement
    this.savedForm = true;

    // supprimer les messages d'erreurs
    this.errorForm = false;

    // Valeurs des champs du formulaire
    let values = this.loginForm.value;

    // Service LoginService
    this.service.login(values)
      .pipe(first())
      .subscribe((result) => {

      // Token existe dans retour API
      let tokenExists = typeof result.token !== 'undefined';

      // Cacher le formulaire et preparer la redirection vers la home
      this.hideForm = true;

      if (tokenExists) {
        this.router.navigate(['/']);
        return true;
      }

      // Afficher error en cas d'echec
      this.setFormError();

    }, (err) => {
      console.log(err);
        // Afficher error en cas d'echec
        this.setFormError();
      });

  }

  ngOnInit() {
    this.createForm();
  }

  logout () {
    this.service.logout();
  }

  setFormError() {
    // Afficher le formulaire
    this.hideForm = false;

    // Le formulaire n'est plus en cours de traitement
    this.savedForm = false;

    // Afficher les messages d'erreurs
    this.errorForm = true;

    // Afficher notif dans snackbar
    let msgSnack = this.translate.instant('error.form');
    this._snackBar.open(msgSnack, null, {
      duration: 5000,
    });
  }

}
