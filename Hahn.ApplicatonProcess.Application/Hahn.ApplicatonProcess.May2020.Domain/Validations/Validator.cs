using Hahn.ApplicatonProcess.May2020.Domain.Models;
using Microsoft.EntityFrameworkCore.Internal;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.May2020.Domain.Validations
{
    /// <summary>
    /// Validator
    /// </summary>
    public static class Validator
    {
        readonly static string _countriesAPI = "https://restcountries.eu/rest/v2/name/aruba?fullText=true";
       
        /// <summary>
        /// IsValidCounrty
        /// </summary>
        /// <param name="countryName"></param>
        /// <returns></returns>
        public static async Task<bool> IsValidCounrty(string countryName)
        {
            var allCountries = await GetCountries();
            if (allCountries.Any())
            {
                return allCountries.Any(c => c.Name.ToLowerInvariant() == countryName.ToLowerInvariant());
            }
            else
            {
                return false;
            }
        }


        /// <summary>
        /// GetCountries
        /// </summary>
        /// <returns></returns>
        public static async Task<List<Country>> GetCountries()
        {
            using (var httpClient = new HttpClient())
            {
                var response = httpClient.GetAsync(_countriesAPI
                 ).Result;

                if (response.IsSuccessStatusCode)
                {
                    var contentJsonString = await response.Content.ReadAsStringAsync();
                    var resultTemp = JsonConvert.DeserializeObject<List<Country>>(contentJsonString);
                    return resultTemp;
                }
                else
                {
                    throw new Exception("There is an error is country service.");
                }
            }
        }
    }
}
