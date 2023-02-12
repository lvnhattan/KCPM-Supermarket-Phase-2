import TestData from './search.data';
import HomePage from '../../pages/home';

describe('Search feature: ', () => {
    beforeEach(async () => {
        await HomePage.open();
    })

    // afterEach(async () => {
    //     await HomePage.logout();
    // })

    function doTest({ description, keyword, expected }) {
        it(description, async () => {
            await HomePage.search(keyword);
            switch (expected) {
                case 'SEARCH_SUCCESS':
                    await expect(HomePage.pagination).toExist();
                    break;
                case 'SEARCH_FAIL':
                    await expect(HomePage.pagination).not.toExist();
                    break;
                default:
                    break;
            }
        });
    }
    TestData.forEach(doTest);
});
