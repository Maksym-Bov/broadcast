import {test} from "@playwright/test";
import {faker} from "@faker-js/faker";
import arr  from "../../members.json";
import {eventLink} from "../../data";
const link = eventLink
test('play video 1', async ({page}) => {
    const currentDateHash = arr[97].invited_link_token;
    const userName = faker.internet.userName();
    await page.goto(`${link}${currentDateHash}`);
    await page.locator('#name').fill(userName);
    await page.locator('button.em-btn').click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await new Promise(resolve => setTimeout(resolve, 600000));
    console.log('wait 60 sec');
})