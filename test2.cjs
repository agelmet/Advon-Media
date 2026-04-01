const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const iframes = await page.$$eval('iframe', frames => frames.map(f => f.src));
  console.log('IFRAMES:', iframes);
  await browser.close();
})();
