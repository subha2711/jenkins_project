@OtherFeature 
Feature: Other validate TechFios login functionality 

Background: 

	Given user is on the "Techfios" page 
	
#@Other1 @Smoke 
Scenario: 1 user should be able to login with valid credentials 
	When user enters user name as "demo@techfios.com" 
	When user enters user password as "abc123" 
	And user clicks on signin button 
	Then user should land on dashboard page
		
	@Other2 @Smoke	
Scenario:  2 user should be able to login with valid credentials 
	When user enters user name as "demo@techfios.com" 
	When user enters user password as "abc1234" 
	And user clicks on signin button 
	Then user should land on dashboard page
	
@Other3
Scenario:  3 user should be able to login with valid credentials 
	When user enters user name as "demos@techfios.com" 
	When user enters user password as "abc123" 
	And user clicks on signin button 
	Then user should land on dashboard page
	
@Other4	
Scenario:  4 user should be able to login with valid credentials 
	When user enters user name as "demos@techfios.com" 
	When user enters user password as "abc1234" 
	And user clicks on signin button 
	Then user should land on dashboard page