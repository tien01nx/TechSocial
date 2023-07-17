namespace TechSocial.Repository.IRepository
{
    public interface IUnitOfWork
    {
        ICategoryRepository Category { get; }
        IPostRepository Post { get; }
   
        IAccountRepository Account { get; }
        void Save();
    }
}
