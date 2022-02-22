@LoginFeature
Feature: validate TechFios login functionality 

Background: 
#	Given user is on the Techfios login page 
#	Given user is on the "Techfios" page 
	Given user is on the "Techfios" page 

@Scenario1	@Smoke
Scenario: 1 user should be able to login with valid credentials 
	When user enters user name as "demo@techfios.com" 
	When user enters user password as "abc123" 
	And user clicks on signin button 
	Then user should land on dashboard page

@Scenario2	
Scenario:  2 user should be able to login with valid credentials 
	When user enters user name as "demo@techfios.com" 
	When user enters user password as "abc1234" 
	And user clicks on signin button 
	Then user should land on dashboard page
	
@Scenario3
Scenario:  3 user should be able to login with valid credentials 
	When user enters user name as "demos@techfios.com" 
	When user enters user password as "abc123" 
	And user clicks on signin button 
	Then user should land on dashboard page
	
@Scenario4	
Scenario:  4 user should be able to login with valid credentials 
	When user enters user name as "demos@techfios.com" 
	When user enters user password as "abc1234" 
	And user clicks on signin button 
	Then user should land on dashboard page