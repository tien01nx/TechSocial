using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Repository;
using TechSocial.Repository.IRepository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<TechSocialDbConText>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// add quyen nguoi dung 
builder.Services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<TechSocialDbConText>().AddDefaultTokenProviders();
//ứng dụng sẽ chuyển hướng người dùng đến khi họ cần đăng nhập, đăng xuất hoặc khi họ bị từ chối truy cập.
builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = $"/Identity/Account/Login";
    options.LogoutPath = $"/Identity/Account/Logout";
    options.AccessDeniedPath = $"/Identity/Account/AccessDenied";
});


// Khai báo add Razor khi dùng identity
builder.Services.AddRazorPages();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddScoped<IAccountRepository, AccountRepository>();
//builder.Services.AddScoped<IPostRepository, hihiih>();

builder.Services.AddScoped<IEmailSender, EmailSender>();





var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.MapControllerRoute(
  name: "areas",
  pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
);
app.UseRouting();

app.UseAuthorization();
app.MapRazorPages();
//app.MapControllerRoute(
//    name: "default",
//    pattern: "{area=Admin}/{controller=TblPosts}/{action=Index}/{id?}");
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
