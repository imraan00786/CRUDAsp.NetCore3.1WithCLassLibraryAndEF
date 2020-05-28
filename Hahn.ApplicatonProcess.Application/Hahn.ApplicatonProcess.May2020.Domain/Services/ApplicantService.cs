using Hahn.ApplicatonProcess.May2020.Data.DBContext;
using Hahn.ApplicatonProcess.May2020.Data.DBEntities;
using Hahn.ApplicatonProcess.May2020.Domain.Validations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.May2020.Domain.Services
{
    public class ApplicantService: IApplicantService
    {

        private readonly DatabaseContext _context;
        public ApplicantService(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Applicant>> GetApplicants()
        {
            return await _context.Applicatns.ToListAsync(); 
        }

        public async Task<Applicant> GetApplicants(int id)
        {
            return _context.Applicatns.ToList().FirstOrDefault(x => x.ID == id);
        }


        public async Task<Applicant> AddApplicant(Applicant applicantItem)
        {
            _context.Applicatns.Add(applicantItem);
            _context.SaveChanges();
            return applicantItem;
        }

        public async Task<Applicant> UpdateApplicant(int id, Applicant applicantItem)
        {
            var entity = await _context
                                .Applicatns.FirstOrDefaultAsync(a => a.ID == id);

            entity.FirstName = applicantItem.FirstName;
            entity.FamilyName = applicantItem.FamilyName;
            entity.CountryOfOrigin = applicantItem.CountryOfOrigin;
            entity.Age = applicantItem.Age;
            entity.Adress = applicantItem.Adress;
            entity.EmailAdress = applicantItem.EmailAdress;
            entity.Hired = applicantItem.Hired;
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<int> DeleteApplicant(int id)
        {
            var applicationItem = new Applicant();
            applicationItem.ID = id;
            _context.Applicatns.Remove(applicationItem);
             _context.SaveChanges();
            return id;
        }
    }
}
