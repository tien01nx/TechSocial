using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BoxNews.Models
{
    public partial class TblRole
    {
        public TblRole()
        {
            TblAccounts = new HashSet<TblAccount>();
        }
        [Key]
        public int RoleId { get; set; }
        public string? RoleName { get; set; }

        public virtual ICollection<TblAccount> TblAccounts { get; set; }
    }
}
