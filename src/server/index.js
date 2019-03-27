import koa from "koa";
const app = new koa();
import Router from "koa-router";
const router=new Router();

app.use(router.get("*",async (ctx,next)=>{
    await next();
    

}))
app.listen(8080)