using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class updatehi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_tblRoles_TblRoleRoleId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "tblRoles");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TblRoleRoleId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TblRoleRoleId",
                table: "AspNetUsers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TblRoleRoleId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tblRoles",
                columns: table => new
                {
                    RoleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblRoles", x => x.RoleId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TblRoleRoleId",
                table: "AspNetUsers",
                column: "TblRoleRoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_tblRoles_TblRoleRoleId",
                table: "AspNetUsers",
                column: "TblRoleRoleId",
                principalTable: "tblRoles",
                principalColumn: "RoleId");
        }
    }
}
