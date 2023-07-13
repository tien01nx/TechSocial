using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BoxNews.Models
{
    public partial class TblPost
    {
        public TblPost()
        {
            TblRatings = new HashSet<TblRating>();
        }
        [Key]
        public int PostId { get; set; }

        [DisplayName("Tiêu đề")]
        public string? Title { get; set; }

        [DisplayName("Ngày viết")]
        public DateTime? CreatedAt { get; set; }


        [DisplayName("Danh mục")]
        public int? CategoryId { get; set; }

        [DisplayName("Tài khoản")]
        public int? AccountId { get; set; }

        [DisplayName("Nội dung")]
        public string? Content { get; set; }

        [DisplayName("Ảnh minh họa")]
        public string? ImgSrc { get; set; }

        [DisplayName("Lượt xem")]
        public int? PostsView { get; set; }

        [DisplayName("Bình luận")]
        public string? Comments { get; set; }

        public virtual TblAccount? Account { get; set; }
        public virtual TblCategory? Category { get; set; }
        public virtual ICollection<TblRating> TblRatings { get; set; }
    }
}
