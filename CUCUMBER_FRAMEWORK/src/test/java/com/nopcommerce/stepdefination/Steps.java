package com.nopcommerce.stepdefination;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.nopcommerce.pageobjects.AddCustomerpage;
import com.nopcommerce.pageobjects.NopCommerceLoginpage;
import com.nopcommerce.pageobjects.SearchCustomerPage;

import cucumber.api.java.*;
import io.cucumber.java.en.*;

public class Steps extends BaseClass {
	//public WebDriver driver;
	//NopCommerceLoginpage lp;
	
	
	@Before
	public void setup() throws IOException
	{
		logger=Logger.getLogger("NP COMMERCE APPLICATION");
		PropertyConfigurator.configure(System.getProperty("user.dir")+"\\Logs\\log4j.properties");
		
		
		readconfig=new Properties();
		FileInputStream fis=new FileInputStream(System.getProperty("user.dir")+"\\Properties\\Config.properties");
		readconfig.load(fis);

		String br=readconfig.getProperty("browser");
		
		if (br.equals("chrome")) {			
		System.setProperty("webdriver.chrome.driver", readconfig.getProperty("chromepath"));
		driver = new ChromeDriver();
		logger.info("********CHROME BROWSER LAUNCHED*******");
		}else if(br.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", readconfig.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
			logger.info("********FIREFOX BROWSER LAUNCHED*******");
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	
	@Given("User lauch chrome browser")
	public void user_lauch_chrome_browser() {
		
		
		lp = new NopCommerceLoginpage(driver);
	}

	@When("User opens url {string}")
	public void user_opens_url(String url) 
	{
          driver.get(url);
          logger.info("************NAVIGATE TO APPLICATION URL******* "+url);
	}

	@When("User enters emails as {string} and password as {string}")
	public void user_enters_emails_as_and_password_as(String email, String password) {
		logger.info("**********PROVIDING LOGIN CREDENTIALS************");
		lp.enterEmail(email);
       lp.enterPassword(password);
       
	}

	@When("Click Login button")
	public void click_Login_button() {
       lp.clickLoginBTN();
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String title) {
       if (driver.getCurrentUrl().contains("Login was unsuccessful")) 
       {   
    	   driver.close();
    	   logger.info("*********LOGIN SUCCESS**********");
		   Assert.assertTrue(false);
	} else {
		logger.info("*********LOGIN FAILED**********");
		 Assert.assertEquals(title, driver.getTitle());
	}
	}

	@When("User clicks logout link")
	public void user_clicks_logout_link() throws InterruptedException {
		Thread.sleep(3000);
		lp.clickLogout(); 
	}

	@Then("Close browser")
	public void close_browser()
	{
		logger.info("*********BROWSER CLOSED**********");
		driver.quit();
	}
	
    
	
	//Add new customer steps
	@Then("User can view Dashboard")
	public void user_can_view_Dashboard()
	{
	   addcust=new AddCustomerpage(driver);
	   Assert.assertEquals("Dashboard / nopCommerce administration", addcust.getTitle());
	}

	@When("User click on Customers Menu")
	public void user_click_on_Customers_Menu() throws InterruptedException 
	{
		Thread.sleep(3000);
	 addcust.clickOnCustomersMenu();
	}

	@When("Click on Customers Menu Item")
	public void click_on_Customers_Menu_Item() throws InterruptedException
	{
		Thread.sleep(2000);
	    addcust.clickOnCustomersMenuItem();
	}

	@When("Click on Add new button")
	public void click_on_Add_new_button() throws InterruptedException {
       addcust.clickOnAddNewBTN();
       Thread.sleep(2000);
	}

	@Then("User can view Add new Customer page")
	public void user_can_view_Add_new_Customer_page() {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addcust.getTitle());
	}

	@When("User enter customer info")
	public void user_enter_customer_info() throws InterruptedException
	{
		logger.info("*********ADDING A CUSTOMER**********");
		logger.info("*********PROVIDING CUST DETAILS**********");
		String email=randomEmail()+"@gmail.com";
		addcust.setEmail(email);
		addcust.setPassword("test1234");
		addcust.setFirstname("praveen");
		addcust.setLasname("sairam");
		addcust.setGender("Male");
		addcust.setDOB("7/05/1990");// Format: D/MM/YYY
		addcust.setCompanyName("Tcs");
		
		// Registered - default
        // The customer cannot be in both 'Guests' and 'Registered' customer roles
        // Add the customer to 'Guests' or 'Registered' customer role
		addcust.setCustomerRoles("Guests");
		addcust.setManagerOfVendor("Vendor 2");
		addcust.setAdminComment("This is for testing for adding new customer.....");
	}

	@When("Click on save button")
	public void click_on_save_button() throws InterruptedException {
	logger.info("*********CUSTOMER DETAILS SAVED**********");
	 addcust.clickSaveBTN();
	 Thread.sleep(2000);
	}

	@Then("User can view Confirmation message {string}")
	public void user_can_view_Confirmation_message(String message) {
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
                .contains("The new customer has been added successfully"));
	}
	
	//Searching for customer using emailid
	@When("Enter customer Email")
	public void enter_customer_Email()
	{
		logger.info("*********SEARCHING A CUSTOMER BY USING EMAILID**********");
		searchcust=new SearchCustomerPage(driver);
		searchcust.setEmail("admin@yourStore.com");
	}

	@When("Click on search button")
	public void click_on_search_button() throws InterruptedException {
		searchcust.clickSearch();
		Thread.sleep(2000);
	}

	@Then("User should found Email in the search table")
	public void user_should_found_Email_in_the_search_table() {
		boolean status=searchcust.searchCustomerByEmail("admin@yourStore.com");
		Assert.assertEquals(true, status);
	}
	
	
	//Searching for customer by using Firstname and Lastname
	
	@When("Enter customer FirstName")
	public void enter_customer_FirstName() 
	{
		logger.info("*********SEARCHING A CUSTOMER BY USING NAME**********");
		searchcust=new SearchCustomerPage(driver);
		searchcust.setFirstName("John");
	}

	@When("Enter customer LastName")
	public void enter_customer_LastName() {
		searchcust.setLastName("Smith");
	}

	@Then("User should found Name in the search table")
	public void user_should_found_Name_in_the_search_table() {
		boolean status=searchcust.searchCustomerByName("John Smith");
		Assert.assertEquals(true, status);
	}
}
