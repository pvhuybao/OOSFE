export class UserLogin {
    constructor(isAuthenticated: boolean = false, profile?: any) {
        this.isAuthenticated = isAuthenticated;
        this.profile = new UserLoginProfile(profile);
    }

    public isAuthenticated: boolean;
    public profile: UserLoginProfile;
}


export class UserLoginProfile {
    constructor(user?: any) {
        if (!user) { return; }
        this.idToken = user.id_token || '';
        this.accessToken = user.access_token || '';
        this.tokenType = user.token_type;
        this.expired = user.expired;
        this.userId = user.profile.sub;
        this.userName = user.profile.preferred_username;
        this.firstname = user.profile.given_name;
        this.lastname = user.profile.family_name;
        this.roleName = user.profile.role;
        this.email = user.profile.email;
        this.fullName = `${this.firstname} ${this.lastname}`;
    }

    public idToken: string;
    public accessToken: string;
    public tokenType: string;
    public expired: boolean;
    public userId: string;
    public userName: string;
    public firstname: string;
    public lastname: string;
    public roleName: string;
    public email: string;
    public fullName: string;
}