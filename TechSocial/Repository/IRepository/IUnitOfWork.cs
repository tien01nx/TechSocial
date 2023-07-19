namespace TechSocial.Repository.IRepository
{
    public interface IUnitOfWork
    {
        ICategoryRepository Category { get; }
        IPostRepository Post { get; }
   
        IAccountRepository Account { get; }

       IRatingRepository Rating { get; }
        ICommentRepository Comment { get; }
        void Save();
    }
}
