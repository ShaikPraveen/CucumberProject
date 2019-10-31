Feature: Nop commerce Login Functionality
  Description: Testing on Nop commerce Login Functionality with provided cerdentials

@sanity
Scenario: Successful Login with valid credentials
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "admin@yourstore.com" and password as "admin"
    And Click Login button
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks logout link
    Then Page Title should be "Your store. Login"
    And Close browser

@regression
Scenario Outline: Successful Login with valid credentials
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "<username>" and password as "<password>"
    And Click Login button
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks logout link
    Then Page Title should be "Your store. Login"
    And Close browser

    Examples: 
      | username            | password |
      | admin@yourstore.com | admin    |
      | admin@yourstore.com | admin    |
