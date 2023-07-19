
using TechSocial.Models;

namespace TechSocial.Repository.IRepository
{
    public interface ICommentRepository : IRepository<TblComments>
    {

        void Update(TblComments obj);



    }
}
