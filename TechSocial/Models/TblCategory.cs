using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TechSocial.Models
{
    public partial class TblCategory
    {
      
        [Key]
        public int CategoryId { get; set; }

        [DisplayName("Danh mục")]
        public string? CategoryName { get; set; }


        [DisplayName("Mô tả")]
        public string? Description { get; set; }

        [ValidateNever]
        public List<TblPost> TblPosts { get; set; }
    }
}
