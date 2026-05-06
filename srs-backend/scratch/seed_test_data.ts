import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { UsersService } from '../src/users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  console.log('🌱 Seeding test data...');

  try {
    // 1. Create a Teacher with 2 classes (9-A and 9-B)
    const teacher = await usersService.createTeacher({
      fullname: 'Abebe Kebede',
      username: 'teacher1',
      password: 'password123',
      email: 'abebe@example.com',
      phone: '0911223344',
      role: 'teacher',
      stream: 'Natural Science',
      subjectCode: 'PHYS101',
      grade: '9',
      classes: 'A, B', // 2 classes
      photo: '',
      background: ''
    });
    console.log('✅ Teacher created:', teacher.fullname);

    // 2. Create 10 Students for Class A (Grade 9)
    for (let i = 1; i <= 10; i++) {
      await usersService.createStudent({
        fullname: `Student A-${i}`,
        username: `studentA${i}`,
        password: 'password123',
        email: `studentA${i}@example.com`,
        phone: `09000000${i}`,
        role: 'student',
        stream: 'Natural Science',
        grade: '9',
        class: 'A'
      });
    }
    console.log('✅ 10 Students created for Class A');

    // 3. Create 10 Students for Class B (Grade 9)
    for (let i = 1; i <= 10; i++) {
      await usersService.createStudent({
        fullname: `Student B-${i}`,
        username: `studentB${i}`,
        password: 'password123',
        email: `studentB${i}@example.com`,
        phone: `09111111${i}`,
        role: 'student',
        stream: 'Natural Science',
        grade: '9',
        class: 'B'
      });
    }
    console.log('✅ 10 Students created for Class B');

    console.log('🚀 Seeding complete! You can now log in as "teacher1" to test.');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  } finally {
    await app.close();
  }
}

bootstrap();
