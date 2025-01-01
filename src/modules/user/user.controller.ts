import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  /*
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.', type: UserResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async createUser(@Body() createUserDto: CreateUpdateUserDto): Promise<UserResponseDto> {
    const user = await this.userService.createUser(createUserDto)
    return user
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'List of users.', type: [UserResponseDto] })
  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.userService.getAllUsers()
    return users.map((user) => user.toObject())
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single user by ID' })
  @ApiResponse({ status: 200, description: 'User details.', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async getUserById(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.userService.getSingleUser(id)
    return user
  }
    */
}
