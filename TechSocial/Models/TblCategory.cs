using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BoxNews.Models
{
    public partial class TblCategory
    {
        public TblCategory()
        {
            TblPosts = new HashSet<TblPost>();
        }
        [Key]
        public int CategoryId { get; set; }

        [DisplayName("Danh mục")]
        public string? CategoryName { get; set; }


        [DisplayName("Mô tả")]
        public string? Description { get; set; }

        public virtual ICollection<TblPost> TblPosts { get; set; }
    }
}
