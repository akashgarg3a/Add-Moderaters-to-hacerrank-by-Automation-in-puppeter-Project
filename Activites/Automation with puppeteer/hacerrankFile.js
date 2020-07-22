let swd = require('selenium-webdriver');
require('chromedriver');
let loginURL = process.argv[2];
let loginID = process.argv[3];
let loginPassword = process.argv[4];
let userNameToAdd = process.argv[5];

let bldr = new swd.Builder();
let driver = bldr.forBrowser('chrome').build();
driver.manage().window().maximize();

(async function() {
    try {
        await driver.manage().setTimeouts({
            implicit : 50000,
            pageLoad : 50000,
        })
        await driver.get(loginURL);
        let id = await driver.findElement(swd.By.css('#input-1'));
        let password = await driver.findElement(swd.By.css('#input-2'));
        await id.sendKeys(loginID);
        await password.sendKeys(loginPassword);
        let submitButton = await driver.findElement(swd.By.css('.auth-button'));
        await submitButton.click();
        let adminstrationBlock = await driver.findElement(swd.By.css('a[data-analytics=NavBarProfileDropDownAdministration]'))
        let urlOfAdminBlock = await adminstrationBlock.getAttribute('href');
        await driver.get(urlOfAdminBlock);
        await driver.wait(swd.until.elementLocated(swd.By.css('ul.admin-tabbed-nav')));
        let ManageChalange = await driver.findElements(swd.By.css('ul.admin-tabbed-nav li'));
        await ManageChalange[1].click();
        let currURL = await driver.getCurrentUrl();
        handleQuestion(currURL);
    }
    catch(err) {
        console.error(err);
    }
})()

async function handleQuestion(QuestionPageURL) {
    try {
        let Qno = 1;
        await driver.wait(swd.until.elementLocated(swd.By.css('a.backbone.block-center')));
        let InQuestion = await driver.findElements(swd.By.css('a.backbone.block-center'));
        let directToQuestionPage = InQuestion[0];
        while(directToQuestionPage != undefined) {
            
            let nextPage = Qno/10;
            Qno %= 10;
            await directToQuestionPage.click();
            await ManageQuestion();
            await driver.get(QuestionPageURL);
            if(nextPage == 1) {
                await driver.wait(swd.until.elementLocated(swd.By.css('div.pagination li')));
                let nextPageBox = await driver.findElements(swd.By.css('div.pagination li'));
                let ClassName = await nextPageBox[5].getAttribute('class');
                if(ClassName === 'disabled') {
                    directToQuestionPage = undefined;
                    continue;
                }
                await nextPageBox[5].click();
                QuestionPageURL = driver.getCurrentUrl();
                InQuestion = await driver.findElements(swd.By.css('a.backbone.block-center'));
            }
            InQuestion = await driver.findElements(swd.By.css('a.backbone.block-center'));
            directToQuestionPage = InQuestion[Qno];
            Qno++;
        }
    }
    catch(err) {
        console.log(err);
    }
}

async function ManageQuestion() {
    try {
        let moderators = await driver.findElement(swd.By.css('li[data-tab=moderators]'));
        await driver.wait(swd.until.elementLocated(swd.By.css('span.tag')));
        await moderators.click();
        let inputBox = await driver.findElement(swd.By.css('input[id=moderator]'));
        await inputBox.sendKeys(userNameToAdd);
        let saveButton = await driver.findElement(swd.By.css('button.save-challenge'));
        await saveButton.click();
    }
    catch(err) {
        console.log(err);
    }
}