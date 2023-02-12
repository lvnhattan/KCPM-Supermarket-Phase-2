import RandomUtils from "../../utils/RandomUtils";

let questions = ["What is your favorite colors?","What is your father's nickname?"]

const password = `Password-${RandomUtils.randomizeString()}`;
const user = {
    fullname: `Fullname-${RandomUtils.randomizeString()}`,
    email: `Email-${RandomUtils.randomizeString()}@${RandomUtils.randomizeString(5)}.${RandomUtils.randomizeString(3)}`, 
    username: `Username-${RandomUtils.randomizeString()}`, 
    password, 
    confirmPassword: password,  
    questionNo: questions[RandomUtils.randomNumWithinRange(1,2)-1], 
    answer: `Answer-${RandomUtils.randomizeString()}`, 
    agrrement: 1,
}

const user1 = {
    ...user,
    confirmPassword:'1213'
}

const user2 = {
    ...user,
    password: '123',
    confirmPassword:'123'
}
const data = {
    user,
    user1,
    user2
}

export default data;