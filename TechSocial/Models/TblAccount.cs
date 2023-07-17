using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TechSocial.Models
{
    public partial class TblAccount : IdentityUser

    {
     
        //[ValidateNever]
        //public List<TblPost>TblPosts { get; set; }
        //[ValidateNever]
        //public List<TblRating> TblRatings { get; set; }
    }
}
