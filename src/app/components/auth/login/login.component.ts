import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { TokenStorageService } from '../../../services/security/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = { username: null, password: null };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {}

  ngOnInit() {}
}
