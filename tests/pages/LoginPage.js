const LoginPage = () => ({
    username: () => $('input[name="username"]'),
    password: () => $('input[name="password"]'),
    loginBtn: () => $('button[type="submit"]'),

    async open() {
        await browser.url('/');
      },
    async login(username, password) {
        await this.username().setValue(username);
        await this.password().setValue(password);
        await this.loginBtn().click();
        await $('.oxd-topbar-header-breadcrumb').waitForExist();
    }
});

module.exports = LoginPage();