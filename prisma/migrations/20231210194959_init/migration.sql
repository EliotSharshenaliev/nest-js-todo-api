/*
  Warnings:

  - You are about to drop the column `complited` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `disabled` on the `Todo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Todo_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Todo" ("authorId", "id", "title") SELECT "authorId", "id", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
