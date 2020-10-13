let homepage = require('../pages/homepage');
describe('tests to check the working of calculator',function(){
    it('addition test', function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getUI('http://juliemr.github.io/protractor-demo/');

       // element(by.model('first')).sendKeys('2');
       homepage.enterFirstNum('3');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecNum('4');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult();
        
        browser.sleep(2000);

    });
});