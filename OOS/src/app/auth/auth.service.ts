import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, Subscription } from 'rxjs/Rx';
import { RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import { UserLogin, UserLoginProfile } from './user-login.model';
import { ClientStorageService } from '../shared/services/client-storage.service';

const userTokenKey = 'USER_TOKEN';

@Injectable()
export class AuthService {
    private _userLogin: UserLogin;
    public readonly authorizationKey = 'Authorization';

    constructor(private clientStorageService: ClientStorageService) { }

    public getUserLogin(): UserLogin {
        this._userLogin = this.clientStorageService.getLocalStorage(userTokenKey) || new UserLogin();
        return this._userLogin;
    }

    public setUserLogin(isAuthenticated: boolean = false, user?: UserLoginProfile) {
        this._userLogin = new UserLogin(isAuthenticated, user);
        this.clientStorageService.setLocalStorage(userTokenKey, this._userLogin);
    }

    public setRequestOptions(options?: RequestOptionsArgs) {
        const authHeaders = new Headers();
        this.getUserLogin();
        authHeaders.append(this.authorizationKey, this._userLogin.profile.tokenType + ' ' + this._userLogin.profile.accessToken);
        authHeaders.append('Content-Type', 'application/json');

        if (options) {
            if (options.headers) {
                options.headers.append(authHeaders.keys[0], authHeaders.values[0]);
            } else {
                options.headers = authHeaders;
            }
        } else {
            options = new RequestOptions({ headers: authHeaders });
        }

        return options;
    }
}