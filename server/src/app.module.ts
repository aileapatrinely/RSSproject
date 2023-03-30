import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FeedsModule } from './feeds/feed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'rss_feed',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      migrations: ['dist/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
    }),
    AuthModule,
    UsersModule,
    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
