package steps;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDefinition {
	WebDriver driver;
	LoginPage login;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.init();
		login = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^user is on the Techfios login page$")
	public void user_is_on_the_echfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@Given("^user is on the \"([^\"]*)\" page$")
	public void user_is_on_the_page(String page) {
		if (page.equalsIgnoreCase("Techfios")) {
			driver.get("https://techfios.com/billing/?ng=admin/");
		} else if (page.equalsIgnoreCase("Google")) {
			driver.get("https://www.google.com");
		}
	}

	@When("^user enters user name as \"([^\"]*)\"$")
	public void user_enters_user_name_as(String username) {

		login.enterUserName(username);
	}
	
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname , String pwd) {
		login.enterTheLoginCredentials(uname, pwd);
	}
	@When("^user enters user password as \"([^\"]*)\"$")
	public void user_enters_user_password_as(String password) {
		// login = PageFactory.initElements(driver, LoginPage.class);
		login.enterPassword(password);
	}

	@When("^user clicks on signin button$")
	public void user_clicks_on_signin_button() {
		// login = PageFactory.initElements(driver, LoginPage.class);
		login.clickSignInButton();
	}

	@Then("^user should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
//	  login = PageFactory.initElements(driver, LoginPage.class);
		String title = login.getPageTitle();
		Assert.assertEquals("wrong page", "Dashboard- iBilling", title);
		login.takeScreenshotAtEndOftest(driver);
	}

	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}
}
