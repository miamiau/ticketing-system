using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketingSystem.Models;

namespace TicketingSystem.Services
{
    public class LoginService
    {
        private readonly IMongoCollection<User> _users;

        public LoginService(ITicketingSystemDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);


            //_users = database.GetCollection<User>(settings.UsersCollectionName);
            _users = database.GetCollection<User>("Users");
        }

        public User Get(string email, string password) =>
            _users.Find<User>(user => user.Email == email && user.Password == password).FirstOrDefault();
    }
}
