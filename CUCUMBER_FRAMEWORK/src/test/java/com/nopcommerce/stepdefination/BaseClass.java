package com.nopcommerce.stepdefination;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.nopcommerce.pageobjects.AddCustomerpage;
import com.nopcommerce.pageobjects.NopCommerceLoginpage;
import com.nopcommerce.pageobjects.SearchCustomerPage;

public class BaseClass
{
	public WebDriver driver;
	public NopCommerceLoginpage lp;
	public AddCustomerpage addcust;
	public SearchCustomerPage searchcust;
	public static Logger logger;
	
	public Properties readconfig;
	
	public static String randomEmail()
	{
		String email=RandomStringUtils.randomAlphabetic(5);
		return email;
	}
}
