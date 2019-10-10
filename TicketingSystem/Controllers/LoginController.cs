using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketingSystem.Models;
using TicketingSystem.Services;

namespace TicketingSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginService;
        private readonly EncryptionService _encryptionService;

        public LoginController(LoginService loginService, EncryptionService encryptionService)
        {
            _loginService = loginService;
            _encryptionService = encryptionService;
        }

        [HttpPost]
        public ActionResult<String> Authenticate(User userToAuthenticate)
        {

            var user = _loginService.Get(userToAuthenticate.Email, _encryptionService.EncryptSha256Hash(userToAuthenticate.Password));

            if (user == null)
            {
                return NotFound();
            }

            return "fake-token";
        }
    }
}
