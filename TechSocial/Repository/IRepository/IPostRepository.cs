

using TechSocial.Models;
using TechSocial.Models.DTO;

namespace TechSocial.Repository.IRepository
{
    public interface IPostRepository : IRepository<TblPost>
    {

        void Update(TblPost obj);
        IEnumerable<TblPost> GetNewest();

        IEnumerable<PostResponseData> GetPostsWithCommentsCount(string CategoryName);

        IEnumerable<PostResponseData> GetPostTitle(string Title);



    }
}
