const userController={
    getUser(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    name:'koa2',
                    list:[{
                        name:'11',age:1
                    },{
                        name:'22',age:2
                    },{
                        name:'33',age:3
                    },{
                        name:'44',age:4
                    }]
                })
            },1000)
        })
    }
}
module.exports=userController;