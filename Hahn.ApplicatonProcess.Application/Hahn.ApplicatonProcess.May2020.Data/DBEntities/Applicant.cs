using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Hahn.ApplicatonProcess.May2020.Data.DBEntities
{
    public class Applicant
    {
        [Key]
        [JsonIgnore]
        public int ID { get; set; }

        [MinLength(5)]
        [Required]
        public string FirstName { get; set; }

        [MinLength(5)]
        [Required]
        public string FamilyName { get; set; }

        [MinLength(10)]
        [Required]
        public string Adress { get; set; }

        [Required]
        public string CountryOfOrigin { get; set; }

        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [Required]
        public string EmailAdress { get; set; }

        [Range(typeof(int), "20", "60")]
        [Required]
        public int Age { get; set; }

        [Required]
        public bool Hired { get; set; }
    }
}
