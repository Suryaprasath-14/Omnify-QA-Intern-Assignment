const Dashboard = () => ({
    pimMenu: () => $('span=PIM'),
    
    userMenu: () => $('span.oxd-userdropdown-tab'),
    logoutButton: () => $('a[href="/web/index.php/auth/logout"]'),

    async navigateToPIM() {
        await this.pimMenu().click();
        await $('.oxd-table-filter-header-title').waitForExist();
    },

    async logout() {
        await this.userMenu().waitForClickable();
        await this.userMenu().click();
        await this.logoutButton().waitForDisplayed();
        await this.logoutButton().click();
        console.log("logged out");
        
    }
});

module.exports = Dashboard();