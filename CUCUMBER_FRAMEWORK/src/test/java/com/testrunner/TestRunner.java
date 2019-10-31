package com.testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		         //features=".//Features/nopcommerceLogin.feature",
		          //features=".//Features/Customers.feature",
		         //features={".//Features/nopcommerceLogin.feature",".//Features/Customers.feature"},
		         features={".//Features/"},
		         glue="com.nopcommerce.stepdefination", 
		         dryRun=false,
		         monochrome=true,
		         plugin={"pretty","html:test-output"},
	    		 strict=false,
	    		 //tags={"@sanity"} //it will execute only sanity scenarios
	    	     //tags={"@sanity","@regression"} //it will execute both sanity and regression
	    		   tags={"@sanity,@regression"} //it will execute either sanity or regression
		)
public class TestRunner
{
    //How to execute specific scenario from the feature file
	//Ans: By using tags
}
