namespace TechSocial.Models
{
    public class PostDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string UserName { get; set; }
        public string Image { get; set; }
        public string CategoryName { get; set; }

        public DateTime? Created { get; set; }
    }
}
