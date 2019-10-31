$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Customers.feature");
formatter.feature({
  "name": "Customers",
  "description": "  Backgroud: Below are common steps for each scenario\n    Given User lauch chrome browser\n    When User opens url \"https://admin-demo.nopcommerce.com/login\"\n    And User enters emails as \"admin@yourstore.com\" and password as \"admin\"\n    And Click Login button\n    Then User can view Dashboard",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add New Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_Customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by EmailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer Email",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should found Email in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should found Name in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/nopcommerceLogin.feature");
formatter.feature({
  "name": "Nop commerce Login Functionality",
  "description": "  Description: Testing on Nop commerce Login Functionality with provided cerdentials",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks logout link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters emails as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks logout link",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks logout link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lauch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_lauch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters emails as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_emails_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_Login_button()"
});
