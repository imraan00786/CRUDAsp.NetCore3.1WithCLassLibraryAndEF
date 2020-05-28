using Hahn.ApplicatonProcess.May2020.Data.DBEntities;
using Hahn.ApplicatonProcess.May2020.Domain.Services;
using Hahn.ApplicatonProcess.May2020.Domain.Validations;
using Hahn.ApplicatonProcess.May2020.Web.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.May2020.Web.Controllers
{
	/// <summary>
	/// ApplicantController
	/// </summary>
	[Route("api/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
		#region Private Variables
		private ILogger _logger;
        private readonly IApplicantService _service;
		#endregion Private Variables

		#region Constrcutor
		/// <summary>
		/// Ctr
		/// </summary>
		/// <param name="logger"></param>
		/// <param name="service"></param>
		public ApplicantController(ILogger<ApplicantController> logger,
            IApplicantService service)
        {
            _logger = logger;
            _service = service;
        }
		#endregion Constructor

		#region CRUD Operations
		/// <summary>
		/// Get all applicants
		/// </summary>
		/// <returns></returns>
		[ProducesResponseType(typeof(List<Applicant>), 201)]
        [ProducesResponseType(typeof(void), 500)]
        [HttpGet("/api/applicants")]
        public async Task<IActionResult> GetApplicants()
        {
            _logger.LogInformation(MyLogEvents.GetItem, "GetApplicants");
            try
            {
                var result = await _service.GetApplicants();
                if (result == null)
                {
                    _logger.LogWarning(MyLogEvents.GetItemNotFound, "GetApplicants() NOT FOUND");
                    return StatusCode(404, "Result not found.");
                }
                _logger.LogInformation("GetApplicants(), completed.");
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(string.Format("GetApplicants(), completed with errors: {0}.", ex.Message));
                return StatusCode(500, ex.Message);
            }
        }

        /// <summary>
        /// Get Applicant based on ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ProducesResponseType(typeof(Applicant), 201)]
        [ProducesResponseType(typeof(void), 500)]
        [HttpGet("/api/applicants/{id}")]
        public async Task<IActionResult> GetApplicant(int id)
        {
            try
            {
                _logger.LogInformation(MyLogEvents.GetItem, "Getting item {Id}", id);

                var result = await _service.GetApplicants(id);
                if (result == null)
                {
                    _logger.LogWarning(MyLogEvents.GetItemNotFound, "Get({Id}) NOT FOUND", id);
                    return StatusCode(404, "Result not found.");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
				_logger.LogError(string.Format("GetApplicants(id), completed with errors: {0}.", ex.Message));
				return StatusCode(500, ex.Message);
            }
        }

		/// <summary>
		/// Create an Applicant
		/// </summary>
		/// <param name="applicant"></param>
		/// <returns></returns>
		[ProducesResponseType(typeof(Applicant), 201)]
		[ProducesResponseType(typeof(void), 500)]
		[HttpPost("/api/applicants")]
        public async Task<IActionResult> AddProduct(Applicant applicant)
        {
            try
            {
				_logger.LogInformation(MyLogEvents.InsertItem, "Adding applicant");

				if (!await Validator.IsValidCounrty(applicant.CountryOfOrigin))
                {
                    ModelState.AddModelError("CountryOfOrigin", "Provide valid country name.");
                }

                if (!ModelState.IsValid)
                {
                    //return 422 - Unprocessable Entity, in response body write out validation errors.
                    return new Helper.UnprocessableEntityObjectResult(ModelState);
                }

                var result = await _service.AddApplicant(applicant);

                if (result == null)
                {
                    return StatusCode(500, "Adding application failed.");
                }
                return Ok(result);
            }
            catch(Exception ex)
            {
				_logger.LogError(string.Format("GetApplicants(id), completed with errors: {0}.", ex.Message));
				return StatusCode(500, ex.Message);
            }
        }

		/// <summary>
		/// Update Applicant Details
		/// </summary>
		/// <param name="id"></param>
		/// <param name="applicant"></param>
		/// <returns></returns>
		[ProducesResponseType(typeof(Applicant), 201)]
		[ProducesResponseType(typeof(void), 500)]
		[HttpPut("/api/applicants/{id}")]
        public async Task<IActionResult> UpdateApplicant(int id, 
            Applicant applicant)
        {
            try
            {
				_logger.LogInformation(MyLogEvents.UpdateItem, "Updating applicant");
				if (id < 0)
                {
                    ModelState.AddModelError("id", "Provide valid id.");
                }

                if (!await Validator.IsValidCounrty(applicant.CountryOfOrigin))
                {
                    ModelState.AddModelError("CountryOfOrigin", "Provide valid country name.");
                }

                if (!ModelState.IsValid)
                {
                    //return 422 - Unprocessable Entity, in response body write out validation errors.
                    return new Helper.UnprocessableEntityObjectResult(ModelState);
                }

                var result = await _service.UpdateApplicant(id, applicant);

                if (result == null)
                {
                    return StatusCode(500, "Updating application details failed.");
                }
                return Ok(result);
            }
            catch(Exception ex)
            {
				_logger.LogError(string.Format("UpdateApplicant(id, model), completed with errors: {0}.", ex.Message));
				return StatusCode(500, ex.Message);
            }
        }

		/// <summary>
		/// Delete Applicant
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[ProducesResponseType(typeof(int), 201)]
		[ProducesResponseType(typeof(void), 500)]
		[HttpDelete("/api/applicants/{id}")]
        public async Task<IActionResult> DeleteApplicant(int id)
        {
            try
            {
				_logger.LogInformation(MyLogEvents.DeleteItem, "Deleting applicant");
				if (id < 0)
                {
                    ModelState.AddModelError("id", "Provide valid id.");
                }

                if (!ModelState.IsValid)
                {
                    //return 422 - Unprocessable Entity, in response body write out validation errors.
                    return new Helper.UnprocessableEntityObjectResult(ModelState);
                }
                var result = await _service.DeleteApplicant(id);

                if (result==0)
                {
                    return StatusCode(500, "Deleting applicant failed.");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
				_logger.LogError(string.Format("DeleteApplicant(id), completed with errors: {0}.", ex.Message));
				return StatusCode(500, ex.Message);
            }
        }
		#endregion CRUD Operations
	}
}
