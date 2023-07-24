namespace TechSocial.Models.DTO
{
    public class PostWithCommentsCount
    {
        public TblPost Post { get; set; }
        public int CommentsCount { get; set; }
    }
}
