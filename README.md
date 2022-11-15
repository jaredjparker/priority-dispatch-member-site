# Priority Dispatch Member Site

This project is being deployed using Netlify and can be found at [https://delightful-cupcake-d078ac.netlify.app/](https://delightful-cupcake-d078ac.netlify.app/).

This application is pulling random user data from the Random User Generator API. The Members List page is displaying 150 results from the ba869649dd7f232a seed to ensure consistent data is being returned. When entering values into the search bar the results will be narrowed to the members that have the entered value in their first name or last name. Clicking on a member listing will direct the user to the Member Profile Page where a large picture of the member, the member’s first and last name,
street, city, state, postcode, email address, date of birth, and phone number are displayed.

The current behavior of the Member Profile Page meets the requested requirements which only works when clicking on a Member Listing on the Members List page. The next step would be to add parameters to the url of the Member Profile Page to allow links to specific users to be loaded directly.


# Running the project Locally

git clone the repo at [https://github.com/jaredjparker/priority-dispatch-member-site/](https://github.com/jaredjparker/priority-dispatch-member-site/).

Change into the directory of the local repo. Then run the commands listed below.

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
