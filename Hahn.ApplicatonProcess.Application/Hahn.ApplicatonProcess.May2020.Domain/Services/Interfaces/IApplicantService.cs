using Hahn.ApplicatonProcess.May2020.Data.DBEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.May2020.Domain.Services
{
    public interface IApplicantService
    {
        Task<List<Applicant>> GetApplicants();
        Task<Applicant> GetApplicants(int id);

        Task<Applicant> AddApplicant(Applicant applicantItem);

        Task<Applicant> UpdateApplicant(int id, Applicant applicantItem);

        Task<int> DeleteApplicant(int id);
    }
}
