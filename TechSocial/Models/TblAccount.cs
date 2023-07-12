using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BoxNews.Models
{
    public partial class TblAccount
    {
        public TblAccount()
        {
            TblPosts = new HashSet<TblPost>();
            TblRatings = new HashSet<TblRating>();
        }
        [Key]
        public int AccountId { get; set; }


        [DisplayName ("Tác giả")]
        public string? UserName { get; set; }

        [DisplayName("Mật khẩu")]
        public string? UserPassword { get; set; }

        [DisplayName("Email")]
        public string? Email { get; set; }

        [DisplayName("Họ Tên")]
        public string? FullName { get; set; }

        [DisplayName("Phân quyền")]
        public int? RoleId { get; set; }

        [DisplayName("Đăng nhập lần cuối")]
        public DateTime? LastLogin { get; set; }

        public virtual TblRole? Role { get; set; }
        public virtual ICollection<TblPost> TblPosts { get; set; }
        public virtual ICollection<TblRating> TblRatings { get; set; }
    }
}
