import puppeteer, { Browser } from "puppeteer";
import { customAlphabet } from "nanoid";
import * as faker from "faker";
// @ts-ignore
import fakeCC from "fake_credit_card";

const getClickId = customAlphabet(`abcdefghijklmnopkrstuvwxyz123456789`, 32);
const getPubId = customAlphabet("123456789", 2);

const run = async () => {
  const browser: Browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(
    `https://luckyadwinner.com/english/?clickid=${getClickId()}&pubid=${getPubId()}&subpub=&extra=`
  );
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  await page.focus(`[placeholder="First name"]`);
  await page.keyboard.type(firstName);

  await page.focus(`[placeholder="Last name"]`);
  await page.keyboard.type(lastName);

  await page.focus(`[placeholder="Street address"]`);
  await page.keyboard.type(faker.address.streetAddress());

  await page.focus(`[placeholder="Zip/postal code"]`);
  await page.keyboard.type(faker.address.zipCode());

  await page.focus(`[placeholder="Email address"]`);
  await page.keyboard.type(faker.internet.email());

  await page.focus(`[placeholder="Phone"]`);
  await page.keyboard.type(faker.phone.phoneNumber());

  await page.focus(`[placeholder="Password"]`);
  await page.keyboard.type(faker.internet.password());

  await page.click("#submit");

  // await browser.close();
};

run();
