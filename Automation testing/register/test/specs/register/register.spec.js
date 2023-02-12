import data from "./register.data";
import RegisterPage from  '../../pages/register';

describe('Register application', () => {
    it('should register successfully', async () => {
        const {fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement} = data.user;
        
        await RegisterPage.open();
        await RegisterPage.register(fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement);
        
        const element = await RegisterPage.getMessage();
        await element.waitForExist({ timeout: 5000 });
        await expect(element).toBeExisting();
        const content = await element.getText();
        await expect(content).toEqual(
            'Your account has been created.');
    });

    it('should throw error when password and confirm password not match', async()=>{
        const {fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement} = data.user1;
        
        await RegisterPage.open();
        await RegisterPage.register(fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement);
        
        const element = await RegisterPage.getErrorNotMatchPassword();
        await element.waitForExist({ timeout: 5000 });
        await expect(element).toBeExisting();
        const content = await element.getText();
        await expect(content).toEqual(
            'The password and confirmation password must match.');
    })

    it('should throw error when password does not satisfy the condition', async()=>{
        const {fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement} = data.user2;
        
        await RegisterPage.open();
        await RegisterPage.register(fullname, email, username, password, confirmPassword,  questionNo, answer, agrrement);
        
        const element = await RegisterPage.getErrorPasswordCondition();
        await element.waitForExist({ timeout: 5000 });
        await expect(element).toBeExisting();
        const content = await element.getText();
        await expect(content).toEqual(
            'Password length minimum: 7. Non-alphanumeric characters required: 1.');
    })
});