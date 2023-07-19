
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace TechSocial.Models
{
    public class TechSocialDbConText : IdentityDbContext<IdentityUser>
    {
        public TechSocialDbConText()
        {
        }


        public TechSocialDbConText(DbContextOptions<TechSocialDbConText> options) : base(options)
        {

        }

        public virtual DbSet<TblAccount> tblAccounts { get; set; } = null!;
        public virtual DbSet<TblCategory> tblCategory { get; set; } = null!;
        public virtual DbSet<TblPost> tblPosts { get; set; } = null!;
        public virtual DbSet<TblRating> tblRatings { get; set; } = null!;

        public virtual DbSet<TblComments> TblComments { get; set; } = null!; 
    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<TblAccount>().ToTable("AspNetUsers");
            modelBuilder.Entity<TblCategory>().HasData(
             new TblCategory
             {
                 CategoryId = 1,
                 CategoryName = "Android",
                 Description = "Android"
             },
             new TblCategory
             {
                 CategoryId = 2,
                 CategoryName = "iOS",
                 Description = "iOS"
             },
             new TblCategory
             {
                 CategoryId = 3,
                 CategoryName = "Windows",
                 Description = "Windows"
             },
             new TblCategory
             {
                 CategoryId = 4,
                 CategoryName = "macOS",
                 Description = "macOS"
             });

            modelBuilder.Entity<TblPost>().HasData(
                new TblPost
                {
                    PostId = 1,
                    Title = "Tổng hợp về Apple Carplay - Android Auto trên xe hơi",
                    CreatedAt = DateTime.Now,
                    Content = "<p><span class=\"xf-body-paragraph\"><a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/apple-carplay\">Apple Carplay</a>&nbsp;v&agrave;&nbsp;<a class=\"internalLink\" href=\"https://tinhte.vn/thread/trai-nghiem-nhanh-android-auto-da-chay-rat-muot-tro-ly-tieng-viet-de-dung-hon-apple-carplay-nhieu.3653988/\">Android Auto</a>&nbsp;l&agrave; hai nền tảng gi&uacute;p đưa những th&ocirc;ng tin, ứng dụng cần thiết ở điện thoại l&ecirc;n m&agrave;n h&igrave;nh giải tr&iacute; của xe hơi. Th&ocirc;ng qua n&ecirc;n tảng n&agrave;y, người l&aacute;i xe c&oacute; thể an to&agrave;n sử dụng hầu hết c&aacute;c t&iacute;nh năng th&ocirc;ng qua cử chỉ hoặc ra lệnh bằng giọng n&oacute;i th&ocirc;ng qua trợ l&yacute; ảo. Chủ đề n&agrave;y kh&ocirc;ng mới, nhưng muốn chia sẻ lại đến c&aacute;c bạn mới l&agrave;m quen với xe hơi, đặc biệt l&agrave; quan t&acirc;m đến hệ thống giải tr&iacute; tr&ecirc;n xe hơi.<br><br>Nếu như c&aacute;ch đ&acirc;y khoảng 3 năm trở về trước, 2 ứng dụng n&agrave;y c&oacute; mức phổ biến kh&aacute; k&eacute;m tại thị trường Việt Nam, thậm ch&iacute;&nbsp;<a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/android-auto\">Android Auto</a>&nbsp;c&ograve;n kh&ocirc;ng được ch&iacute;nh thức cung cấp cho người d&ugrave;ng tại Việt Nam (kh&ocirc;ng r&otilde; l&yacute; do) th&igrave; giờ đ&acirc;y, c&aacute;c thương hiệu từ xe sang cho đến những chiếc xe phổ th&ocirc;ng hơn 300 triệu đồng cũng đ&atilde; được trang bị. Đ&acirc;y vẫn lu&ocirc;n l&agrave; 2 t&iacute;nh năng m&agrave; m&igrave;nh đ&aacute;nh gi&aacute; cao v&agrave; sử dụng n&oacute; nhiều nhất, những m&agrave;n h&igrave;nh&nbsp;<a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/android\">Android</a>&nbsp;trang bị gắn th&ecirc;m mặc d&ugrave; c&oacute; loạt t&iacute;nh năng rất hấp dẫn, xong do nhu cầu c&aacute; nh&acirc;n v&agrave; sự kh&oacute; chịu bởi những điều phức tạp đi k&egrave;m m&agrave; m&igrave;nh chưa đ&aacute;nh gi&aacute; cao ch&uacute;ng so với 2 ứng dụng trang bị sẵn n&agrave;y.<br><br></span></p>\r\n<h2 id=\"menuid0\" class=\"TinhteMods_HeadingTag TinhteMods_HeadingTagH2\"><strong>Apple Carplay - Android Auto c&oacute; những ứng dụng n&agrave;o ?</strong></h2>\r\n<p><span class=\"bdImage_attachImage\"><span class=\"inner\"><img src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6499161_apple-carplay-android-auto-tinhte-4.jpg\" alt=\"apple-carplay-android-auto-tinhte-4.jpg\" data-height=\"736\" data-width=\"2048\"></span></span><span class=\"xf-body-paragraph\"><br><br><br></span><span class=\"bdImage_attachImage\"><span class=\"inner\"><img src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6499350_apple-carplay-android-auto-tinhte-5.jpg\" alt=\"apple-carplay-android-auto-tinhte-5.jpg\" data-height=\"736\" data-width=\"2048\"></span></span></p>\t\\image\\Post\\f2cfcc53-ee9f-4e84-96b0-1fdff0e83944.jpg\t\t\tacfd2f79-5adc-4aa3-b3ee-d2420d01d653\t2\r\n2\tGoogle đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...\t2023-07-19 02:35:42.7391493\t<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>\t",
                    ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
                   
                    CategoryId = 1
                },
                 new TblPost
                 {
                     PostId = 2,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
                   
                     CategoryId = 1
                 },
                 new TblPost
                 {
                     PostId = 3,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
                    
                     CategoryId = 2
                 },
                 new TblPost
                 {
                     PostId = 4,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
                
                     CategoryId = 1
                 },
                 new TblPost
                 {
                     PostId = 5,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
              
                     CategoryId = 2
                 },
                 new TblPost
                 {
                     PostId = 6,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",
                 
                     CategoryId = 3
                 },
                 new TblPost
                 {
                     PostId = 7,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 3
                 }
                 ,
                 new TblPost
                 {
                     PostId = 8,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 3
                 },
                 new TblPost
                 {
                     PostId = 9,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 4
                 },
                 new TblPost
                 {
                     PostId = 10,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 4
                 }
                 , new TblPost
                 {
                     PostId = 11,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 3
                 }
                 , new TblPost
                 {
                     PostId = 12,
                     Title = "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...",
                     CreatedAt = DateTime.Now,
                     Content = "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>",
                     ImgSrc = "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg",

                     CategoryId = 4
                 }

                );

        }  
    }
}
