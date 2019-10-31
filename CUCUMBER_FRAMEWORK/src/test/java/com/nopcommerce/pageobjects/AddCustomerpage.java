package com.nopcommerce.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerpage 
{
WebDriver ldriver;
	
	public AddCustomerpage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
   
	 By linkCustomers_Menu=By.xpath("//div[3]/div[2]/div/ul/li[4]/a/span");
	 
	 By linkCustomers_SubMenuItem=By.xpath("//div[3]/div[2]/div/ul/li[4]/ul/li[1]/a/span");
	 
	 By addNew_Button=By.xpath("//a[@class='btn bg-blue']"); 
	 
	 By cust_email=By.xpath("//input[@id='Email']");
	 
	 By cust_password=By.xpath("//input[@id='Password']");
	 
	 By cust_firstname=By.xpath("//input[@id='FirstName']");
	 By cust_lastname=By.xpath("//input[@id='LastName']");
	 
	 By cust_genderMale=By.xpath("//input[@id='Gender_Male']");
	 By cust_genderFeMale=By.xpath("//input[@id='Gender_Female']");
	 
	 By cust_Dob=By.xpath("//input[@id='DateOfBirth']");
	 By cust_companyName=By.xpath("//input[@id='Company']"); 

	 By cust_roles=By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");
	 By cust_roleRegistered=By.xpath("//li[contains(text(),'Registered')]");
	 By cust_roleAdminstrator=By.xpath("//li[contains(text(),'Administrators')]");
	 By cust_roleForum=By.xpath("//li[contains(text(),'Forum Moderators')]");
	 By cust_roleGuests=By.xpath("//li[contains(text(),'Guests')]");
	 By cust_roleVendors=By.xpath("//li[contains(text(),'Vendors')]");
	 
	 By cust_mangrvendor=By.xpath("//select[@id='VendorId']");
	 
	 By admin_comment=By.xpath("//textarea[@id='AdminComment']");
	 
	 By save_btn=By.xpath("//button[@name='save']");
	 
	 //Action Methods 
	 public String getTitle()
	 {
		 return ldriver.getTitle();
	 }
	 
	 public void clickOnCustomersMenu()
	 {
		 ldriver.findElement(linkCustomers_Menu).click();
	 }
	 
	 public void clickOnCustomersMenuItem()
	 {
		 ldriver.findElement(linkCustomers_SubMenuItem).click();
	 }
	 
	 public void clickOnAddNewBTN()
	 {
		 ldriver.findElement(addNew_Button).click();
	 }
	 
	 public void setEmail(String email)
	 {
		 ldriver.findElement(cust_email).sendKeys(email);;
	 }
	 
	 public void setPassword(String pwd)
	 {
		 ldriver.findElement(cust_password).sendKeys(pwd);
	 }
	 
	 public void setCustomerRoles(String role) throws InterruptedException
	 {
		 if (!role.equals("Vendors")) //If role is vendors should not delete Register as per req.
		 {
		     ldriver.findElement(By.xpath("//span[contains(text(),'delete')]")).click();
		}
		 ldriver.findElement(cust_roles).click();
		 
		 WebElement listitem;
		 
		 Thread.sleep(2000);
		 
		 if (role.equals("Administrators"))
		 {
			 listitem=ldriver.findElement(cust_roleAdminstrator);
		}else if(role.equals("Forum Moderators"))
		{
			listitem=ldriver.findElement(cust_roleForum);
		}else if(role.equals("Guests"))
		{
			listitem=ldriver.findElement(cust_roleGuests);
		}else if(role.equals("Vendors"))
		{
			listitem=ldriver.findElement(cust_roleVendors);
		}else
		{
			listitem=ldriver.findElement(cust_roleRegistered);
		}
		   //listitem.click();
		    
		    //Click is not work, will use this code
		    JavascriptExecutor js = (JavascriptExecutor)ldriver;
	        js.executeScript("arguments[0].click();", listitem);
	 }
	 
	 public void setManagerOfVendor(String value)
	 {
		 Select drop=new Select(ldriver.findElement(cust_mangrvendor));
		 drop.selectByVisibleText(value);
	 }
	 
	 public void setGender(String gender)
	 {
		 if (gender.equals("Male"))
		 {
		   ldriver.findElement(cust_genderMale).click();	
		}else if (gender.equals("Male"))
		{
			ldriver.findElement(cust_genderFeMale).click();
		}else
		{
			ldriver.findElement(cust_genderMale).click();	
		}
	 }
	 
	 public void setFirstname(String name)
	 {
		 ldriver.findElement(cust_firstname).sendKeys(name);
	 }
	 
	 public void setLasname(String lname)
	 {
		 ldriver.findElement(cust_lastname).sendKeys(lname);
	 }
	 
	 public void setDOB(String dob)
	 {
		 ldriver.findElement(cust_Dob).sendKeys(dob);
	 }
	 
	 public void setCompanyName(String cname)
	 {
		 ldriver.findElement(cust_companyName).sendKeys(cname);
	 }
	 public void setAdminComment(String comment)
	 {
		 ldriver.findElement(admin_comment).sendKeys(comment);
	 }
	 public void clickSaveBTN()
	 {
		 ldriver.findElement(save_btn).click();
	 } 
}
