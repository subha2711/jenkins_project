$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "validate TechFios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "duration": 1998301300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#\tGiven user is on the Techfios login page"
    },
    {
      "line": 6,
      "value": "#\tGiven user is on the \"Techfios\" page"
    }
  ],
  "line": 7,
  "name": "user is on the \"Techfios\" page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_is_on_the_page(String)"
});
formatter.result({
  "duration": 1006913600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Scenario1"
    },
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enters user name as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters user password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_user_name_as(String)"
});
formatter.result({
  "duration": 99044500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_user_password_as(String)"
});
formatter.result({
  "duration": 90621600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1383877600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 316215000,
  "status": "passed"
});
formatter.after({
  "duration": 679342600,
  "status": "passed"
});
});