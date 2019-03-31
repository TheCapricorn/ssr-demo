import koa from "koa";
const app = new koa();
const logger = require('koa-logger')
import Router from "koa-router";
import {render} from "./utils";
import routes from "../Routes";
const router=new Router();

router.get("/home",async (ctx,next)=>{
    try{
        ctx.body=render(routes,ctx.request);
        ctx.status=200;
    }catch(e){
        console.log(e)
    }
    
  
   /*  await next(); */
})

app.use(logger());

app.use(router.routes())

app.listen(8081)