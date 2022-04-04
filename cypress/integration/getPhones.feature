Feature: Testing phone catalog

  Scenario: As a user I can see the list of phones
  Given I'm in phone catalog page
  Then I can see the phone list

  Scenario: As a user I can mark as favorite a phone
  Given I'm in phone catalog page
  And I can see the phone list
  And I can mark as favorite the "iPhone_8" phone
  Then I can see the "iPhone_8" in the favorite list