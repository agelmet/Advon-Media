const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const iframeElement = await page.$('iframe');
  if (iframeElement) {
    const frame = await iframeElement.contentFrame();
    if (frame) {
      const content = await frame.content();
      console.log('IFRAME CONTENT LENGTH:', content.length);
      console.log('IFRAME CONTENT SNIPPET:', content.substring(0, 200));
    } else {
      console.log('NO CONTENT FRAME');
    }
  } else {
    console.log('NO IFRAME FOUND');
  }
  await browser.close();
})();
