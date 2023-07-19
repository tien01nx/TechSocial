using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechSocial.Models
{
    public class TblComments
    {
        [Key]
        public int Comments { get; set; }

        [DisplayName("Content")]
        public string? Description { get; set; }

        [DisplayName("Time")]
        public DateTime DateCreated { get; set; }


        public string AccountId { get; set; }
        [ForeignKey("AccountId")]
        [ValidateNever]
        public IdentityUser? IdentityUser { get; set; }


        public int PostId { get; set; } 
        [ForeignKey("PostId")]
        [ValidateNever]
        public TblPost TblPost { get; set; }


    }
}
