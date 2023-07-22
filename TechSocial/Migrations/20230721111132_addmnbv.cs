using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TechSocial.Migrations
{
    /// <inheritdoc />
    public partial class addmnbv : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comments",
                table: "tblPosts");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "tblPosts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(6997) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7014) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 3,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7016) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 4,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7017) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 5,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7019) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 6,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7020) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 7,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7031) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 8,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7032) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 9,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7034) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 10,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7035) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 11,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7037) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 12,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7038) });

            migrationBuilder.UpdateData(
                table: "tblPosts",
                keyColumn: "PostId",
                keyValue: 13,
                columns: new[] { "Comments", "CreatedAt" },
                values: new object[] { null, new DateTime(2023, 7, 21, 17, 1, 38, 259, DateTimeKind.Local).AddTicks(7040) });
        }
    }
}
