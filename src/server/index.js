import koa from "koa";
const app = new koa();
const logger = require('koa-logger')
import Router from "koa-router";
import {render} from "./utils";
import routes from "../Routes";
const router=new Router();
router.get("*",async (ctx,next)=>{
    await next();
    ctx.response.body=render(routes);
    ctx.response.status=200;

})
app.use(logger());
console.log(router.routes)
app.use(router.routes).use(router.allowedMethods());
app.listen(8080)