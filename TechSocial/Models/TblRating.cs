using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BoxNews.Models
{
    public partial class TblRating
    {
        [Key]
        public int RatingId { get; set; }
        public int? AccountId { get; set; }
        public int? PostId { get; set; }
        public int? Point { get; set; }
        public string? Comments { get; set; }

        public virtual TblAccount? Account { get; set; }
        public virtual TblPost? Post { get; set; }
    }
}
