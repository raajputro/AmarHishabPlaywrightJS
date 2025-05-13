Feature: Google Search

  Scenario: Search for Playwright
    Given I open Google homepage
    When I search for "Playwright"
    Then I should see "playwright.dev" in results
