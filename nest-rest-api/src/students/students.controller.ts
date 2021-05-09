import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';
import { Student } from './student';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAll(): any {
    return this.studentsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Student {
    return this.studentsService.getById(id);
  }

  @Post()
  create(@Body() createStudent: CreateStudentDto) {
    return this.studentsService.create(createStudent);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  @Put(':id')
  update(@Body() updateStudent: UpdateStudentDto, @Param('id') id: string) {
    return this.studentsService.update(updateStudent, id);
  }
}
