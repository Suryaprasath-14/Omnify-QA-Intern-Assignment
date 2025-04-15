const LoginPage = require('../pages/LoginPage');
const Dashboard = require('../pages/Dashboard');
const PimPage = require('../pages/PimPage');

describe('OrangeHRM Test', () => {
    it('Should add and verify employee', async () => {
        // 1. Login
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        
        // 2. Go to PIM
        await Dashboard.navigateToPIM();
        
        // 3. Add Employee
     
      
       
        const employees = [
            { firstName: 'Aooo', lastName: 'Roy' },
            { firstName: 'Akk', lastName: 'Law' },
            { firstName: 'Atooo', lastName: 'Aark' }
          ];
      
          for (const emp of employees) {
            await PimPage.addEmployee(emp.firstName, emp.lastName);
        }
        
       
         // 4. Verify Employees in List
         for (const emp of employees) {
            const fullName = `${emp.firstName} ${emp.lastName}`;
            await PimPage.verifyEmployeeInList(fullName);
        }
        
        // 5. Log out
        await Dashboard.logout();
    });
});