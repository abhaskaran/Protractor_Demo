let homepage = function(){
    let firstNum = element(by.model('first'));
    let secNum = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUI = function(url){
        browser.get(url);

    };

    this.enterFirstNum = function(num1){
        firstNum.sendKeys(num1);
    };

    this.enterSecNum = function(num2){
        secNum.sendKeys(num2);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(res){
        let result = element(by.cssContainingText('.ng-binding',res));
        expect(result.getText()).toEqual(res);
    };

};

module.exports = new homepage();