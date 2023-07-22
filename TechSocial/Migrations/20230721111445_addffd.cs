using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class addffd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Comments",
                table: "TblComments",
                newName: "ID");

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5246));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5258));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5260));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5261));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5263));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5264));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5266));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5267));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5269));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5270));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5272));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5273));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 14, 45, 809, DateTimeKind.Local).AddTicks(5275));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "TblComments",
                newName: "Comments");

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3330));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3346));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3347));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3349));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3350));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3352));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3353));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3355));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3357));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3358));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3360));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3369));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 21, 18, 11, 32, 53, DateTimeKind.Local).AddTicks(3370));
        }
    }
}
