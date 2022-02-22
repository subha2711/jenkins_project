@OtherFeature
@OtherFeature @smoke
Feature:  Other validate TechFios login functionality 

Background: 
#	Given user is on the Techfios login page 
#	Given user is on the "Techfios" page 
	Given user is on the "Techfios" page 


@Other1
Scenario Outline: 1 user should be able to login with valid credentials 
	When user enters "<username>" and "<password>" 
	And user clicks on signin button 
	Then user should land on dashboard page 
	Examples:
		|	username	|	password	|
		|	demo@techfios.com	|	abc123	|
		|	demo1@techfios.com|	abc123	|
		|	demo@techfios.com	|	abc1234	|
		|	demo1@techfios.com|	abc1234	|
