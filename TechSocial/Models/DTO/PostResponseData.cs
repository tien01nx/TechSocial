namespace TechSocial.Models.DTO
{
    public class PostResponseData
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string? CreatedAt { get; set; }
        public string Content { get; set; }

        public string ImgSrc { get; set; }
        public string CategoryName { get; set; }

        public int ?CategoryId { get; set; }
        public string UserName { get; set; }

        public int? CommentsCount { get; set; }
        public int ?PostsView { get; set; }


    }
}
