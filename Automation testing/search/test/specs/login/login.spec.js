// import TestData from './login.data';
// import LoginPage from '../../pages/login';
// import HomePage from '../../pages/home';

// describe('Login feature', () => {
//     beforeEach(async () => {
//         await LoginPage.open();
//     })
    
//     afterEach(async () => {
//         await HomePage.logout();
//     })

//     function doTest({ description, username, password, expected }) {
//         it(description, async () => {
//             await LoginPage.login(username, password);
//             switch (expected) {
//                 case 'LOGIN_SUCCESS':
//                     await expect(HomePage.userDropdownMenu).toBeExisting();
//                     await expect(HomePage.userDropdownMenu).toHaveTextContaining(username);
//                     break;
//                 case 'LOGIN_FAIL':
//                     await expect(HomePage.userDropdownMenu).not.toBeExisting();
//                     break;
//                 default:
//                     break;
//             }
//         });
//     }

//     TestData.forEach(doTest);
// });
