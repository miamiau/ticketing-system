using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    [BsonIgnoreExtraElements]
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        //[Required]
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string Name { get; set; }

        //[Required]
        //[EmailAddress]
        [BsonElement("Email")]
        [JsonProperty("Email")]
        public string Email { get; set; }

        //[Required]
        //[DataType(DataType.Password)]
        [BsonElement("Password")]
        [JsonProperty("Password")]
        public string Password { get; set; }
    }
}
