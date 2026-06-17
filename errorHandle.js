function errorHandle(res){
    const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
  }

  res.writeHead(400, headers); //400 回傳格式錯誤
  res.write(JSON.stringify({
    "status": "error",
    "message": "有欄位填寫錯誤，或是無此 to do id"
  }));
  res.end();
}

module.exports = errorHandle;