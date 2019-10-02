using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{

    public class TicketingSystemDatabaseSettings : ITicketingSystemDatabaseSettings
    {
        public string TicketsCollectionName { get; set; }
        public string UsersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ITicketingSystemDatabaseSettings
    {
        string TicketsCollectionName { get; set; }
        string UsersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
