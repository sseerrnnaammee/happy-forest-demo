/*
 * @Description: 接口列表
 * @Date: 2022-08-14 19:18:26
 * @LastEditTime: 2022-08-26 21:20:45
 */
let host = "http://43.142.63.146:5001"
// let host = "http://localhost:5001"
function getUserInfo(id, account, password){
	password = md5(password);
	return new Promise((resolev)=>{
		$.ajax({url:`${host}/api/getUser?id=${id}&account=${account}&password=${password}`,success:function(result){
			const res = JSON.parse(result)
			console.log(res)
			if(res.data){
				const {id, account} = res.data
				resolev(res.data)
			}else {
				resolev({})
				alert("您输入的账号不正确,请刷新后重新输入")
			}
		}});
	})
}
/*
 * @Description: 用户注册
 * @Date: 2022-08-21 19:18:26
 * @LastEditTime: 2022-08-21 19:18:30
 */
function registUser(data){
	const {account, password, phone} = data;
	return new Promise((resolev)=>{
		$.ajax({url:`${host}/api/regist?account=${account}&password=${password}&phone=${phone}`,success:function(result){
			console.log(result)
			resolev(result)
		}});
	})
}

/*
 * @Description: 保存当前进度
 * @Date: 2022-08-14 19:18:26
 * @LastEditTime: 2022-08-14 19:18:30
 */

function updateGameProcess(id, data){
	return new Promise((resolev)=>{
		$.ajax({url:`${host}/api/updateGameProcess?id=${id}&data=${data}`,success:function(result){
            resolev(result)
		}});
	})
}