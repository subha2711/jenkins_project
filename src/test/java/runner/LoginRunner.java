package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features", // will get all the methods from different class
		glue = "steps",
		tags ="@Scenario1",
		monochrome = true, 
		dryRun = false, 
		plugin =
				{ "pretty",
				"html:target/cucumber",
				"json:target/cucumber.json" })
public class LoginRunner {

}
