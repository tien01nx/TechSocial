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
     
        public string? Name { get; set; }
        public string ?Image { get; set; }
      
    }
}
