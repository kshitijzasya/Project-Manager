import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [AuthModule, UsersModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
