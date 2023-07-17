using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechSocial.Models
{
    public  class TblPost
    {
       

        [Key]
        public int PostId { get; set; }

        [DisplayName("Tiêu đề")]
        public string? Title { get; set; }

        [DisplayName("Ngày viết")]
        public DateTime? CreatedAt { get; set; }

        [DisplayName("Nội dung")]
        public string? Content { get; set; }

        [DisplayName("Ảnh minh họa")]
        public string? ImgSrc { get; set; }

        [DisplayName("Lượt xem")]
        public int? PostsView { get; set; }

        [DisplayName("Bình luận")]
        public string? Comments { get; set; }

        [DisplayName("Tài khoản")]
        public string? AccountId { get; set; }
        [ForeignKey("AccountId")]
        [ValidateNever]
        public IdentityUser ? IdentityUser { get; set; }


        [DisplayName("Danh mục")]
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        [ValidateNever]

        public TblCategory? Category { get; set; }
        [ValidateNever]
        public List<TblRating> TblRatings { get; set; }
    }
}
