import { resolve } from "node:path"

export default {
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: resolve ("mkart.html") ,
                mortalkombat: resolve("mkombat.html") ,
                index: resolve ("index.html")
            }
        }
    }
}