import { Module } from '@nestjs/common';
import { WebsocketModule } from 'src/websockets/websocket.module';

@Module({
  imports: [WebsocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
