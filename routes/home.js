/*** Created by Administrator on 2017/5/9.*/
//首页的所有请求都写在这
exports.index = (req,res)=>{
    res.render('index',{
        title:'我的首页'
    })
}

