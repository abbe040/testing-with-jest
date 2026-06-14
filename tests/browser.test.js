const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

let driver; 

jest.setTimeout(30000); 

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('file://' + __dirname + '/../dist/index.html');
});

afterAll(async () => {
    await driver.quit();
});

test('Clicking peek button shows current top of stack', async () => {
    let pushBtn = await driver.findElement(By.id('push'));
    await pushBtn.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Testvärde");
    await alert.accept();
    
    let peekBtn = await driver.findElement(By.id('peek'));
    await peekBtn.click();
    
    let display = await driver.findElement(By.id('top_of_stack')).getText();
    expect(display).toBe("Testvärde");
});