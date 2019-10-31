package com.nopcommerce.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NopCommerceLoginpage 
{
	
	WebDriver ldriver;
	
	public NopCommerceLoginpage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath="//input[@id='Email']")
	@CacheLookup
	WebElement emailId;
	
	@FindBy(xpath="//input[@id='Password']")
	@CacheLookup
	WebElement password;
	
	@FindBy(xpath="//input[@type='submit']")
	@CacheLookup
	WebElement login;
	
	@FindBy(linkText="Logout")
	@CacheLookup
	WebElement logout;
	
	
	public void enterEmail(String email)
	{
		emailId.sendKeys(email);
	}
	
	public void enterPassword(String pwd)
	{
		password.sendKeys(pwd);
	}
	
	public void clickLoginBTN()
	{
		login.click();
	}
	
	public void clickLogout()
	{
		logout.click();
	}
}
