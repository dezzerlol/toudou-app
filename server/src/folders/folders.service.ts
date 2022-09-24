import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Todo } from 'src/todo/todo.model'
import { CreateFolderDto } from './dto/create-folder.dto'
import { RenameFolderDto } from './dto/rename-folder.dto'
import { UpdateFolderDto } from './dto/update-folder.dto'
import { Folder } from './folders.model'

@Injectable()
export class FoldersService {
  constructor(@InjectModel(Folder) private folderRepository: typeof Folder) {}

  async getFolders(data: { userId: number }) {
    const folders = await this.folderRepository.findAll({ where: { userId: data.userId }, include: [Todo] })
    return folders
  }

  async createFolder(dto: CreateFolderDto) {
    try {
      const folder = await this.folderRepository.create(dto)
      return folder
    } catch (error) {
      console.log(error)
    }
  }

  async deleteFolder(data: { id: number }) {
    try {
      const folder = await this.folderRepository.destroy({ where: { id: data.id } })
      return folder
    } catch (error) {
      console.log(error)
    }
  }

  async renameFolder(dto: RenameFolderDto) {
    try {
      const folder = await this.folderRepository.update({ title: dto.newTitle }, { where: { id: dto.folderId } })
      return folder
    } catch (error) {
      console.log(error)
    }
  }

  async updateFolder(dto: UpdateFolderDto) {
    const { id, icon, title } = dto
    try {
      const folder = await this.folderRepository.update({ icon, title }, { where: { id } })
      return folder
    } catch (error) {
      console.log(error)
    }
  }
}
