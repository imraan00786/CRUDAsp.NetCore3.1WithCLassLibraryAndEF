Aurelia Client APP integration with Asp.Net Core 3.1 APIs for CRUD Operations.

This project developed on Asp.Net Core 3.1 using Web API, Standard class library and EF Core and client app in Aurelia framework.

To run the project, please follow below steps.
1. Aurelia client app need to be run independent.
   1. Open the command prompt and redirect to aureliaclientapp1 folder
   2. Run the command: au run --open
2. Open the solution with the name "Hahn.ApplicatonProcess.Application" in visual studio.
3. Set up project "Hahn.ApplicatonProcess.May2020.Web" as set as startup project.
4. Run the project "Hahn.ApplicatonProcess.May2020.Web" in visual studio.
5. Test the Add, Get, Update, And Delete operation in aurelia client app.

Note: Aurelia client app is runs on http only, but if your browser redirect to https, please keep http to run the app, you can use different browser where setting is disabled for redirection to https.

1. In web api project need to set the url of aurelia client app for handling CORS. If aurelia app runs in any other port than 8080, please set the url in appsettings.json of the project "Hahn.ApplicatonProcess.May2020.Web", below is the setting key to find.
   "ClientApp": {
    "URL": "http://localhost:8080"
  }
  
2. Find the web api url after running the project and set the url into aurelia client app for service call in below path.
