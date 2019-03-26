import koa from "koa";
import Router from "koa-route";
import {getStore} from "../stroe";
import routes  from "../Routes"
import {matchRoutes} from "react-router-config"
const router = new Router();
const app = new koa();


app.use(router.get('*', async (ctx,next)=>{
    await next();
    const store = getStore(ctx.request);
    const mRoutes = matchRoutes(routes,ctx.request.path);
    const promises = [];
    mRoutes.forEach((item)=>{
        if(item.route.loadData){
           const promise = new Promise((resolve,reject)=>{
            item.route.loadData(store).then(resolve).catch(resolve);
           });
           promises.push(promise);
        }
        
    })
    Promise.all(promises).then(()=>{
        const context = {css: []};
        const html= render(store,routes,ctx.request,context);
    })
}))

app.listen(6000);


