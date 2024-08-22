describe('home spec', () => {         //  test suite 

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // cy.visit = visit to the page 
  })

  it('Verify the Tittle is displaying correctly', () => {    // passed test case 

    cy.title().should('eq', 'OrangeHRM');   // eq = equal
  })

  it('Verify the Tittle is displaying incorrectly', () => {  // failed test case (write this to danaganeemata) 

    cy.title().should('eq', 'OrangeHRMer');
  })

  it('Verify the image is visible', () => {       // passed test case 

    //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-logo > img').should('be.visible');
    // #app > div.orangehrm-login-layout > div > div.orangehrm-login-logo > img  -> selector xpath 
    cy.xpath('//*[@id="app"]/div[1]/div/div[2]/img').should('be.visible');  // inspect and take this xpath
  })

  it('Verify the login tittle', () => {     // passed test case 

    cy.get('h5');
  })

  it('Verify the login with valid username and password', () => {   // passed test case
 
    cy.xpath("//input[@placeholder='Username']").type('Admin');
    //cy.get('input[name="username"]').type('Admin');
    cy.xpath("//input[@placeholder='Password']").type('admin123');
    //cy.get('input[name="password"]').type('admin123');
    cy.xpath("//button[normalize-space()='Login']").click();
    //cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada // click on the login button
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // after clicking the login button check where to navigate 
    //cy.url().should('include', '/dashboard'); // naviagete wena page url eke kohe hari /dashboard thiyenwada balanawa 
  })

  it('Verify the login with invalid username and valid password', () => {      // passed test case 
  
    //cy.xpath("//input[@placeholder='Username']").type('Kasun');
    cy.get('input[name="username"]').type('Kasun');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();   // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
    // .oxd-text.oxd-text--p.oxd-alert-content-text => for a class we used (.) cy.get('.class-name')  // Class selector
    // cy.get('#id-name')  // ID selector

  })

  it('Verify the login with invalid password and valid username', () => {    // passed test case

    //cy.xpath("//input[@placeholder='Username']").type('Admin');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('kasun123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
  })

  it('Verify the login with invalid username and password', () => {   // passed test case 

    //cy.xpath("//input[@placeholder='Username']").type('Kasun');
    cy.get('input[name="username"]').type('Kasun');
    cy.get('input[name="password"]').type('kasun123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
  })

  it('Verify the login with empty username and valid password', () => {   // passed test case

    //cy.xpath("//input[@placeholder='Username']").type(' ');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada    // click on the login button
    //cy.get('.oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message').should('be.visible').and('contain.text', 'Required');
    //above cy.get command is an error -> cause in the class path there's no defined the dots (.) infront of the oxd  
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('be.visible').and('contain.text', 'Required');
    //using dots (.) -> This selector targets elements that have all the specified classes. Each class name is a separate segment, 
    //joined by dots with no spaces. 
  })

  it('Verify the login with empty password and valid username', () => {   // passed test case 

    //cy.xpath("//input[@placeholder='Username']").type('yourUsername');
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('be.visible').and('contain.text', 'Required');     
  })

  it('Verify the login with empty username and password', () => {  // passed test case

    //cy.xpath("//input[@placeholder='Username']").type('yourUsername');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('be.visible').and('contain.text', 'Required');     
  })

  it('Verify the login with case sensitive with username and password', () => {   // passed test case 

    //cy.xpath("//input[@placeholder='Username']").type('yourUsername');
    cy.get('input[name="username"]').type('KAsunN');
    cy.get('input[name="password"]').type('KaSuN123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
  })

  it('Verify the "Forget Your Password" link redirect to "Reset Password" page correct page', () => {   // passed test case

    //cy.xpath("//input[@placeholder='Username']").type('yourUsername');
    cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click();  // oxd-text oxd-text--p orangehrm-login-forgot-header// use dots(.) for spaces
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    
  })
})



