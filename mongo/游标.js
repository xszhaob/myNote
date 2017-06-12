// 创建数据
for (var i = 0; i < 100; i++) {
	db.aoo.insert({x : i});
}

// 使用游标
var cursor = db.aoo.find();
while(cursor.hasNext()) {
	print(cursor.next().x);
}
var cursor = db.aoo.find();
cursor.forEach(function(x) {
	print(x.x);
});

// 调用find方法是，shell并不立即查询数据库，
// 而是等待真正开始要求获得结果时才发送查询，
// 这样可以在执行之前给查询附加额外的选项。
// 几乎游标对象的每个方法都返回游标本身，
// 这样就可以按任意顺序组成方法链。
// 以下几种表达是等价的。
// sort(),limit(),skip()方法的执行顺序：sort(),skip(),limit()
var cursor = db.aoo.find().sort({"x" : -1}).limit(3).skip(10);
var cursor = db.aoo.find().skip(10).limit(3).sort({"x" : -1});
var cursor = db.aoo.find().sort({"x" : -1}).skip(10).limit(3);