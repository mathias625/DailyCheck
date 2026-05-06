/*
  Warnings:

  - Added the required column `descricao` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fim` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` ADD COLUMN `descricao` VARCHAR(191) NOT NULL,
    ADD COLUMN `fim` VARCHAR(191) NOT NULL,
    ADD COLUMN `inicio` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
