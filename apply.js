const { chromium } = require('playwright');

async function applyJob(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Basic generic attempt (many sites work with this)
  try {
    await page.fill('input[name="name"]', 'Subhajit Manna');
    await page.fill('input[name="email"]', 'subhajitmanna367@gmail.com');
    await page.fill('input[name="phone"]', '8910443107');
    await page.setInputFiles('input[type="file"]', './resume.pdf');
    await page.click('button:has-text("Apply"), button:has-text("Submit")');
  } catch (e) {
    console.log("Form structure different, skipping...");
  }

  await page.waitForTimeout(5000);
  await browser.close();
}

module.exports = applyJob;
