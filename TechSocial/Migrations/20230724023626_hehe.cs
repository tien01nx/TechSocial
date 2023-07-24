using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class hehe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TblComments_AspNetUsers_AccountId",
                table: "TblComments");

            migrationBuilder.DropForeignKey(
                name: "FK_TblComments_tblPosts_PostId",
                table: "TblComments");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "TblComments",
                newName: "Id");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "TblComments",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "TblComments",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "AccountId",
                table: "TblComments",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(656));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(674));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(677));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(680));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 5,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(683));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 6,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(688));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 7,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(691));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 8,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(694));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 9,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(697));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 10,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(699));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 11,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(702));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 12,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(705));

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 13,
                column: "CreatedAt",
                value: new DateTime(2023, 7, 24, 9, 36, 26, 511, DateTimeKind.Local).AddTicks(708));

            migrationBuilder.AddForeignKey(
                name: "FK_TblComments_AspNetUsers_AccountId",
                table: "TblComments",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_TblComments_tblPosts_PostId",
                table: "TblComments",
                column: "PostId",
                principalTable: "tblPosts",
                principalColumn: "PostId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TblComments_AspNetUsers_AccountId",
                table: "TblComments");

            migrationBuilder.DropForeignKey(
                name: "FK_TblComments_tblPosts_PostId",
                table: "TblComments");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "TblComments",
                newName: "ID");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "TblComments",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "TblComments",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AccountId",
                table: "TblComments",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_TblComments_AspNetUsers_AccountId",
                table: "TblComments",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TblComments_tblPosts_PostId",
                table: "TblComments",
                column: "PostId",
                principalTable: "tblPosts",
                principalColumn: "PostId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
