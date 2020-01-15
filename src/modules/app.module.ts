import { Module} from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { FormModule } from './form.module';

@Module({
    imports: [FormModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
