# Cloudbees CBC-UI Coding Challenge

## Project Setup
### React/Next.js 
1. Clone this repo: ``` git clone https://github.com/Thaarik/Cloudbees.git ```
2. Go to the file directory:``` cd Cloudbees ```
3.  Run the command to install the package: ``` npm install ```
4. Next start the frontend service:``` npm run dev ```
5. The frontend runs in ``` http://localhost:3000  ```

### Built
1. The project is built using Next.js.
2. Styling is done using TailwindCSS

## Information
### Part-One
1. The part-one project first loads with the GitHub users list limited to 8 users.
2. When a user clicks on any one of the list, it redirects them to the chosen gitHub user's profile page.
3. The application is also built with light and dark mode.
4. In order to fetch the GitHub API data, it is fetched from the server in /app/api directory. The details fetched from 'List Users' (https://api.github.com/users) and 'Get a User' detail (https://api.github.com/users/{USERNAME}) are combined respectively into single JSON object and send it as a Response (FETCH API). This data is stored in cache for performance optimization.
5. Also, with the above method, the full name of the user detail can be added along with the username and avatar in the List page.
6. The application is mobile responsive.
7. The Data Fetching is done in server (Server-Side Rendering). Error handling is also done.

GitHub List Page:
![image](https://github.com/Thaarik/Cloudbees/assets/52432079/4cac2134-ec2e-4405-8877-d56503ed32b0)



GitHub User Page:
![image](https://github.com/Thaarik/Cloudbees/assets/52432079/226b7b42-a8e5-47b0-bdaa-2f3e2cdf85c8)


### Part-two
1. In part-two project is exactly similar to part one except in fetching data.
2. The github API links are fetched for List user are fetched in 'UserList.jsx' component and displayed in the homepage with the exception of no full name data. The reason is that the 'List users' API (https://api.github.com/users) does not have full name of the users. So the List page details only username and user avatar image.
3. When a user clicks on anyone of the lists, again it fetches the 'Get a user' detail API url (https://api.github.com/users/{USERNAME}) containing all the details of the chosen user and displaying it in the User details page.
4. In order to fetch the data, Hooks are used. This makes use of the client-side rendering too.
5. From my observance, the part one project performs better than part two due to better performance optimization by Server-side rendering and minimal fetching of api due to caching.
