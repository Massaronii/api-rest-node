import { app } from './app'
import { env } from './env'

const portRender = env.PORT || 4000

app
  .listen({
    port: portRender,
  })
  .then(() => {
    console.log(`Server is running on port ${portRender}`)
  })
