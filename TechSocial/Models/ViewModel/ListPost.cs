namespace TechSocial.Models.ViewModel
{
    public class ListPost
    {
        public  IEnumerable<TblPost> AdnroidPost { get; set; }
        public IEnumerable<TblPost> IosPost { get; set; }

        public IEnumerable<TblPost> WindowsPost { get; set; }

    }
}
