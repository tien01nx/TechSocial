using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using TechSocial.Models.DTO;

namespace TechSocial.Models.ViewModel
{
    public class ListPost
    {
        [ValidateNever]
        public  IEnumerable<PostResponseData> ? AdnroidPost { get; set; }
        [ValidateNever]
        public IEnumerable<PostResponseData>? IosPost { get; set; }
        [ValidateNever]
        public IEnumerable<PostResponseData>? WindowsPost { get; set; }
        [ValidateNever]
        public IEnumerable<PostResponseData>? MacOs { get; set; }
        [ValidateNever]
        public IEnumerable<TblPost>  ?PostNewest { get; set; }
        public TblPost ?TblPost { get; set; }
        [ValidateNever]
        public int ?PostId { get; set; }
     
        public TblComments? TblComments { get; set; }
        [ValidateNever]
        public TblCategory ?TblCategory { get; set; }
        public List<TblComments> ? Comments{ get;  set; }
    } 
}
