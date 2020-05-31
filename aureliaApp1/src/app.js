
import {HttpClient} from 'aurelia-fetch-client';

import {Settings} from '../settings.json';

let httpClient = new HttpClient();

export class App {

        constructor() { 
        
        this.applicantRecords = null;
        this.selectedRecord = null;
        this.fetchApplicants();
        } 

        cleanApplication()
        {
          this.selectedRecord = null;
          this.id = null;
          this.firstName = null;
          this.familyName = null;
          this.adress = null;
          this.emailAdress = null;
          this.age = null;
          this.countryOfOrigin = null;
          this.hired = true;
        }
        selectedRow(data)
        {
                  this.id = data.id;
                  this.firstName = data.firstName;
                  this.familyName = data.familyName;
                  this.adress = data.adress;
                  this.emailAdress = data.emailAdress;
                  this.age = data.age;
                  this.countryOfOrigin = data.countryOfOrigin;
                  this.hired = data.hired;
                  this.selectedRecord = data;
        }

        fetchApplicants()
        {
                  httpClient.fetch('https://localhost:44321/api/applicants', {
                    "content-type":"application/json",
                    "withCredentials":true
                  })
                      .then(response => response.json())
                      .then(data => { 
                         this.applicantRecords = data;       
                         console.log(data);                  
                      });
        }

        insertApplicant()
        {
        
                var applicant = {                                                  
                  "firstName": this.firstName,
                  "familyName": this.familyName,
                  "age": parseInt(this.age),
                  "adress":this.adress,
                  "emailAdress":this.emailAdress,
                  "countryOfOrigin":this.countryOfOrigin,
                  "hired":true
                 };

               httpClient.fetch('https://localhost:44321/api/applicants', {
                 method: "POST",         
                 headers: {
                        'content-type': 'application/json'
                    },
                 body: JSON.stringify(applicant)
              })                
              .then(response => response.json())
              .then(data => {        
                this.fetchApplicants();
                this.cleanApplication();
              });               
        }

        updateApplicant()
        {
        
                var applicant = {        
                                          "id"  : parseInt(this.id),                             
                                          "firstName": this.firstName,
                                          "familyName": this.familyName,
                                          "age": parseInt(this.age),
                                          "adress":this.adress,
                                          "emailAdress":this.emailAdress,
                                          "countryOfOrigin":this.countryOfOrigin,
                                          "hired":true
                                        };

                        httpClient.fetch('https://localhost:44321/api/applicants/'+this.id, {
                 method: "PUT",         
                 headers: {
                        'content-type': 'application/json'
                    },
                 body: JSON.stringify(applicant)
              })                
              .then(response => response.json())
              .then(data => {        
                this.fetchApplicants();
              });               
        }

        deleteApplicant(applicantID)
        {
        

                        httpClient.fetch('https://localhost:44321/api/applicants/'+applicantID, {
                 method: "DELETE",         
                 headers: {
                        'content-type': 'application/json'
                    }
              })                
              .then(response => response.json())
              .then(data => {        
                 this.fetchApplicants();
              });               
        }         
}
