using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class hihi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblCategory",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblCategory", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblPosts",
                columns: table => new
                {
                    PostId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgSrc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostsView = table.Column<int>(type: "int", nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccountId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    CategoryId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblPosts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_tblPosts_AspNetUsers_AccountId",
                        column: x => x.AccountId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_tblPosts_tblCategory_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "tblCategory",
                        principalColumn: "CategoryId");
                });

            migrationBuilder.CreateTable(
                name: "TblComments",
                columns: table => new
                {
                    Comments = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AccountId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PostId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblComments", x => x.Comments);
                    table.ForeignKey(
                        name: "FK_TblComments_AspNetUsers_AccountId",
                        column: x => x.AccountId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TblComments_tblPosts_PostId",
                        column: x => x.PostId,
                        principalTable: "tblPosts",
                        principalColumn: "PostId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblRatings",
                columns: table => new
                {
                    RatingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    PostId = table.Column<int>(type: "int", nullable: true),
                    Point = table.Column<int>(type: "int", nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblRatings", x => x.RatingId);
                    table.ForeignKey(
                        name: "FK_tblRatings_AspNetUsers_AccountId",
                        column: x => x.AccountId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_tblRatings_tblPosts_PostId",
                        column: x => x.PostId,
                        principalTable: "tblPosts",
                        principalColumn: "PostId");
                });

            migrationBuilder.InsertData(
                table: "tblCategory",
                columns: new[] { "CategoryId", "CategoryName", "Description" },
                values: new object[,]
                {
                    { 1, "Android", "Android" },
                    { 2, "iOS", "iOS" },
                    { 3, "Windows", "Windows" },
                    { 4, "macOS", "macOS" }
                });

            migrationBuilder.InsertData(
                table: "tblPosts",
                columns: new[] { "PostId", "AccountId", "CategoryId", "Comments", "Content", "CreatedAt", "ImgSrc", "PostsView", "Title" },
                values: new object[,]
                {
                    { 1, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<p><span class=\"xf-body-paragraph\"><a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/apple-carplay\">Apple Carplay</a>&nbsp;v&agrave;&nbsp;<a class=\"internalLink\" href=\"https://tinhte.vn/thread/trai-nghiem-nhanh-android-auto-da-chay-rat-muot-tro-ly-tieng-viet-de-dung-hon-apple-carplay-nhieu.3653988/\">Android Auto</a>&nbsp;l&agrave; hai nền tảng gi&uacute;p đưa những th&ocirc;ng tin, ứng dụng cần thiết ở điện thoại l&ecirc;n m&agrave;n h&igrave;nh giải tr&iacute; của xe hơi. Th&ocirc;ng qua n&ecirc;n tảng n&agrave;y, người l&aacute;i xe c&oacute; thể an to&agrave;n sử dụng hầu hết c&aacute;c t&iacute;nh năng th&ocirc;ng qua cử chỉ hoặc ra lệnh bằng giọng n&oacute;i th&ocirc;ng qua trợ l&yacute; ảo. Chủ đề n&agrave;y kh&ocirc;ng mới, nhưng muốn chia sẻ lại đến c&aacute;c bạn mới l&agrave;m quen với xe hơi, đặc biệt l&agrave; quan t&acirc;m đến hệ thống giải tr&iacute; tr&ecirc;n xe hơi.<br><br>Nếu như c&aacute;ch đ&acirc;y khoảng 3 năm trở về trước, 2 ứng dụng n&agrave;y c&oacute; mức phổ biến kh&aacute; k&eacute;m tại thị trường Việt Nam, thậm ch&iacute;&nbsp;<a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/android-auto\">Android Auto</a>&nbsp;c&ograve;n kh&ocirc;ng được ch&iacute;nh thức cung cấp cho người d&ugrave;ng tại Việt Nam (kh&ocirc;ng r&otilde; l&yacute; do) th&igrave; giờ đ&acirc;y, c&aacute;c thương hiệu từ xe sang cho đến những chiếc xe phổ th&ocirc;ng hơn 300 triệu đồng cũng đ&atilde; được trang bị. Đ&acirc;y vẫn lu&ocirc;n l&agrave; 2 t&iacute;nh năng m&agrave; m&igrave;nh đ&aacute;nh gi&aacute; cao v&agrave; sử dụng n&oacute; nhiều nhất, những m&agrave;n h&igrave;nh&nbsp;<a class=\"Tinhte_XenTag_TagLink\" href=\"https://tinhte.vn/tag/android\">Android</a>&nbsp;trang bị gắn th&ecirc;m mặc d&ugrave; c&oacute; loạt t&iacute;nh năng rất hấp dẫn, xong do nhu cầu c&aacute; nh&acirc;n v&agrave; sự kh&oacute; chịu bởi những điều phức tạp đi k&egrave;m m&agrave; m&igrave;nh chưa đ&aacute;nh gi&aacute; cao ch&uacute;ng so với 2 ứng dụng trang bị sẵn n&agrave;y.<br><br></span></p>\r\n<h2 id=\"menuid0\" class=\"TinhteMods_HeadingTag TinhteMods_HeadingTagH2\"><strong>Apple Carplay - Android Auto c&oacute; những ứng dụng n&agrave;o ?</strong></h2>\r\n<p><span class=\"bdImage_attachImage\"><span class=\"inner\"><img src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6499161_apple-carplay-android-auto-tinhte-4.jpg\" alt=\"apple-carplay-android-auto-tinhte-4.jpg\" data-height=\"736\" data-width=\"2048\"></span></span><span class=\"xf-body-paragraph\"><br><br><br></span><span class=\"bdImage_attachImage\"><span class=\"inner\"><img src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6499350_apple-carplay-android-auto-tinhte-5.jpg\" alt=\"apple-carplay-android-auto-tinhte-5.jpg\" data-height=\"736\" data-width=\"2048\"></span></span></p>	\\image\\Post\\f2cfcc53-ee9f-4e84-96b0-1fdff0e83944.jpg			acfd2f79-5adc-4aa3-b3ee-d2420d01d653	2\r\n2	Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ...	2023-07-19 02:35:42.7391493	<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>	", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3516), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Tổng hợp về Apple Carplay - Android Auto trên xe hơi" },
                    { 2, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3540), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ..." },
                    { 3, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3544), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ..." },
                    { 4, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3549), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ..." },
                    { 5, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3554), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ..." },
                    { 6, "acfd2f79-5adc-4aa3-b3ee-d2420d01d653", 2, null, "<div class=\"jsx-1755978857 imgWrapper\" role=\"button\">\r\n<div class=\"jsx-1755978857 fact-image\"><img class=\"jsx-1755978857 img\" src=\"https://photo2.tinhte.vn/data/attachment-files/2023/07/6498766_quan-dao-truong-sa-google-map.jpg\" alt=\"Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ...\"></div>\r\n</div>\r\n<div class=\"jsx-1755978857 body \">\r\n<div>\r\n<div class=\"jsx-587582891 xfBodyContainer\">\r\n<div class=\"jsx-587582891 xfBody  highlightLinkOnDarkBackground \" data-author=\"\"><span class=\"xf-body-paragraph\">Google đ&atilde; cập nhật bản đồ, đ&atilde; thấy lại cờ Việt Nam tr&ecirc;n n&oacute;c nh&agrave;... anh em kiểm tra nha. Toạ độ đ&acirc;y: 8.644181, 111.919350</span></div>\r\n</div>\r\n</div>\r\n</div>", new DateTime(2023, 7, 19, 12, 29, 51, 53, DateTimeKind.Local).AddTicks(3558), "\\image\\Post\\be9fa4fc-5ef5-46a7-aab6-d77adfe10362.jpg", null, "Google đã cập nhật bản đồ, đã thấy lại cờ Việt Nam trên nóc nhà... anh em kiểm tra nha. Toạ độ..." }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_TblComments_AccountId",
                table: "TblComments",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_TblComments_PostId",
                table: "TblComments",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPosts_AccountId",
                table: "tblPosts",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPosts_CategoryId",
                table: "tblPosts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_tblRatings_AccountId",
                table: "tblRatings",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_tblRatings_PostId",
                table: "tblRatings",
                column: "PostId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "TblComments");

            migrationBuilder.DropTable(
                name: "tblRatings");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "tblPosts");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "tblCategory");
        }
    }
}
