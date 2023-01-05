/*
 * @Description: 
 * @Author: zhanjunyang
 * @Date: 2022-08-14 02:07:10
 * @LastEditors: yangzj127
 * @LastEditTime: 2022-08-25 07:19:01
 * @FilePath: /monogatari-demo/server.js
 */
const express = require("express");

const app = express();
var mysql = require('mysql');
const cors = require("cors")
const whitelist = ['http://localhost:3000']; //设置白名单
const corsOptions = {
    credentials: true, //允许客户端携带验证信息
    origin: (origin, callback) => {
        // if (whitelist.includes(origin))
        if (origin)
            return callback(null, true)

        callback(new Error('Not allowed by CORS'));
    }
}


//全局解决跨域问题
app.use(cors(corsOptions))

// 创建与数据库的连接
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'SAKl5vPi',
//     database: 'monogatari', //库名
// });
var connection = mysql.createConnection({
    host: '43.142.63.146',
    user: 'mikasa',
    password: 'mikasa66',
    database: 'monogatari', //库名
})
//建立连接
connection.connect((err) => {
    if (err) {
        console.log('连接失败！' + err);
    } else {
        console.log('数据库连接成功！');
    }
});
// 注册用户信息
app.get("/api/regist", (req, res) => {
    // 接收普通键值对参数
    const { account, password, phone } = req.query;
    console.log(account, phone)
    // 添加到数据库中
    const sql_query = `SELECT * FROM user_account WHERE account="${account}" OR phone="${phone}"`;
    const sql = `insert into user_account(account,password,phone) value('${account}','${password}',${phone})`;
    // result 接受的数据
    connection.query(sql_query, (err, result) => {
        if (result && result.length > 0) {
            res.json({ msg: "用户名或者手机号已被注册, 请重新注册", code: 200, status: 400 });
        } else {
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ msg: "注册失败, 请稍后再试!", code: 200 , status: 400});
                } else {
                    console.log(result);
                    res.json({ msg: "注册成功", code: 200, status: 200 });
                }
            });
        }

    });
})
// 获取用户信息
app.get("/api/getUser", (req, res) => {
    const { query } = req
    const id = Number(query.id)
    var sql = `SELECT * FROM user_account WHERE account="${query.account}" AND password="${query.password}"`;
    if (id) {
        sql = `SELECT * FROM user_account WHERE id=${id}`;
    }
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
        } else {
            let response = {
                code: 200,
                data: result.length > 0 ? result[0] : null
            }
            response = JSON.stringify(response);//把results对象转为字符串，去掉RowDataPacket
            res.end(response);
        }
    });
})
// 更新用户游戏进度
app.get("/api/updateGameProcess", (req, res) => {
    const { query } = req
    const id = Number(query.id)
    let data = query.data
    var sql_query = `SELECT * FROM user_account WHERE id=${id}`;
    connection.query(sql_query, (err, result) => {
        var sql_update = `UPDATE user_account SET step='${toLiteral(data)}' WHERE id=${id}`;
        connection.query(sql_update, (err, result) => {
            res.end(data);
        });
    });
})
function toLiteral(str) {
    var dict = { '\b': 'b', '\t': 't', '\n': 'n', '\v': 'v', '\f': 'f', '\r': 'r' };
    return str.replace(/([\\'"\b\t\n\v\f\r])/g, function ($0, $1) {
        return '\\' + (dict[$1] || $1);
    });
}
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})