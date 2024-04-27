import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SeriesModule } from './series/series.module';
import { PersonagemModule } from './personagem/personagem.module';
import { ComicModule } from './comic/comic.module';
import { CreatorModule } from './creator/creator.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/series-project'),
    AuthModule,
    UsersModule,
    SeriesModule,
    PersonagemModule,
    ComicModule,
    CreatorModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: '*', method: RequestMethod.POST },
      );
  }
}
