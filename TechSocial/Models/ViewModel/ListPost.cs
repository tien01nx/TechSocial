using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace TechSocial.Models.ViewModel
{
    public class ListPost
    {
        [ValidateNever]
        public  IEnumerable<TblPost> ? AdnroidPost { get; set; }
        [ValidateNever]
        public IEnumerable<TblPost>? IosPost { get; set; }
        [ValidateNever]
        public IEnumerable<TblPost>? WindowsPost { get; set; }
        [ValidateNever]
        public IEnumerable<TblPost>? MacOs { get; set; }
        [ValidateNever]
        public IEnumerable<TblPost>     ?PostNewest { get; set; }
        public TblPost ?TblPost { get; set; }
        [ValidateNever]
        public int ?PostId { get; set; }
     
        public TblComments? TblComments { get; set; }
        [ValidateNever]
        public TblCategory ?TblCategory { get; set; }
        public List<TblComments> ? Comments{ get;  set; }
    } 
}
