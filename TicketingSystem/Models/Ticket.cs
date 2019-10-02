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
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string Name { get; set; }
        [BsonElement("Status")]
        [JsonProperty("Status")]
        public bool Status { get; set; }
        [BsonElement("Prio")]
        [JsonProperty("Prio")]
        public int Prio { get; set; }
        [BsonElement("Assignee")]
        [JsonProperty("Assignee")]
        public string Assignee { get; set; }
    }
}
