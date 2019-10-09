using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    [BsonIgnoreExtraElements]
    public class Ticket
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Subject")]
        [JsonProperty("Subject")]
        public string Subject { get; set; }

        [BsonElement("Description")]
        [JsonProperty("Description")]
        public string Description { get; set; }

        [BsonElement("Type")]
        [JsonProperty("Type")]
        public string Type { get; set; }

        [BsonElement("Customer")]
        [JsonProperty("Customer")]
        public string Customer { get; set; }

        [BsonElement("ServiceType")]
        [JsonProperty("ServiceType")]
        public string ServiceType { get; set; }

        [BsonElement("Status")]
        [JsonProperty("Status")]
        public bool Status { get; set; }

        [BsonElement("OpenDateTime")]
        [JsonProperty("OpenDateTime")]
        public DateTime OpenDateTime { get; set; }

        [BsonElement("CloseDateTime")]
        [JsonProperty("CloseDateTime")]
        public DateTime CloseDateTime { get; set; }

        [BsonElement("Priority")]
        [JsonProperty("Priority")]
        public int Priority { get; set; }

        [BsonElement("Assignee")]
        [JsonProperty("Assignee")]
        public string Assignee { get; set; }
    }
}
