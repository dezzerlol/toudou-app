import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CreateFolderDto } from './dto/create-folder.dto'
import { RenameFolderDto } from './dto/rename-folder.dto'
import { FoldersService } from './folders.service'

@Controller('folders')
@UseGuards(JwtAuthGuard)
export class FoldersController {
  constructor(private folderService: FoldersService) {}

  @Post('/get')
  getFolders(@Body() data: { userId: number }) {
    return this.folderService.getFolders(data)
  }

  @Post('/create')
  createFolder(@Body() dto: CreateFolderDto) {
    return this.folderService.createFolder(dto)
  }

  @Post('/delete')
  deleteFolder(@Body() data: { id: number }) {
    return this.folderService.deleteFolder(data)
  }

  @Post('/rename')
  renameFolder(@Body() dto: RenameFolderDto) {
    return this.folderService.renameFolder(dto)
  }
}
