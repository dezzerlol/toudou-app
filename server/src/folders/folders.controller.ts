import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CreateFolderDto } from './dto/create-folder.dto'
import { GetFoldersDto } from './dto/get-folders.dto'
import { UpdateFolderDto } from './dto/update-folder.dto'
import { Folder } from './folders.model'
import { FoldersService } from './folders.service'

@ApiTags('Folders')
@Controller('folders')
@UseGuards(JwtAuthGuard)
export class FoldersController {
  constructor(private folderService: FoldersService) {}

  @ApiOperation({ summary: 'Get folders for user' })
  @ApiResponse({ status: 200, type: [Folder] })
  @Post('/get')
  getFolders(@Body() dto: GetFoldersDto) {
    return this.folderService.getFolders(dto)
  }

  @ApiOperation({ summary: 'Create folder' })
  @ApiResponse({ status: 200, type: Folder })
  @Post('/create')
  createFolder(@Body() dto: CreateFolderDto) {
    return this.folderService.createFolder(dto)
  }

  @ApiOperation({ summary: 'Delete folder' })
  @Post('/delete')
  deleteFolder(@Body() data: { id: number }) {
    return this.folderService.deleteFolder(data)
  }

  @ApiOperation({ summary: 'Update folder. Icon or title' })
  @Post('/update')
  updateFolder(@Body() dto: UpdateFolderDto) {
    return this.folderService.updateFolder(dto)
  }
}
