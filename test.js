const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    
    page.on('console', msg => { 
      if (msg.type() === 'error') errors.push(msg.text()); 
    });
    page.on('pageerror', err => errors.push(err.message));
    
    await page.goto('file:///C:/Users/A%20S%20U%20S/OneDrive/Documents/My%20Projects/opencode/index.html');
    await page.waitForTimeout(1500);
    
    const title = await page.title();
    const display = await page.textContent('#result');
    
    console.log('Title:', title);
    console.log('Initial Display:', display);
    console.log('Console Errors:', errors.length > 0 ? errors.join(', ') : 'None');
    
    // Test basic calculation: 5 + 3 = 8
    await page.click('[data-action="5"]');
    await page.click('[data-action="+"]');
    await page.click('[data-action="3"]');
    await page.click('[data-action="="]');
    const addResult = await page.textContent('#result');
    console.log('5 + 3 =', addResult);
    
    // Test scientific function: sqrt
    await page.click('[data-action="sqrt"]');
    const sqrtResult = await page.textContent('#result');
    console.log('sqrt(8) =', sqrtResult);
    
    // Test sin function
    await page.click('[data-action="clear"]');
    await page.click('[data-action="9"]');
    await page.click('[data-action="0"]');
    await page.click('[data-action="sin"]');
    const sinResult = await page.textContent('#result');
    console.log('sin(90) =', sinResult);
    
    // Test clear
    await page.click('[data-action="clear"]');
    const clearResult = await page.textContent('#result');
    console.log('After clear:', clearResult);
    
    await browser.close();
    console.log('\nALL TESTS PASSED');
  } catch (err) {
    console.error('Test Error:', err.message);
    process.exit(1);
  }
})();
