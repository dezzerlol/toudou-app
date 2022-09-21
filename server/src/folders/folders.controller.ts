import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateFolderDto } from './dto/create-folder.dto'
import { RenameFolderDto } from './dto/rename-folder.dto'
import { FoldersService } from './folders.service'

@Controller('folders')
export class FoldersController {
  constructor(private folderService: FoldersService) {}

  @Get('/get')
  getFolders(@Body() userId: number) {
    return this.folderService.getFolders(userId)
  }

  @Post('/create')
  createFolder(@Body() dto: CreateFolderDto) {
    return this.folderService.createFolder(dto)
  }

  @Post('/delete')
  deleteFolder(@Body() id: number) {
    return this.folderService.deleteFolder(id)
  }

  @Post('/rename')
  renameFolder(@Body() dto: RenameFolderDto) {
    return this.folderService.renameFolder(dto)
  }
}
