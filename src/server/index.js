import koa from "koa";
import Router from "koa-router";
import {render} from "./utils";
import routes from "../Routes";
import {appBuild} from "../../config/paths"
const app = new koa();
const logger = require('koa-logger');
const staticServer = require('koa-static');
const router=new Router();

router.get("/",async (ctx,next)=>{
    try{
        ctx.body=render(routes,ctx.request);
        ctx.status=200;
    }catch(e){
        console.log(e)
    }
    
  
   /*  await next(); */
})

app.use(logger());
app.use(staticServer(appBuild))
app.use(router.routes())

app.listen(8081)