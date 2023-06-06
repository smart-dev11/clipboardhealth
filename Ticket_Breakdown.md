# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom id field for Agents in Facilities table

#### Description:
Currently, the Agents in our system are identified by their internal database id.
We need to enhance the system to allow Facilities to save their own custom ids for each Agent they work with.
This will enable them to use their custom ids when generating reports.

#### Acceptance Criteria:

- Add a new column `custom_id` to the Facilities table to store the custom ids.
- Update the Facilities UI to allow Facilities to input and save custom ids for Agents.
- Validate that custom ids are unique within a Facility.
- Ensure that custom ids can be edited or deleted if needed.

#### Time/Effort Estimate: 6 hours

#### Implementation Details:

1. Add the `custom_id` column to the Facilities table using an ALTER TABLE statement in the database. (or we can use other ORM system.)
2. Update the Facilities UI to include a field for entering custom ids and the necessary logic for saving, editing, and deleting custom ids.
3. Implement validation to check for uniqueness of custom ids within a Facility.
4. Write appropriate database queries to handle CRUD operations related to custom ids.


### Ticket 2: Update getShiftsByFacility function to include custom ids

#### Description:
The `getShiftsByFacility` function currently returns all Shifts worked in a quarter, including some metadata about the Agent assigned to each.
So we also need to update this function to include the custom id of each Agent in the returned data.

#### Acceptance Criteria:

- Modify the `getShiftsByFacility` function to fetch the custom id of each Agent assigned to a Shift.
- Include the custom id in the metadata returned for each Shift.

#### Time/Effort Estimate: 3 hours

#### Implementation Details:

1. Update the database query within the `getShiftsByFacility` function to retrieve the custom id of the Agent along with other metadata.
2. Modify the data structure of the returned Shifts to include the custom id.



### Ticket 3: Update generateReport function to use custom ids

#### Description:
The `generateReport` function is responsible for converting Shifts into a PDF report.
So we also need to update this function to use the custom id of each Agent when generating reports.

#### Acceptance Criteria:

- Modify the `generateReport` function to use the custom id instead of the internal database id for each Agent in the generated report.
- Ensure that the custom id is correctly displayed in the PDF report.

#### Time/Effort Estimate: 3 hours

#### Implementation Details:

1. Modify the logic in the `generateReport` function to retrieve and use the custom id of each Agent instead of the internal database id.
2. Update the PDF generation code to include the custom id in the appropriate section of the report.


### Ticket 4: Testing and QA

#### Description:
Perform thorough testing and quality assurance to ensure that the custom id feature functions as expected and there are no regressions or issues introduced.

#### Acceptance Criteria:

- Test the custom id functionality in the Facilities UI, ensuring that custom ids can be saved, edited, and deleted correctly.
- Verify that the `getShiftsByFacility` function returns the custom id of each Agent along with other metadata.
- Validate that the `generateReport` function correctly uses the custom id in the PDF report.
- Perform regression testing to ensure that existing functionality is not affected.

#### Time/Effort Estimate: 3 hours

#### Implementation Details:

1. Design and execute test cases to cover all aspects of the custom id feature.
2. Perform manual testing of the Facilities UI, getShiftsByFacility function, and generateReport function.
3. Verify the correctness of the generated PDF reports.
4. Document any issues or bugs found and coordinate with the development team to address them.
