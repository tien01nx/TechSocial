using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechSocial.Models
{
    public partial class TblRating
    {
        [Key]
        public int RatingId { get; set; }


        public string ? AccountId { get; set; }
        [ForeignKey("AccountId")]
        [ValidateNever]

        public TblAccount? Account { get; set; }
        public int? PostId { get; set; }
        [ForeignKey("PostId")]
        [ValidateNever]

        public TblPost? Post { get; set; }
        public int? Point { get; set; }
        public string? Comments { get; set; }

       
       
    }
}
