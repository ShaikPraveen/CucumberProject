Feature: Customers
  
  Backgroud: Below are common steps for each scenario
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "admin@yourstore.com" and password as "admin"
    And Click Login button
    Then User can view Dashboard

@regression
Scenario: Add New Customer
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "admin@yourstore.com" and password as "admin"
    And Click Login button
    Then User can view Dashboard
    When User click on Customers Menu
    And Click on Customers Menu Item
    And Click on Add new button
    Then User can view Add new Customer page
    When User enter customer info
    And Click on save button
    Then User can view Confirmation message "The new customer has been added successfully."
    And Close browser

@sanity
Scenario: Search customer by EmailID
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "admin@yourstore.com" and password as "admin"
    And Click Login button
    Then User can view Dashboard
    When User click on Customers Menu
    And Click on Customers Menu Item
    And Enter customer Email
    When Click on search button
    Then User should found Email in the search table
    And Close browser

@sanity
Scenario: Search customer by Name
    Given User lauch chrome browser
    When User opens url "https://admin-demo.nopcommerce.com/login"
    And User enters emails as "admin@yourstore.com" and password as "admin"
    And Click Login button
    Then User can view Dashboard
    When User click on Customers Menu
    And Click on Customers Menu Item
    And Enter customer FirstName
    And Enter customer LastName
    When Click on search button
    Then User should found Name in the search table
    And Close browser
