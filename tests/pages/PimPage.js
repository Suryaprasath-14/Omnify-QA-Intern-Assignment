const PimPage = () => ({
    
     addButton: () => $('button.oxd-button i.bi-plus').parentElement(),
    firstName: () => $('input[name="firstName"]'),
    lastName: () => $('input[name="lastName"]'),
    saveButton: () => $('button[type="submit"]'),
    employeeList: () => $('a=Employee List'),
   
   employeeRows: () => $$('div.oxd-table-body .oxd-table-row'),
   waitForEmployeeList: () => $('div.oxd-table-body'),

    async addEmployee(firstName, lastName) {
        await this.addButton().click();
        await this.firstName().waitForExist();
        await this.firstName().setValue(firstName);
        await this.lastName().setValue(lastName);
        await this.saveButton().click();
        await $('.oxd-toast').waitForDisplayed();
         // Go back to PIM main page
    await browser.pause(1000); 
    await this.employeeList().click();

    // Wait for the PIM page to fully load
    await this.addButton().waitForClickable();
    },

   

    async verifyEmployeeInList(name) {
        await this.employeeList().click();
        await this.waitForEmployeeList().waitForDisplayed({ timeout: 5000 });
        // const names = await this.employeeNames();
        // for (const emp of names) {
        //   if (await emp.getText() === name) {
        //     console.log(` ${name} - VERIFIED`);
        //     return true;
        //   }
        // }
        // throw new Error(` ${name} not found in list!`);
        const rows = await this.employeeRows();
for (const row of rows) {
    const firstNameCell = await row.$('div.oxd-table-cell:nth-child(3)');
    const lastNameCell = await row.$('div.oxd-table-cell:nth-child(4)');

    const firstName = (await firstNameCell.getText()).trim();
        const lastName = (await lastNameCell.getText()).trim();
        const combinedName = `${firstName} ${lastName}`;
        
        if (combinedName === name) {
                 console.log(` ${name} - VERIFIED`);
                return true;
               }
    
}
throw new Error(` ${name} not found in list!`);
      }
});

module.exports = PimPage();