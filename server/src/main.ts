import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function start() {
  const PORT = process.env.PORT || 5000

  const app = await NestFactory.create(AppModule)

  // create swagger doc on localhost:5000/api/docs
  const config = new DocumentBuilder()
    .setTitle('Toudou app api')
    .setDescription('Doc for api of Toudou  tracker')
    .setVersion('1.0.0')
    .addTag('toudou-app')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  // start server
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()
