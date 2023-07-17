using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class adddatabaseone : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblRatings_AspNetUsers_AccountId1",
                table: "tblRatings");

            migrationBuilder.DropIndex(
                name: "IX_tblRatings_AccountId1",
                table: "tblRatings");

            migrationBuilder.DropColumn(
                name: "AccountId1",
                table: "tblRatings");

            migrationBuilder.AlterColumn<string>(
                name: "AccountId",
                table: "tblRatings",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblRatings_AccountId",
                table: "tblRatings",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblRatings_AspNetUsers_AccountId",
                table: "tblRatings",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblRatings_AspNetUsers_AccountId",
                table: "tblRatings");

            migrationBuilder.DropIndex(
                name: "IX_tblRatings_AccountId",
                table: "tblRatings");

            migrationBuilder.AlterColumn<int>(
                name: "AccountId",
                table: "tblRatings",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AccountId1",
                table: "tblRatings",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblRatings_AccountId1",
                table: "tblRatings",
                column: "AccountId1");

            migrationBuilder.AddForeignKey(
                name: "FK_tblRatings_AspNetUsers_AccountId1",
                table: "tblRatings",
                column: "AccountId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
