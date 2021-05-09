import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student';

@Injectable()
export class StudentsService {
  students: Student[] = [
    {
      surname: 'Петров',
      name: 'василий',
      middleName: 'Аркадьевич',
      dateOfBirth: '1980-02-17',
      score: 3,
      id: '1',
    },
    {
      surname: 'Васина',
      name: 'Марфа',
      middleName: 'юрьевна',
      dateOfBirth: '1995-11-30',
      score: 5,
      id: '2',
    },
    {
      surname: 'Миловская',
      name: 'Ольга',
      middleName: 'Сергеевна',
      dateOfBirth: '1998-08-05',
      score: 4,
      id: '3',
    },
    {
      surname: 'Чернышев',
      name: 'дмитрий',
      middleName: 'Алексеевич',
      dateOfBirth: '1994-06-10',
      score: 5,
      id: '4',
    },
    {
      surname: 'Крыгина',
      name: 'Елена',
      middleName: 'Александровна',
      dateOfBirth: '1987-09-01',
      score: 3,
      id: '5',
    },
    {
      surname: 'Иванов',
      name: 'Валерий',
      middleName: 'Парфенович',
      dateOfBirth: '2000-07-25',
      score: 5,
      id: '6',
    },
    {
      surname: 'Прокофьев',
      name: 'Семен',
      middleName: 'Евгеньевич',
      dateOfBirth: '1990-03-20',
      score: 5,
      id: '7',
    },
    {
      surname: 'Зимин',
      name: 'Николай',
      middleName: 'Константинович',
      dateOfBirth: '1996-07-02',
      score: 4,
      id: '8',
    },
  ];

  getAll(): Student[] {
    return this.students;
  }

  getById(id: string): Student {
    return this.students.find((s) => s.id === id);
  }

  create(studentDto: CreateStudentDto): Student {
    const newStudent: Student = {
      ...studentDto,
      id: Date.now().toString(),
    };
    this.students.push(newStudent);
    return newStudent;
  }

  remove(id: string): Student {
    const studentToRemove = this.students.find((s) => s.id === id);
    this.students = this.students.filter((s) => s !== studentToRemove);
    return studentToRemove;
  }

  update(studentDto: UpdateStudentDto, id: string): Student {
    const studentToUpdate = this.students.find((s) => s.id === id);
    const index = this.students.indexOf(studentToUpdate);
    const updatedStudent = {
      ...studentDto,
      id: id,
    };
    this.students.splice(index, 1, updatedStudent);
    return updatedStudent;
  }
}
