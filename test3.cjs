const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const type = await page.evaluate(() => typeof window.renderIframe);
  console.log('TYPE OF renderIframe:', type);
  await browser.close();
})();
