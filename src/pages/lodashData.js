export default {
    'data': [
        {
            name: '数组',
            child: [
                {
                    name: '拆分',
                    grammar: '_.chunk(array, [size=1])',
                    explain: '将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。',
                    argus: 'array (Array): 需要处理的数组\n' +
                        '[size=1] (number): 每个数组区块的长度',
                    ret: '(Array): 返回一个包含拆分区块的新数组（相当于一个二维数组）。',
                    ex: `
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
                `
                },
                {
                    name: '过滤假值',
                    grammar: '_.compact(array)',
                    explain: '创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。',
                    argus: 'array (Array): 待处理的数组',
                    ret: '(Array): 返回过滤掉假值的新数组。',
                    ex: `
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
                    `
                },
                {
                    name: '连接数组或值',
                    grammar: '_.concat(array, [values])',
                    explain: '创建一个新数组，将array与任何数组 或 值连接在一起。',
                    argus: 'array (Array): 被连接的数组。\n' +
                        '[values] (...*): 连接的值。',
                    ret: '(Array): 返回连接后的新数组。',
                    ex: `
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
                    `
                },
                {
                    name: '排除给定值',
                    grammar: '_.difference(array, [values])',
                    explain: '创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex: `
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
                    `
                },
                {
                    name: '通过迭代器排除给定值',
                    grammar: '_.differenceBy(array, [values], [iteratee=_.identity])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。\n',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex: `
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The \`_.property\` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数排除给定值',
                    grammar: '_.differenceWith(array, [values], [comparator])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[comparator] (Function): comparator 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex: `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
                    `
                },
                {
                    name: '删除前N个元素',
                    grammar: '_.drop(array, [n=1])',
                    explain: '创建一个切片数组，去除array前面的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex: `
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
                    `
                },
                {
                    name: '删除后N个元素',
                    grammar: '_.dropRight(array, [n=1])',
                    explain: '创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex: `
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
                    `
                },
                {
                    name: '填充',
                    grammar: '_.fill(array, value, [start=0], [end=array.length])',
                    explain: '使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。',
                    argus: 'array (Array): 要填充改变的数组。\n' +
                        'value (*): 填充给 array 的值。\n' +
                        '[start=0] (number): 开始位置（默认0）。\n' +
                        '[end=array.length] (number):结束位置（默认array.length）。',
                    ret: '(Array): 返回 array。',
                    ex: `
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
                    `
                },
                {
                    name: '查询索引',
                    grammar: '_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
                    explain: '该方法类似 _.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。\n' +
                        '[fromIndex=0] (number): The index to search from.',
                    ret: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
                    ex: `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The \`_.matches\` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The \`_.matchesProperty\` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The \`_.property\` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
                    `
                },
                {
                    name: '查询倒序索引值',
                    grammar: '_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
                    explain: '这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。\n' +
                        '[fromIndex=array.length-1] (number): The index to search from.',
                    ret: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
                    ex: `
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
// The \`_.matches\` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The \`_.matchesProperty\` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The \`_.property\` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
                    `
                },
                {
                    name: '获取第一个元素',
                    grammar: '_.head(array)',
                    explain: '获取数组 array 的第一个元素。',
                    argus: 'array (Array): 要查询的数组。',
                    ret: '(*): 返回数组 array的第一个元素。',
                    ex: `
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
                    `
                },
                {
                    name: '查询值在数组中的索引',
                    grammar: '_.indexOf(array, value, [fromIndex=0])',
                    explain: '使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。',
                    argus: 'array (Array): 需要查找的数组。\n' +
                        'value (*): 需要查找的值。\n' +
                        '[fromIndex=0] (number): 开始查询的位置。',
                    ret: '(number): 返回 值value在数组中的索引位置, 没有找到为返回-1。',
                    ex: `
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the \`fromIndex\`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
                    `
                },
                {
                    name: '去除最后一个元素',
                    grammar: '_.initial(array)',
                    explain: '获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。',
                    argus: 'array (Array): 要查询的数组。',
                    ret: '(Array): 返回截取后的数组array。',
                    ex: `
_.initial([1, 2, 3]);
// => [1, 2]
                    `
                },
                {
                    name: '提取给定数组的交集',
                    grammar: '_.intersection([arrays])',
                    explain: '创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）',
                    argus: '[arrays] (...Array): 待检查的数组。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex: `
_.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
                    `
                },
                {
                    name: '通过迭代器提取给定数组的交集',
                    grammar: '_.intersectionBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。',
                    argus: '[arrays] (...Array): 待检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex: `
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The \`_.property\` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
                    `
                },
                {
                    name: '通过比较函数提取给定数组的交集',
                    grammar: '_.intersectionWith([arrays], [comparator])',
                    explain: '这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)',
                    argus: '[arrays] (...Array): 待检查的数组。\n' +
                        '[comparator] (Function): comparator（比较器）调用每个元素。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex: `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
                    `
                },
                {
                    name: '转换为字符串',
                    grammar: '_.join(array, [separator=\',\'])',
                    explain: '将 array 中的所有元素转换为由 separator 分隔的字符串。',
                    argus: 'array (Array): 要转换的数组。\n' +
                        '[separator=\',\'] (string): 分隔元素。',
                    ret: '(string): 返回连接字符串。',
                    ex: `
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
                    `
                },
                {
                    name: '获取最后一个元素',
                    grammar: '_.last(array)',
                    explain: '获取array中的最后一个元素。',
                    argus: 'array (Array): 要检索的数组。',
                    ret: '(*): 返回array中的最后一个元素',
                    ex: `
_.last([1, 2, 3]);
// => 3
                    `
                },
                {
                    name: '查询值在数组中的倒序索引',
                    grammar: '_.lastIndexOf(array, value, [fromIndex=array.length-1])',
                    explain: '这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        'value (*): 要搜索的值。\n' +
                        '[fromIndex=array.length-1] (number): 开始搜索的索引值。',
                    ret: '(number): 返回匹配值的索引值，否则返回 -1。',
                    ex: `
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the \`fromIndex\`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
                    `
                },
                {
                    name: '获取第N个元素',
                    grammar: '_.nth(array, [n=0])',
                    explain: '获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=0] (number): 要返回元素的索引值。',
                    ret: '(*): 获取array数组的第n个元素。',
                    ex: `
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c'; 
                    `
                },
                {
                    name: '移除与给定值（值）相等的元素',
                    grammar: '_.pull(array, [values])',
                    explain: '移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[values] (...*): 要删除的值',
                    ret: '(Array): 返回 array.',
                    ex: `
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
                    `
                },
                {
                    name: '移除与给定值（数组）相等的元素',
                    grammar: '_.pullAll(array, values)',
                    explain: '这个方法类似 _.pull，区别是这个方法接收一个要移除值的数组。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。',
                    ret: '(Array): 返回 array。',
                    ex: `
var array = [1, 2, 3, 1, 2, 3];
 
_.pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]
                    `
                },
                {
                    name: '通过迭代器移除与给定值（数组）相等的元素',
                    grammar: '_.pullAllBy(array, values, [iteratee=_.identity])',
                    explain: '这个方法类似于 _.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。',
                    ret: '(Array): 返回 array.',
                    ex: `
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数移除与给定值（数组）相等的元素',
                    grammar: '_.pullAllWith(array, values, [comparator])',
                    explain: '这个方法类似于 _.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。\n' +
                        '[comparator] (Function): comparator（比较器）调用每个元素。',
                    ret: '(Array): 返回 array。',
                    ex: `
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
                    `
                },
                {
                    name: '移除给定索引元素',
                    grammar: '_.pullAt(array, [indexes])',
                    explain: '根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[indexes] (...(number|number[])): 要移除元素的索引。',
                    ret: '(Array): 返回移除元素组成的新数组。',
                    ex: `
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);
// => [10, 20]
                    `
                },
                {
                    name: '移除迭代器返回为真值的元素',
                    grammar: '_.remove(array, [predicate=_.identity])',
                    explain: '移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回移除元素组成的新数组。',
                    ex: `
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
                    `
                },
                {
                    name: '反转',
                    grammar: '_.reverse(array)',
                    explain: '反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。',
                    argus: 'array (Array): 要修改的数组。',
                    ret: '(Array): 返回 array.',
                    ex: `
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
                    `
                },
                {
                    name: '裁剪',
                    grammar: '_.slice(array, [start=0], [end=array.length])',
                    explain: '裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。',
                    argus: 'array (Array): 要裁剪数组。\n' +
                        '[start=0] (number): 开始位置。\n' +
                        '[end=array.length] (number): 结束位置。',
                    ret: '(Array): 返回 数组array 裁剪部分的新数组。',
                    ex: `
_.slice([1, 2, 3], 0, 2);
// [1, 2]
                    `
                },
                {
                    name: '通过二进制检索获取插入元素的索引',
                    grammar: '_.sortedIndex(array, value)',
                    explain: '使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex: `
_.sortedIndex([30, 50], 40);
// => 1
                    `
                },
                {
                    name: '通过迭代器获取插入元素的索引',
                    grammar: '_.sortedIndexBy(array, value, [iteratee=_.identity])',
                    explain: '这个方法类似 _.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex: `
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
 
// The \`_.property\` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0  
                    `
                },
                {
                    name: '通过二进制检索查询值在数组的索引',
                    grammar: '_.sortedIndexOf(array, value)',
                    explain: '这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        'value (*): 搜索的值。',
                    ret: '(number): 返回匹配值的索引位置，否则返回 -1。',
                    ex: `
_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
                    `
                },
                {
                    name: '通过二进制检索查询值在数组的最大索引',
                    grammar: '_.sortedLastIndex(array, value)',
                    explain: '此方法类似于 _.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex: `
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
                    `
                },
                {
                    name: '去重（优化）',
                    grammar: '_.sortedUniq(array)',
                    explain: '这个方法类似 _.uniq，除了它会优化排序数组。',
                    argus: 'array (Array): 要检查的数组。',
                    ret: '(Array): 返回一个新的不重复的数组。',
                    ex: `
_.sortedUniq([1, 1, 2]);
// => [1, 2]
                    `
                },
                {
                    name: '通过迭代器去重',
                    grammar: '_.sortedUniqBy(array, [iteratee])',
                    explain: '这个方法类似 _.uniqBy，除了它会优化排序数组。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[iteratee] (Function): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回一个新的不重复的数组。',
                    ex: `
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
                    `
                },
                {
                    name: '获取除第一个元素以外的全部元素',
                    grammar: '_.tail(array)',
                    explain: '获取除了array数组第一个元素以外的全部元素。',
                    argus: 'array (Array): 要检索的数组。',
                    ret: '(Array): 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。',
                    ex: `
_.tail([1, 2, 3]);
// => [2, 3]
                    `
                },
                {
                    name: '获取前N个元素',
                    grammar: '_.take(array, [n=1])',
                    explain: '创建一个数组切片，从array数组的起始元素开始提取n个元素。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[n=1] (number): 要提取的元素个数。',
                    ret: '(Array): 返回 array 数组的切片（从起始元素开始n个元素）。',
                    ex: `
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
                    `
                },
                {
                    name: '获取后N个元素',
                    grammar: '_.takeRight(array, [n=1])',
                    explain: '创建一个数组切片，从array数组的最后一个元素开始提取n个元素。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[n=1] (number): 要提取的元素个数。',
                    ret: '(Array): 返回 array 数组的切片（从结尾元素开始n个元素）。',
                    ex: `
_.takeRight([1, 2, 3]);
// => [3]
 
_.takeRight([1, 2, 3], 2);
// => [2, 3]
 
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// => []
                    `
                },
                {
                    name: '通过迭代器提取元素',
                    grammar: '_.takeWhile(array, [predicate=_.identity])',
                    explain: '从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
                    argus: 'array (Array): 需要处理的数组\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回 array 数组的切片。',
                    ex: `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];
 
_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
 
// The \`_.matches\` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
 
// The \`_.matchesProperty\` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The \`_.property\` iteratee shorthand.
_.takeWhile(users, 'active');
// => []
                    `
                },
                {
                    name: '通过迭代器倒序提取元素',
                    grammar: '_.takeRightWhile(array, [predicate=_.identity])',
                    explain: '从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回 array 数组的切片。',
                    ex: `
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']
 
// The \`_.matches\` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']
 
// The \`_.matchesProperty\` iteratee shorthand.
_.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']
 
// The \`_.property\` iteratee shorthand.
_.takeRightWhile(users, 'active');
// => []
                    `
                },
                {
                    name: '联合数组生成不重复数组',
                    grammar: '_.union([arrays])',
                    explain: '创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（ arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）',
                    argus: '[arrays] (...Array): 要检查的数组。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex: `
_.union([2], [1, 2]);
// => [2, 1]
                    `
                },
                {
                    name: '通过迭代器联合数组生成不重复数组',
                    grammar: '_.unionBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex: `
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The \`_.property\` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数联合数组生成不重复数组',
                    grammar: '_.unionWith([arrays], [comparator])',
                    explain: '这个方法类似 _.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[comparator] (Function): 比较函数，调用每个元素。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex: `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
                    `
                },
                {
                    name: '去重',
                    grammar: '_.uniq(array)',
                    explain: '创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。',
                    argus: 'array (Array): 要检查的数组。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex: `
_.uniq([2, 1, 2]);
// => [2, 1]
                    `
                },
                {
                    name: '通过迭代器去重',
                    grammar: '_.uniqBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex: `
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The \`_.property\` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数去重',
                    grammar: '_.uniqWith(array, [comparator])',
                    explain: '这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[comparator] (Function): 比较函数，调用每个元素。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex: `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
                    `
                },
                {
                    name: '元素（值）分组',
                    grammar: '_.zip([arrays])',
                    explain: '创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。',
                    argus: '[arrays] (...Array): 要处理的数组。',
                    ret: '(Array): 返回分组元素的新数组。',
                    ex: `
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
                    `
                },
                {
                    name: '元素（键值对）分组',
                    grammar: '_.zipObject([props=[]], [values=[]])',
                    explain: '这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。',
                    argus: '[props=[]] (Array): The property identifiers.\n' +
                        '[values=[]] (Array): The property values.',
                    ret: '(Object): Returns the new object.',
                    ex: `
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
                    `
                },
                {
                    name: '元素（键值对——属性路径）分组',
                    grammar: '_.zipObjectDeep([props=[]], [values=[]])',
                    explain: '这个方法类似 _.zipObject，除了它支持属性路径。',
                    argus: '[props=[]] (Array): 属性标识符（属性名）。\n' +
                        '[values=[]] (Array): 属性值。',
                    ret: '(Object): 返回新对象。',
                    ex: `
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
                    `
                },
                {
                    name: '通过迭代器实现元素分组',
                    grammar: '_.zipWith([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似于 _.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).',
                    argus: '[arrays] (...Array): 要处理的数组。\n' +
                        '[iteratee=_.identity] (Function): 函数用来组合分组的值。',
                    ret: '(Array): 返回分组元素的新数组。',
                    ex: `
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
                    `
                },
                {
                    name: '恢复元素分组',
                    grammar: '_.unzip(array)',
                    explain: '这个方法类似于 _.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）',
                    argus: 'array (Array): 要处理的分组元素数组。',
                    ret: '(Array): 返回重组元素的新数组。',
                    ex: `
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
 
_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
                    `
                },
                {
                    name: '通过函数实现元素重组',
                    grammar: '_.unzipWith(array, [iteratee=_.identity])',
                    explain: '此方法类似于 _.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。',
                    argus: 'array (Array): 要处理的分组元素数组。\n' +
                        '[iteratee=_.identity] (Function): 这个函数用来组合重组的值。',
                    ret: '(Array): 返回重组元素的新数组。',
                    ex: `
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
                    `
                },
                {
                    name: '移除与给定值（值）相等的元素并返回新数组',
                    grammar: '_.without(array, [values])',
                    explain: '创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...*): 要剔除的值',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex: `
_.without([2, 1, 2, 3], 1, 2);
// => [3]
                    `
                },
                {
                    name: '联合数组去交集',
                    grammar: '_.xor([arrays])',
                    explain: '创建一个给定数组唯一值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。',
                    argus: '[arrays] (...Array): 要检查的数组。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex: `
_.xor([2, 1], [2, 3]);
// => [1, 3]
                    `
                },
                {
                    name: '通过迭代器联合数组去交集',
                    grammar: '_.xorBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 调用每一个元素的迭代函数。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex: `
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The \`_.property\` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数联合数组去交集',
                    grammar: '_.xorWith([arrays], [comparator])',
                    explain: '该方法是像 _.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[comparator] (Function): 调用每一个元素的比较函数。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex: `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
                    `
                }
            ]
        },
        {
            name: '集合',
            child: [
                {
                    name: '组成对象',
                    grammar: '_.countBy(collection, [iteratee=_.identity])',
                    explain: '创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（迭代次数）。 iteratee 调用一个参数：(value)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 一个迭代函数，用来转换key（键）。',
                    ret: '(Object): 返回一个组成集合对象。',
                    ex: `
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The \`_.property\` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
                    `
                },
                {
                    name: '遍历',
                    grammar: '_.forEach(collection, [iteratee=_.identity])',
                    explain: '调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
                    ret: '(*): 返回集合 collection。',
                    ex: `
_([1, 2]).forEach(function(value) {
  console.log(value);
});
// => Logs \`1\` then \`2\`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
                    `
                },
                {
                    name: '倒序遍历',
                    grammar: '_.forEachRight(collection, [iteratee=_.identity])',
                    explain: '这个方法类似 _.forEach，不同之处在于， _.forEachRight 是从右到左遍历集合中每一个元素的。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
                    ret: '(*): 返回集合 collection。',
                    ex: `
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs \`2\` then \`1\`.
                    `
                },
                {
                    name: '检查',
                    grammar: '_.every(collection, [predicate=_.identity])',
                    explain: '通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(boolean): 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false 。',
                    ex: `
_.every([true, 1, null, 'yes'], Boolean);
// => false
 
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
// The \`_.matches\` iteratee shorthand.
_.every(users, { 'user': 'barney', 'active': false });
// => false
 
// The \`_.matchesProperty\` iteratee shorthand.
_.every(users, ['active', false]);
// => true
 
// The \`_.property\` iteratee shorthand.
_.every(users, 'active');
// => false
                    `
                },
                {
                    name: '过滤',
                    grammar: '_.filter(collection, [predicate=_.identity])',
                    explain: '遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回一个新的过滤后的数组。',
                    ex: `
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// The \`_.matches\` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
 
// The \`_.matchesProperty\` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']
 
// The \`_.property\` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
                    `
                },
                {
                    name: '查找',
                    grammar: '_.find(collection, [predicate=_.identity], [fromIndex=0])',
                    explain: '遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[fromIndex=0] (number): 开始搜索的索引位置。',
                    ret: '(*): 返回匹配元素，否则返回 undefined。',
                    ex: `
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The \`_.matches\` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The \`_.matchesProperty\` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The \`_.property\` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'
                    `
                },
                {
                    name: '倒序查找',
                    grammar: '_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])',
                    explain: '这个方法类似 _.find ，不同之处在于， _.findLast是从右至左遍历collection （集合）元素的。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[fromIndex=collection.length-1] (number): 开始搜索的索引位置。',
                    ret: '(*): 返回匹配元素，否则返回 undefined。',
                    ex: `
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组',
                    grammar: '_.flatMap(collection, [iteratee=_.identity])',
                    explain: '创建一个扁平化（同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代遍历的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex: `
function duplicate(n) {
  return [n, n];
}
 
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]                    
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组（递归映射）',
                    grammar: '_.flatMapDeep(collection, [iteratee=_.identity])',
                    explain: '这个方法类似 _.flatMap 不同之处在于， _.flatMapDeep 会继续扁平化递归映射的结果。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex: `
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]                    
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组（指定深度递归映射）',
                    grammar: '_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])',
                    explain: '该方法类似 _.flatMap，不同之处在于， _.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[depth=1] (number): 最大递归深度。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex: `
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
                    `
                },
                {
                    name: '通过迭代器分组',
                    grammar: '_.groupBy(collection, [iteratee=_.identity])',
                    explain: '创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。',
                    ret: '(Object): 返回一个组成聚合的对象。',
                    ex: `
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The \`_.property\` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }                    
                    `
                },
                {
                    name: '检查是否包含',
                    grammar: '_.includes(collection, value, [fromIndex=0])',
                    explain: '检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。',
                    argus: 'collection (Array|Object|string): 要检索的集合。\n' +
                        'value (*): 要检索的值。\n' +
                        '[fromIndex=0] (number): 要检索的 索引位置。',
                    ret: '(boolean): 如果找到 value 返回 true， 否则返回 false。',
                    ex: `
_.includes([1, 2, 3], 1);
// => true
 
_.includes([1, 2, 3], 1, 2);
// => false
 
_.includes({ 'user': 'fred', 'age': 40 }, 'fred');
// => true
 
_.includes('pebbles', 'eb');
// => true                    
                    `
                },
                {
                    name: '调用方法处理每个元素',
                    grammar: '_.invokeMap(collection, path, [args])',
                    explain: '调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。如果methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        'path (Array|Function|string): 用来调用方法的路径 或 者每次迭代调用的函数。\n' +
                        '[args] (...*): 调用每个方法的参数。',
                    ret: '(Array): 返回的结果数组。',
                    ex: `
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
 
_.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]                    
                    `
                },
                {
                    name: '遍历生成键值对',
                    grammar: '_.keyBy(collection, [iteratee=_.identity])',
                    explain: '创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。',
                    ret: '(Object): 返回一个组成聚合的对象。',
                    ex: `
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
 
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 
_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }                    
                    `
                },
                {
                    name: '遍历处理元素',
                    grammar: '_.map(collection, [iteratee=_.identity])',
                    explain: '创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：\n' +
                        '(value, index|key, collection).\n' +
                        'lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some。\n' +
                        '受保护的方法有（即这些方法不能使用 _.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some作为 iteratee 迭代函数参数） ：\n' +
                        'ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新的映射后数组。',
                    ex: `
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The \`_.property\` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']                    
                    `
                },
                {
                    name: '排序',
                    grammar: '_.orderBy(collection, [iteratees=[_.identity]], [orders])',
                    explain: '此方法类似于 _.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。\n' +
                        '[orders] (string[]): iteratees迭代函数的排序顺序。',
                    ret: '(Array): 排序排序后的新数组。',
                    ex: `
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// 以 \`user\` 升序排序 再  \`age\` 以降序排序。
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]                    
                    `
                },
                {
                    name: '通过迭代器分组',
                    grammar: '_.partition(collection, [predicate=_.identity])',
                    explain: '创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回元素分组后的数组。',
                    ex: `
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]
 
// The \`_.matches\` iteratee shorthand.
_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]
 
// The \`_.matchesProperty\` iteratee shorthand.
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]
 
// The \`_.property\` iteratee shorthand.
_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]                    
                    `
                },
                {
                    name: '累加',
                    grammar: '_.reduce(collection, [iteratee=_.identity], [accumulator])',
                    explain: '压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：\n' +
                        '(accumulator, value, index|key, collection).\n' +
                        'lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.reduce, _.reduceRight, 和 _.transform。\n' +
                        '受保护的方法有（即这些方法不能使用 _.reduce, _.reduceRight, 和 _.transform作为 iteratee 迭代函数参数）：\n' +
                        'assign, defaults, defaultsDeep, includes, merge, orderBy, 和 sortBy',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。\n' +
                        '[accumulator] (*): 初始值。',
                    ret: '(*): 返回累加后的值。',
                    ex: `
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3
 
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)                    
                    `
                },
                {
                    name: '倒序累加',
                    grammar: '_.reduceRight(collection, [iteratee=_.identity], [accumulator])',
                    explain: '这个方法类似 _.reduce ，除了它是从右到左遍历collection（集合）中的元素的。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。\n' +
                        '[accumulator] (*): 初始值。',
                    ret: '(*): 返回累加后的值。',
                    ex: `
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]                    
                    `
                },
                {
                    name: '反过滤',
                    grammar: '_.reject(collection, [predicate=_.identity])',
                    explain: '_.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（注：非真）。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回过滤后的新数组',
                    ex: `
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
 
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// \`_.matches\` 迭代简写
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
 
// \`_.matchesProperty\` 迭代简写
_.reject(users, ['active', false]);
// => objects for ['fred']
 
// \`_.property\` 迭代简写
_.reject(users, 'active');
// => objects for ['barney']                    
                    `
                },
                {
                    name: '随机取样',
                    grammar: '_.sample(collection)',
                    explain: '从collection（集合）中获得一个随机元素。',
                    argus: 'collection (Array|Object): 要取样的集合。',
                    ret: '(*): 返回随机元素。',
                    ex: `
_.sample([1, 2, 3, 4]);
// => 2                    
                    `
                },
                {
                    name: '随机取样（多个）',
                    grammar: '_.sampleSize(collection, [n=1])',
                    explain: '从collection（集合）中获得 n 个随机元素。',
                    argus: 'collection (Array|Object): 要取样的集合。\n' +
                        '[n=1] (number): 取样的元素个数。',
                    ret: '(Array): 返回随机元素。',
                    ex: `
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]                    
                    `
                },
                {
                    name: '随机排序',
                    grammar: '_.shuffle(collection)',
                    explain: '创建一个被打乱值的集合。',
                    argus: 'collection (Array|Object): 要打乱的集合。',
                    ret: '(Array): 返回打乱的新数组。',
                    ex: `
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]                    
                    `
                },
                {
                    name: '获取长度',
                    grammar: '_.size(collection)',
                    explain: '返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。',
                    argus: 'collection (Array|Object): 要检查的集合',
                    ret: '(number): 返回集合的长度。',
                    ex: `
_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('pebbles');
// => 7                    
                    `
                },
                {
                    name: '是否存在真值',
                    grammar: '_.some(collection, [predicate=_.identity])',
                    explain: '通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(boolean): 如果任意元素经 predicate 检查都为 truthy（真值），返回 true ，否则返回 false 。',
                    ex: `
_.some([null, 0, 'yes', false], Boolean);
// => true
 
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
 
// The \`_.matches\` iteratee shorthand.
_.some(users, { 'user': 'barney', 'active': false });
// => false
 
// The \`_.matchesProperty\` iteratee shorthand.
_.some(users, ['active', false]);
// => true
 
// The \`_.property\` iteratee shorthand.
_.some(users, 'active');
// => true                    
                    `
                },
                {
                    name: '通过迭代器排序',
                    grammar: '_.sortBy(collection, [iteratees=[_.identity]])',
                    explain: '创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 这个函数决定排序。',
                    ret: '(Array): 返回排序后的数组。',
                    ex: `
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 
_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]                    
                    `
                }
            ]
        },
        {
            name: '日期',
            child: [
                {
                    name: '时间戳',
                    grammar: '_.now()',
                    explain: '获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。',
                    argus: '',
                    ret: '(number): 返回时间戳。',
                    ex: `
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => 记录延迟函数调用的毫秒数
                    `
                }
            ]
        },
        {
            name: '函数',
            child: [
                {
                    name: '执行N次后执行另外一个函数',
                    grammar: '_.after(n, func)',
                    explain: '_.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。',
                    argus: 'n (number): func 方法应该在调用多少次后才执行。\n' +
                        'func (Function): 用来限定的函数。',
                    ret: '(Function): 返回新的限定函数。',
                    ex: `
var saves = ['profile', 'settings'];
 
var done = _.after(saves.length, function() {
  console.log('done saving!');
});
 
_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.                    
                    `
                },
                {
                    name: '创建一个调用func的函数',
                    grammar: '_.ary(func, [n=func.length])',
                    explain: '创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。',
                    argus: 'func (Function): 需要被限制参数个数的函数。\n' +
                        '[n=func.length] (number): 限制的参数数量。',
                    ret: '(Function): 返回新的覆盖函数。',
                    ex: `
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]                    
                    `
                },
                {
                    name: '执行N次后不再调用',
                    grammar: '_.before(n, func)',
                    explain: '创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。',
                    argus: 'n (number): 超过多少次不再调用func（限制调用func 的次数）。\n' +
                        'func (Function): 限制执行的函数。',
                    ret: '(Function): 返回新的限定函数。',
                    ex: `
jQuery(element).on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list                    
                    `
                },
                {
                    name: '绑定',
                    grammar: '_.bind(func, thisArg, [partials])',
                    explain: '创建一个调用func的函数，thisArg绑定func函数中的 this (this的上下文为thisArg) ，并且func函数会接收partials附加参数。\n' +
                        '_.bind.placeholder值，默认是以 _ 作为附加部分参数的占位符。\n' +
                        '注意: 不同于原生的 Function#bind，这个方法不会设置绑定函数的 "length" 属性。',
                    argus: 'func (Function): 绑定的函数。\n' +
                        'thisArg (*): func 绑定的this对象。\n' +
                        '[partials] (...*): 附加的部分参数。',
                    ret: '(Function): 返回新的绑定函数。',
                    ex: `
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};
 
var object = { 'user': 'fred' };
 
var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'
 
// Bound with placeholders.
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'                    
                    `
                },
                {
                    name: '绑定key',
                    grammar: '_.bindKey(object, key, [partials])',
                    explain: '创建一个函数,在object[key]上通过接收partials附加参数，调用这个方法。',
                    argus: 'object (Object): 需要绑定函数的对象。\n' +
                        'key (string): 需要绑定函数对象的键。\n' +
                        '[partials] (...*): 附加的部分参数。',
                    ret: '(Function): 返回新的绑定函数。',
                    ex: `
var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
 
var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'
 
object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};
 
bound('!');
// => 'hiya fred!'
 
// Bound with placeholders.
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'                    
                    `
                },
                {
                    name: '柯里化',
                    grammar: '_.curry(func, [arity=func.length])',
                    explain: '创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。',
                    argus: 'func (Function): 用来柯里化（curry）的函数。\n' +
                        '[arity=func.length] (number): 需要提供给 func 的参数数量。',
                    ret: '(Function): 返回新的柯里化（curry）函数。',
                    ex: `
var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]                    
                    `
                },
                {
                    name: '柯里化（参数反转）',
                    grammar: '_.curryRight(func, [arity=func.length])',
                    explain: '这个方法类似 _.curry。 除了它接受参数的方式用 _.partialRight 代替了 _.partial。\n' +
                        '_.curryRight.placeholder值，默认是以 _ 作为附加部分参数的占位符。',
                    argus: 'func (Function): 用来柯里化（curry）的函数。\n' +
                        '[arity=func.length] (number): 需要提供给 func 的参数数量。',
                    ret: '(Function): 返回新的柯里化（curry）函数。',
                    ex: `
var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curryRight(abc);
 
curried(3)(2)(1);
// => [1, 2, 3]
 
curried(2, 3)(1);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]                    
                    `
                },
                {
                    name: '防抖动',
                    grammar: '_.debounce(func, [wait=0], [options={}])',
                    explain: '创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。',
                    argus: 'func (Function): 要防抖动的函数。\n' +
                        '[wait=0] (number): 需要延迟的毫秒数。\n' +
                        '[options={}] (Object): 选项对象。\n' +
                        '[options.leading=false] (boolean): 指定在延迟开始前调用。\n' +
                        '[options.maxWait] (number): 设置 func 允许被延迟的最大值。\n' +
                        '[options.trailing=true] (boolean): 指定在延迟结束后调用。',
                    ret: '(Function): 返回新的 debounced（防抖动）函数。',
                    ex: `
// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 
// 当点击时 \`sendMail\` 随后就被调用。
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));
 
// 确保 \`batchLog\` 调用1次之后，1秒内会被触发。
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);
 
// 取消一个 trailing 的防抖动调用
jQuery(window).on('popstate', debounced.cancel);                    
                    `
                },
                {
                    name: '延迟函数',
                    grammar: '_.defer(func, [args])',
                    explain: '推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。',
                    argus: 'func (Function): 要延迟的函数。\n' +
                        '[args] (...*): 会在调用时传给 func 的参数。',
                    ret: '(number):返回计时器 id。',
                    ex: `
_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => 一毫秒或更久一些输出 'deferred'。                    
                    `
                },
                {
                    name: '延迟函数（具体时间）',
                    grammar: '_.delay(func, wait, [args])',
                    explain: '延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。',
                    argus: 'func (Function): 要延迟的函数。\n' +
                        'wait (number): 要延迟的毫秒数。\n' +
                        '[args] (...*): 会在调用时传入到 func 的参数。',
                    ret: '(number): 返回计时器 id',
                    ex: `
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => 一秒后输出 'later'                    
                    `
                },
                {
                    name: '参数反转',
                    grammar: '_.flip(func)',
                    explain: '创建一个函数，调用func时候接收翻转的参数。',
                    argus: 'func (Function): 要翻转参数的函数。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var flipped = _.flip(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']                    
                    `
                },
                {
                    name: '缓存函数',
                    grammar: '_.memoize(func, [resolver])',
                    explain: '创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。\n' +
                        '注意: 缓存会暴露在缓存函数的 cache 上。 它是可以定制的，只要替换了 _.memoize.Cache 构造函数，或实现了 Map 的 delete, get, has, 和 set方法。',
                    argus: 'func (Function): 需要缓存化的函数.\n' +
                        '[resolver] (Function): 这个函数的返回值作为缓存的 key。',
                    ret: '(Function): 返回缓存化后的函数。',
                    ex: `
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
values(object);
// => [1, 2]
 
values(other);
// => [3, 4]
 
object.a = 2;
values(object);
// => [1, 2]
 
// 修改结果缓存。
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']
 
// 替换 \`_.memoize.Cache\`。
_.memoize.Cache = WeakMap;                    
                    `
                },
                {
                    name: '针对断言函数结果取反',
                    grammar: '_.negate(predicate)',
                    explain: '创建一个针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。',
                    argus: 'predicate (Function): 需要对结果取反的函数。',
                    ret: '(Function): 返回一个新的取反函数。',
                    ex: `
function isEven(n) {
  return n % 2 == 0;
}
 
_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]                    
                    `
                },
                {
                    name: '仅执行一次',
                    grammar: '_.once(func)',
                    explain: '创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。',
                    argus: 'func (Function): 指定的触发的函数。',
                    ret: '(Function): 返回新的受限函数。',
                    ex: `
var initialize = _.once(createApplication);
initialize();
initialize();
// \`initialize\` 只能调用 \`createApplication\` 一次。                    
                    `
                },
                {
                    name: '参数为其他函数的返回值',
                    grammar: '_.overArgs(func, [transforms=[_.identity]])',
                    explain: '创建一个函数，调用func时参数为相对应的transforms的返回值。',
                    argus: 'func (Function):要包裹的函数。',
                    ret: '(Function): 返回新函数。',
                    ex: `
function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);
 
func(9, 3);
// => [81, 6]
 
func(10, 5);
// => [100, 10]                    
                    `
                },
                {
                    name: '预设参数',
                    grammar: '_.partial(func, [partials])',
                    explain: '创建一个函数。 该函数调用 func，并传入预设的 partials 参数。 这个方法类似 _.bind，除了它不会绑定 this。\n' +
                        '这个 _.partial.placeholder 的值，默认是以 _ 作为附加部分参数的占位符。',
                    argus: 'func (Function): 需要预设的函数\n' +
                        '[partials] (...*): 预设的参数',
                    ret: '(Function): 返回预设参数的函数。',
                    ex: `
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};
 
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'
 
// 使用了占位符。
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'                    
                    `
                },
                {
                    name: '预设参数（参数反转）',
                    grammar: '_.partialRight(func, [partials])',
                    explain: '这个函数类似 _.partial，除了预设参数被附加到接受参数的后面。\n' +
                        '这个 _.partialRight.placeholder 的值，默认是以 _ 作为附加部分参数的占位符。',
                    argus: 'func (Function): 需要预设的函数。\n' +
                        '[partials] (...*): 预设的参数。',
                    ret: '(Function):返回预设参数的函数。',
                    ex: `
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};
 
var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'
 
// 使用了占位符。
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'                    
                    `
                },
                {
                    name: '参数索引',
                    grammar: '_.rearg(func, indexes)',
                    explain: '创建一个函数,调用func时，根据指定的 indexes 调整对应位置参数。其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。',
                    argus: 'func (Function): 待调用的函数。\n' +
                        'indexes (...(number|number[])): 排列参数的位置。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
rearged('b', 'c', 'a')
// => ['a', 'b', 'c']                    
                    `
                },
                {
                    name: '参数数组化',
                    grammar: '_.rest(func, [start=func.length-1])',
                    explain: '创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入。',
                    argus: 'func (Function): 要应用的函数。\n' +
                        '[start=func.length-1] (number): rest 参数的开始位置。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var say = _.rest(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
 
say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'                    
                    `
                },
                {
                    name: '参数反数组化',
                    grammar: '_.spread(func, [start=0])',
                    explain: '创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply.',
                    argus: 'func (Function): 要应用传播参数的函数。\n' +
                        '[start=0] (number): spread 参数的开始位置.',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});
 
say(['fred', 'hello']);
// => 'fred says hello'
 
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);
 
numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76                    
                    `
                },
                {
                    name: '节流函数',
                    grammar: '_.throttle(func, [wait=0], [options={}])',
                    explain: '创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。',
                    argus: 'func (Function): 要节流的函数。\n' +
                        '[wait=0] (number): 需要节流的毫秒。\n' +
                        '[options={}] (Object): 选项对象。\n' +
                        '[options.leading=true] (boolean): 指定调用在节流开始前。\n' +
                        '[options.trailing=true] (boolean): 指定调用在节流结束后。',
                    ret: '(Function): 返回节流的函数。',
                    ex: `
// 避免在滚动时过分的更新定位
jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 
// 点击后就调用 \`renewToken\`，但5分钟内超过1次。
var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);
 
// 取消一个 trailing 的节流调用。
jQuery(window).on('popstate', throttled.cancel);                    
                    `
                },
                {
                    name: '仅接受一个参数',
                    grammar: '_.unary(func)',
                    explain: '创建一个最多接受一个参数的函数，忽略多余的参数。',
                    argus: 'func (Function): 要处理的函数。',
                    ret: '(Function): 返回新函数。',
                    ex: `
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]                    
                    `
                },
                {
                    name: '包装函数',
                    grammar: '_.wrap(value, [wrapper=identity])',
                    explain: '创建一个函数。提供的 value 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数。 被调用时 this 绑定在创建的函数上。',
                    argus: 'value (*): 要包装的值。\n' +
                        '[wrapper=identity] (Function): 包装函数。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
 
p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'                    
                    `
                }
            ]
        },
        {
            name: '值',
            child: [
                {
                    name: '转换为数组',
                    grammar: '_.castArray(value)',
                    explain: '如果 value 不是数组, 那么强制转为数组。',
                    argus: 'value (*): 要处理的值。',
                    ret: '(Array): 返回转换后的数组',
                    ex: `
_.castArray(1);
// => [1]
 
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
_.castArray('abc');
// => ['abc']
 
_.castArray(null);
// => [null]
 
_.castArray(undefined);
// => [undefined]
 
_.castArray();
// => []
 
var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true                    
                    `
                },
                {
                    name: '浅拷贝',
                    grammar: '_.clone(value)',
                    explain: '创建一个 value 的浅拷贝。',
                    argus: 'value (*): 要拷贝的值',
                    ret: '(*): 返回拷贝后的值。',
                    ex: `
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true                    
                    `
                },
                {
                    name: '深拷贝',
                    grammar: '_.cloneDeep(value)',
                    explain: '这个方法类似 _.clone，除了它会递归拷贝 value。（也叫深拷贝）。',
                    argus: 'value (*): 要深拷贝的值。',
                    ret: '(*): 返回拷贝后的值。',
                    ex: `
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false                    
                    `
                },
                {
                    name: '通过自定义函数进行深拷贝',
                    grammar: '_.cloneDeepWith(value, [customizer])',
                    explain: '这个方法类似 _.cloneWith，除了它会递归克隆 value。',
                    argus: 'value (*): 用来递归克隆的值。\n' +
                        '[customizer] (Function): 用来自定义克隆的函数。',
                    ret: '(*): 返回深度克隆后的值。',
                    ex: `
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
}
 
var el = _.cloneDeepWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20                    
                    `
                },
                {
                    name: '通过自定义函数进行浅拷贝',
                    grammar: '_.cloneWith(value, [customizer])',
                    explain: '这个方法类似 _.clone，除了它接受一个 customizer 定制返回的克隆值。 如果 customizer 返回 undefined 将会使用拷贝方法代替处理。 customizer 调用4个参数： (value [, index|key, object, stack])。',
                    argus: 'value (*): 要克隆的值。\n' +
                        '[customizer] (Function): 用来自定义克隆的函数。',
                    ret: '(*): 返回克隆值。',
                    ex: `
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
}
 
var el = _.cloneWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0                    
                    `
                },
                {
                    name: '断言是否符合',
                    grammar: '_.conformsTo(object, source)',
                    explain: '通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。当source偏应用时，这种方法和 _.conforms函数是等价的。',
                    argus: 'object (Object): 要检查的对象。\n' +
                        'source (Object): 要断言属性是否符合的对象。',
                    ret: '(boolean): 如果 object 符合，返回 true，否则 false。',
                    ex: `
var object = { 'a': 1, 'b': 2 };
 
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false                    
                    `
                },
                {
                    name: '比较',
                    grammar: '_.eq(value, other)',
                    explain: '执行 SameValueZero 比较两者的值，来确定它们是否相等。',
                    argus: 'value (*): 要比较的值。\n' +
                        'other (*): 另一个要比较的值。',
                    ret: '(boolean): 如果两个值相等返回 true ，否则返回 false 。',
                    ex: `
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.eq(object, object);
// => true
 
_.eq(object, other);
// => false
 
_.eq('a', 'a');
// => true
 
_.eq('a', Object('a'));
// => false
 
_.eq(NaN, NaN);
// => true                    
                    `
                },
                {
                    name: '是否大于',
                    grammar: '_.gt(value, other)',
                    explain: '检查 value是否大于 other。',
                    argus: 'value (*): 要比较的值。\n' +
                        'other (*): 另一个要比较的值。',
                    ret: '(boolean): 如果value 大于 other 返回 true，否则返回 false。',
                    ex: `
_.gt(3, 1);
// => true
 
_.gt(3, 3);
// => false
 
_.gt(1, 3);
// => false                    
                    `
                },
                {
                    name: '是否大于等于',
                    grammar: '_.gte(value, other)',
                    explain: '检查 value是否大于或者等于 other。',
                    argus: 'value (*): 要比较的值。\n' +
                        'other (*): 另一个要比较的值。',
                    ret: '(boolean): 如果value 大于或者等于 other 返回 true，否则返回 false。',
                    ex: `
_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false                    
                    `
                },
                {
                    name: '是否小于',
                    grammar: '_.lt(value, other)',
                    explain: '检查 value 是否小于 other。',
                    argus: 'value (*): 用来比较的值。\n' +
                        'other (*): 另一个用来比较的值。',
                    ret: '(boolean): 如果value 小于 other 返回 true，否则返回 false。',
                    ex: `
_.lt(1, 3);
// => true
 
_.lt(3, 3);
// => false
 
_.lt(3, 1);
// => false                    
                    `
                },
                {
                    name: '是否小于等于',
                    grammar: '_.lte(value, other)',
                    explain: '检查 value 是否小于等于 other。',
                    argus: 'value (*): 用来比较的值。\n' +
                        'other (*): 另一个用来比较的值。',
                    ret: '(boolean): 如果value 小于等于 other 返回 true，否则返回 false。',
                    ex: `
_.lte(1, 3);
// => true
 
_.lte(3, 3);
// => true
 
_.lte(3, 1);
// => false                    
                    `
                },
                {
                    name: '是否一个arguments对象',
                    grammar: '_.isArguments(value)',
                    explain: '检查 value 是否是一个类 arguments 对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果value是一个 arguments 对象 返回 true，否则返回 false。',
                    ex: `
_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false                    
                    `
                },
                {
                    name: '是否一个Array类对象',
                    grammar: '_.isArray(value)',
                    explain: '检查 value 是否是 Array 类对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果value是一个数组返回 true，否则返回 false。',
                    ex: `
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false                    
                    `
                },
                {
                    name: '是否一个 ArrayBuffer 对象',
                    grammar: '_.isArrayBuffer(value)',
                    explain: '检查 value 是否是 ArrayBuffer 对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果value是一个数组 buffer 返回 true，否则返回 false。',
                    ex: `
_.isArrayBuffer(new ArrayBuffer(2));
// => true
 
_.isArrayBuffer(new Array(2));
// => false                    
                    `
                },
                {
                    name: '是否是类数组',
                    grammar: '_.isArrayLike(value)',
                    explain: '检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果value是一个类数组，那么返回 true，否则返回 false。',
                    ex: `
_.isArrayLike([1, 2, 3]);
// => true
 
_.isArrayLike(document.body.children);
// => true
 
_.isArrayLike('abc');
// => true
 
_.isArrayLike(_.noop);
// => false                    
                    `
                },
                {
                    name: '是否一个类数组对象',
                    grammar: '_.isArrayLikeObject(value)',
                    explain: '这个方法类似 _.isArrayLike。除了它还检查value是否是个对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个类数组对象，那么返回 true，否则返回 false。',
                    ex: `
_.isArrayLikeObject([1, 2, 3]);
// => true
 
_.isArrayLikeObject(document.body.children);
// => true
 
_.isArrayLikeObject('abc');
// => false
 
_.isArrayLikeObject(_.noop);
// => false                    
                    `
                },
                {
                    name: '是否 boolean 类型',
                    grammar: '_.isBoolean(value)',
                    explain: '检查 value 是否是原始 boolean 类型或者对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个布尔值，那么返回 true，否则返回 false。',
                    ex: `
_.isBoolean(false);
// => true
 
_.isBoolean(null);
// => false                    
                    `
                },
                {
                    name: '是否一个 buffer',
                    grammar: '_.isBuffer(value)',
                    explain: '检查 value 是否是个 buffer。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个buffer，那么返回 true，否则返回 false。',
                    ex: `
_.isBuffer(new Buffer(2));
// => true
 
_.isBuffer(new Uint8Array(2));
// => false                    
                    `
                },
                {
                    name: '是否一个Date 对象',
                    grammar: '_.isDate(value)',
                    explain: '检查 value 是否是 Date 对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个日期对象，那么返回 true，否则返回 false。',
                    ex: `
_.isDate(new Date); 
// => true
 
_.isDate('Mon April 23 2012');
// => false                    
                    `
                },
                {
                    name: '是否一个DOM 元素',
                    grammar: '_.isElement(value)',
                    explain: '检查 value 是否是可能是 DOM 元素。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个DOM元素，那么返回 true，否则返回 false。',
                    ex: `
_.isElement(document.body);
// => true
 
_.isElement('<body>');
// => false                    
                    `
                },
                {
                    name: '是否为一个空对象',
                    grammar: '_.isEmpty(value)',
                    explain: '检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。\n' +
                        '对象如果被认为为空，那么他们没有自己的可枚举属性的对象。\n' +
                        '类数组值，比如 arguments对象，array，buffer，string或者类jQuery集合的length 为 0，被认为是空。类似的，map（映射）和set 的size 为 0，被认为是空。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为空，那么返回 true，否则返回 false。',
                    ex: `
_.isEmpty(null);
// => true
 
_.isEmpty(true);
// => true
 
_.isEmpty(1);
// => true
 
_.isEmpty([1, 2, 3]);
// => false
 
_.isEmpty({ 'a': 1 });
// => false                    
                    `
                },
                {
                    name: '深比较',
                    grammar: '_.isEqual(value, other)',
                    explain: '执行深比较来确定两者的值是否相等。\n' +
                        '**注意: **这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。',
                    argus: 'value (*): 用来比较的值。\n' +
                        'other (*): 另一个用来比较的值。',
                    ret: '(boolean): 如果 两个值完全相同，那么返回 true，否则返回 false。',
                    ex: `
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
object === other;
// => false                    
                    `
                },
                {
                    name: '通过自定义函数进行深比较',
                    grammar: '_.isEqualWith(value, other, [customizer])',
                    explain: '这个方法类似 _.isEqual。 除了它接受一个 customizer 用来定制比较值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入6个参数：(objValue, othValue [, index|key, object, other, stack])',
                    argus: 'value (*): 用来比较的值。\n' +
                        'other (*): 另一个用来比较的值。\n' +
                        '[customizer] (Function): 用来定制比较值的函数。',
                    ret: '(boolean): 如果 两个值完全相同，那么返回 true，否则返回 false。',
                    ex: `
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
 
function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}
 
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
 
_.isEqualWith(array, other, customizer);
// => true                    
                    `
                },
                {
                    name: '是否一个Error对象',
                    grammar: '_.isError(value)',
                    explain: '检查 value 是否是 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 或者 URIError对象',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个错误（Error）对象，那么返回 true，否则返回 false。',
                    ex: `
_.isError(new Error);
// => true
 
_.isError(Error);
// => false                    
                    `
                },
                {
                    name: '是否原始有限数值',
                    grammar: '_.isFinite(value)',
                    explain: '检查 value 是否是原始有限数值。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个有限数值，那么返回 true，否则返回 false。',
                    ex: `
_.isFinite(3);
// => true
 
_.isFinite(Number.MIN_VALUE);
// => true
 
_.isFinite(Infinity);
// => false
 
_.isFinite('3');
// => false                    
                    `
                },
                {
                    name: '是否一个 Function 对象',
                    grammar: '_.isFunction(value)',
                    explain: '检查 value 是否是 Function 对象。',
                    argus: 'value (*): 要检查的值',
                    ret: '(boolean): 如果 value 是一个函数，那么返回 true，否则返回 false。',
                    ex: `
_.isFunction(_);
// => true
 
_.isFunction(/abc/);
// => false                    
                    `
                },
                {
                    name: '是否为一个整数',
                    grammar: '_.isInteger(value)',
                    explain: '检查 value 是否为一个整数。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个整数，那么返回 true，否则返回 false。',
                    ex: `
_.isInteger(3);
// => true
 
_.isInteger(Number.MIN_VALUE);
// => false
 
_.isInteger(Infinity);
// => false
 
_.isInteger('3');
// => false                    
                    `
                },
                {
                    name: '是否为有效的类数组长度',
                    grammar: '_.isLength(value)',
                    explain: '检查 value 是否为有效的类数组长度。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个有效长度，那么返回 true，否则返回 false。',
                    ex: `
_.isLength(3);
// => true
 
_.isLength(Number.MIN_VALUE);
// => false
 
_.isLength(Infinity);
// => false
 
_.isLength('3');
// => false                    
                    `
                },
                {
                    name: '是否为一个 Map 对象',
                    grammar: '_.isMap(value)',
                    explain: '检查 value 是否为一个 Map 对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个 Map 对象，那么返回 true，否则返回 false。',
                    ex: `
_.isMap(new Map);
// => true
 
_.isMap(new WeakMap);
// => false                    
                    `
                },
                {
                    name: '比较两者是否含有相同的属性值',
                    grammar: '_.isMatch(object, source)',
                    explain: '执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。\n' +
                        '注意: 当source为偏应用时，这种方法等价于 _.matches。（关于偏应用大家可以自己到google上搜索一下）。\n' +
                        '偏应用比较匹配空数组和空对象 source值分别针对任何数组或对象的价值。在 _.isEqual中查看支持的值比较列表。',
                    argus: 'object (Object): 要检查的对象。\n' +
                        'source (Object): 属性值相匹配的对象。',
                    ret: '(boolean): 如果object匹配，那么返回 true，否则返回 false。',
                    ex: `
var object = { 'a': 1, 'b': 2 };
 
_.isMatch(object, { 'b': 2 });
// => true
 
_.isMatch(object, { 'b': 1 });
// => false                    
                    `
                },
                {
                    name: '通过自定义函数比较两者是否含有相同的属性值',
                    grammar: '_.isMatchWith(object, source, [customizer])',
                    explain: '这个方法类似 _.isMatch。 除了它接受一个 customizer 定制比较的值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入5个参数：(objValue, srcValue, index|key, object, source)。',
                    argus: 'object (Object): 要检查的对象。\n' +
                        'source (Object): 属性值相匹配的对象。\n' +
                        '[customizer] (Function): 这个函数用来定制比较。',
                    ret: '(boolean): 如果object匹配，那么返回 true，否则返回 false。',
                    ex: `
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
 
function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}
 
var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };
 
_.isMatchWith(object, source, customizer);
// => true                    
                    `
                },
                {
                    name: ' 是否是 NaN',
                    grammar: '_.isNaN(value)',
                    explain: '检查 value 是否是 NaN。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个 NaN，那么返回 true，否则返回 false。',
                    ex: `
_.isNaN(NaN);
// => true
 
_.isNaN(new Number(NaN));
// => true
 
isNaN(undefined);
// => true
 
_.isNaN(undefined);
// => false                    
                    `
                },
                {
                    name: '是否是一个原生函数',
                    grammar: '_.isNative(value)',
                    explain: '检查 value 是否是一个原生函数。\n' +
                        '注意： 这种方法不能可靠地检测在core-js包中存在的本地函数，因为 core-js 规避这种检测。尽管有多个请求，core-js 维护者已经明确表态：任何试图修复检测将受阻。这样一来，我们别无选择，只能抛出一个错误。不幸的是，这也影响其他的包，比如依赖于 core-js的 babel-polyfill。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是一个 原生函数，那么返回 true，否则返回 false。',
                    ex: `
_.isNative(Array.prototype.push);
// => true
 
_.isNative(_);
// => false                    
                    `
                },
                {
                    name: ' 是否是 null 或者 undefined',
                    grammar: '_.isNil(value)',
                    explain: '检查 value 是否是 null 或者 undefined。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为null 或 undefined，那么返回 true，否则返回 false。',
                    ex: `
_.isNil(null);
// => true
 
_.isNil(void 0);
// => true
 
_.isNil(NaN);
// => false                    
                    `
                },
                {
                    name: '是否是 null',
                    grammar: '_.isNull(value)',
                    explain: '检查 valuealue 是否是 null。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为null，那么返回 true，否则返回 false。',
                    ex: `
_.isNull(null);
// => true
 
_.isNull(void 0);
// => false                    
                    `
                },
                {
                    name: ' 是否是原始Number数值型 ',
                    grammar: '_.isNumber(value)',
                    explain: '检查 value 是否是原始Number数值型 或者 对象。\n' +
                        '注意: 要排除 Infinity, -Infinity, 以及 NaN 数值类型，用 _.isFinite 方法。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个数值，那么返回 true，否则返回 false。',
                    ex: `
_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false                    
                    `
                },
                {
                    name: '是否一个Object',
                    grammar: '_.isObject(value)',
                    explain: '检查 value 是否为 Object 的 language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(\'\'))',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个对象，那么返回 true，否则返回 false。',
                    ex: `
_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false                    
                    `
                },
                {
                    name: '是否一个类对象',
                    grammar: '_.isObjectLike(value)',
                    explain: '检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个类对象，那么返回 true，否则返回 false。',
                    ex: `
_.isObjectLike({});
// => true
 
_.isObjectLike([1, 2, 3]);
// => true
 
_.isObjectLike(_.noop);
// => false
 
_.isObjectLike(null);
// => false                    
                    `
                },
                {
                    name: '是否是普通对象',
                    grammar: '_.isPlainObject(value)',
                    explain: '检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个普通对象，那么返回 true，否则返回 false。',
                    ex: `
function Foo() {
  this.a = 1;
}
 
_.isPlainObject(new Foo);
// => false
 
_.isPlainObject([1, 2, 3]);
// => false
 
_.isPlainObject({ 'x': 0, 'y': 0 });
// => true
 
_.isPlainObject(Object.create(null));
// => true                    
                    `
                },
                {
                    name: ' 是否为RegExp对象',
                    grammar: '_.isRegExp(value)',
                    explain: '检查 value 是否为RegExp对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个正则表达式，那么返回 true，否则返回 false。',
                    ex: `
_.isRegExp(/abc/);
// => true
 
_.isRegExp('/abc/');
// => false                    
                    `
                },
                {
                    name: '是否一个安全整数',
                    grammar: '_.isSafeInteger(value)',
                    explain: '检查 value 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个安全整数，那么返回 true，否则返回 false。',
                    ex: `
_.isSafeInteger(3);
// => true
 
_.isSafeInteger(Number.MIN_VALUE);
// => false
 
_.isSafeInteger(Infinity);
// => false
 
_.isSafeInteger('3');
// => false                    
                    `
                },
                {
                    name: '是否一个Set对象',
                    grammar: '_.isSet(value)',
                    explain: '检查 value 是否是一个Set对象。',
                    argus: 'value (*): 要检查的值',
                    ret: '(boolean): 如果 value 为一个 set 对象，那么返回 true，否则返回 false。',
                    ex: `
_.isSet(new Set);
// => true
 
_.isSet(new WeakSet);
// => false                    
                    `
                },
                {
                    name: '是否一个String 对象',
                    grammar: '_.isString(value)',
                    explain: '检查 value 是否是原始字符串String或者对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个symbol，那么返回 true，否则返回 false。',
                    ex: `
_.isSymbol(Symbol.iterator);
// => true
 
_.isSymbol('abc');
// => false                    
                    `
                },
                {
                    name: '是否一个Symbol对象',
                    grammar: '_.isSymbol(value)',
                    explain: '检查 value 是否是原始 Symbol 或者对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个symbol，那么返回 true，否则返回 false。',
                    ex: `
_.isSymbol(Symbol.iterator);
// => true
 
_.isSymbol('abc');
// => false                    
                    `
                },
                {
                    name: '是否是TypedArray',
                    grammar: '_.isTypedArray(value)',
                    explain: '检查 value 是否是TypedArray。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个typed array，那么返回 true，否则返回 false。',
                    ex: `
_.isTypedArray(new Uint8Array);
// => true
 
_.isTypedArray([]);
// => false                    
                    `
                },
                {
                    name: '是否是 undefined',
                    grammar: '_.isUndefined(value)',
                    explain: '检查 value 是否是 undefined.',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 是 undefined ，那么返回 true，否则返回 false。',
                    ex: `
_.isUndefined(void 0);
// => true
 
_.isUndefined(null);
// => false                    
                    `
                },
                {
                    name: '是否是 WeakMap 对象',
                    grammar: '_.isWeakMap(value)',
                    explain: '检查 value 是否是 WeakMap 对象',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个 WeakMap 对象 ，那么返回 true，否则返回 false。',
                    ex: `
_.isWeakMap(new WeakMap);
// => true
 
_.isWeakMap(new Map);
// => false                    
                    `
                },
                {
                    name: '是否是 WeakSet 对象',
                    grammar: '_.isWeakSet(value)',
                    explain: '检查 value 是否是 WeakSet 对象。',
                    argus: 'value (*): 要检查的值。',
                    ret: '(boolean): 如果 value 为一个 WeakSet 对象 ，那么返回 true，否则返回 false。',
                    ex: `
_.isWeakSet(new WeakSet);
// => true
 
_.isWeakSet(new Set);
// => false                    
                    `
                },
                {
                    name: '转换为数组（一维）',
                    grammar: '_.toArray(value)',
                    explain: '转换 value 为一个数组。',
                    argus: 'value (*): 要转换的值。',
                    ret: '(Array): 返回转换后的数组',
                    ex: `
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
_.toArray('abc');
// => ['a', 'b', 'c']
 
_.toArray(1);
// => []
 
_.toArray(null);
// => []                    
                    `
                },
                {
                    name: '转换为一个有限数字',
                    grammar: '_.toFinite(value)',
                    explain: '转换 value 为一个有限数字。',
                    argus: 'value (*): 要转换的值。',
                    ret: '(number): 返回转换后的数字。',
                    ex: `
_.toFinite(3.2);
// => 3.2
 
_.toFinite(Number.MIN_VALUE);
// => 5e-324
 
_.toFinite(Infinity);
// => 1.7976931348623157e+308
 
_.toFinite('3.2');
// => 3.2                    
                    `
                },
                {
                    name: '转换为一个整数',
                    grammar: '_.toInteger(value)',
                    explain: '转换 value 为一个整数。',
                    argus: 'value (*): 要转换的值。',
                    ret: '(number): 返回转换后的整数。',
                    ex: `
_.toInteger(3.2);
// => 3
 
_.toInteger(Number.MIN_VALUE);
// => 0
 
_.toInteger(Infinity);
// => 1.7976931348623157e+308
 
_.toInteger('3.2');
// => 3                    
                    `
                },
                {
                    name: '转换为用作类数组对象的长度整数',
                    grammar: '_.toLength(value)',
                    explain: '转换 value 为用作类数组对象的长度整数',
                    argus: 'value (*): 要转换的值。',
                    ret: '(number): 返回转换后的整数。',
                    ex: `
_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3                    
                    `
                },
                {
                    name: '转换为一个数字',
                    grammar: '_.toNumber(value)',
                    explain: '转换 value 为一个数字。',
                    argus: 'value (*): 要处理的值。',
                    ret: '(number): 返回数字。',
                    ex: `
_.toNumber(3.2);
// => 3.2
 
_.toNumber(Number.MIN_VALUE);
// => 5e-324
 
_.toNumber(Infinity);
// => Infinity
 
_.toNumber('3.2');
// => 3.2                    
                    `
                },
                {
                    name: '转换为普通对象',
                    grammar: '_.toPlainObject(value)',
                    explain: '转换 value 为普通对象。 包括继承的可枚举属性。',
                    argus: 'value (*): 要转换的值。',
                    ret: '(Object): 返回转换后的普通对象。',
                    ex: `
function Foo() {
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }
 
_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }                    
                    `
                },
                {
                    name: '转换为安全整数',
                    grammar: '_.toSafeInteger(value)',
                    explain: '转换 value 为安全整数。 安全整数可以用于比较和准确的表示。',
                    argus: 'value (*): 要转换的值。',
                    ret: '(number): 返回转换后的整数。',
                    ex: `
_.toSafeInteger(3.2);
// => 3
 
_.toSafeInteger(Number.MIN_VALUE);
// => 0
 
_.toSafeInteger(Infinity);
// => 9007199254740991
 
_.toSafeInteger('3.2');
// => 3                    
                    `
                },
                {
                    name: '转换为字符串',
                    grammar: '_.toString(value)',
                    explain: '转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。',
                    argus: 'value (*): 要处理的值。',
                    ret: '(string): 返回字符串。',
                    ex: `
_.toString(null);
// => ''
 
_.toString(-0);
// => '-0'
 
_.toString([1, 2, 3]);
// => '1,2,3'                    
                    `
                }
            ]
        },
        {
            name: '数学方法',
            child: [
                {
                    name: '相加',
                    grammar: '_.add(augend, addend)',
                    explain: '两个数相加。',
                    argus: 'augend (number): 相加的第一个数。\n' +
                        'addend (number): 相加的第二个数。',
                    ret: '(number): 返回总和。',
                    ex: `
_.add(6, 4);
// => 10                    
                    `
                },
                {
                    name: '相减',
                    grammar: '_.subtract(minuend, subtrahend)',
                    explain: '两数相减。',
                    argus: 'minuend (number): 相减的第一个数。\n' +
                        'subtrahend (number): 相减的第二个数。',
                    ret: '(number): 返回差。',
                    ex: `
_.subtract(6, 4);
// => 2                    
                    `
                },
                {
                    name: '相乘',
                    grammar: '_.multiply(multiplier, multiplicand)',
                    explain: '两个数相乘。',
                    argus: 'augend (number): 相乘的第一个数。\n' +
                        'addend (number): 相乘的第二个数。',
                    ret: '(number): 返回乘积。',
                    ex: `
_.multiply(6, 4);
// => 24                    
                    `
                },
                {
                    name: '相除',
                    grammar: '_.divide(dividend, divisor)',
                    explain: '两个数相除。',
                    argus: 'dividend (number): 相除的第一个数。\n' +
                        'divisor (number): 相除的第二个数。',
                    ret: '(number): 返回商数。',
                    ex: `
_.divide(6, 4);
// => 1.5                    
                    `
                },
                {
                    name: '四舍五入',
                    grammar: '_.round(number, [precision=0])',
                    explain: '根据 precision（精度） 四舍五入 number。',
                    argus: 'number (number): 要四舍五入的数字。\n' +
                        '[precision=0] (number): 四舍五入的精度。',
                    ret: '(number): 返回四舍五入的数字。',
                    ex: `
_.round(4.006);
// => 4
 
_.round(4.006, 2);
// => 4.01
 
_.round(4060, -2);
// => 4100                    
                    `
                },
                {
                    name: '向上舍入',
                    grammar: '_.ceil(number, [precision=0]) ',
                    explain: '根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）',
                    argus: 'number (number): 要向上舍入的值。\n' +
                        '[precision=0] (number): 向上舍入的的精度。',
                    ret: '(number): 返回向上舍入的值。',
                    ex: `
_.ceil(4.006);
// => 5
 
_.ceil(6.004, 2);
// => 6.01
 
_.ceil(6040, -2);
// => 6100                    
                    `
                },
                {
                    name: ' 向下舍入',
                    grammar: '_.floor(number, [precision=0])',
                    explain: '根据 precision（精度） 向下舍入 number。（ precision（精度）可以理解为保留几位小数。）',
                    argus: 'number (number): 要向下舍入的值。\n' +
                        '[precision=0] (number): 向下舍入的精度。',
                    ret: '(number): 返回向下舍入的值。',
                    ex: `
_.floor(4.006);
// => 4
 
_.floor(0.046, 2);
// => 0.04
 
_.floor(4060, -2);
// => 4000                    
                    `
                },
                {
                    name: '数组中最大值',
                    grammar: '_.max(array)',
                    explain: '计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。',
                    argus: 'array (Array): 要迭代的数组。',
                    ret: '(*): 返回最大的值。',
                    ex: `
_.max([4, 2, 8, 6]);
// => 8
 
_.max([]);
// => undefined                    
                    `
                },
                {
                    name: '通过迭代器获取数组中的最大值',
                    grammar: '_.maxBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.max 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
                    argus: 'array (Array): 要迭代的数组。\n' +
                        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。',
                    ret: '(*): 返回最大的值。',
                    ex: `
var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The \`_.property\` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }                    
                    `
                },
                {
                    name: '数组的最小值',
                    grammar: '_.min(array)',
                    explain: '计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。',
                    argus: 'array (Array): 要迭代的数组。',
                    ret: '(*): 返回最小的值。',
                    ex: `
_.min([4, 2, 8, 6]);
// => 2
 
_.min([]);
// => undefined                    
                    `
                },
                {
                    name: '通过迭代器获取数组中的最小值',
                    grammar: '_.minBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.min 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
                    argus: 'array (Array): 要迭代的数组。\n' +
                        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。',
                    ret: '(*): 返回最小的值。',
                    ex: `
var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }
 
// The \`_.property\` iteratee shorthand.
_.minBy(objects, 'n');
// => { 'n': 1 }                    
                    `
                },
                {
                    name: '数组的平均值',
                    grammar: '_.mean(array)',
                    explain: '计算 array 的平均值。',
                    argus: 'array (Array): 要迭代的数组。',
                    ret: '(number): 返回平均值。',
                    ex: `
_.mean([4, 2, 8, 6]);
// => 5                    
                    `
                },
                {
                    name: '通过迭代器获取数组中的平均值',
                    grammar: '_.meanBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.mean， 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
                    argus: 'array (Array): 要迭代的数组。\n' +
                        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。',
                    ret: '(number): 返回平均值。',
                    ex: `
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.meanBy(objects, function(o) { return o.n; });
// => 5
 
// The \`_.property\` iteratee shorthand.
_.meanBy(objects, 'n');
// => 5                    
                    `
                },
                {
                    name: '数组总和',
                    grammar: '_.sum(array)',
                    explain: '计算 array 中值的总和',
                    argus: 'array (Array): 要迭代的数组。',
                    ret: '(number): 返回总和。',
                    ex: `
_.sum([4, 2, 8, 6]);
// => 20                    
                    `
                },
                {
                    name: '通过迭代器计算数组总和',
                    grammar: '_.sumBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.summin 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
                    argus: 'array (Array): 要迭代的数组。\n' +
                        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。',
                    ret: '(number): 返回总和。',
                    ex: `
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.sumBy(objects, function(o) { return o.n; });
// => 20
 
// The \`_.property\` iteratee shorthand.
_.sumBy(objects, 'n');
// => 20                    
                    `
                }
            ]
        },
        {
            name: '数值',
            child: [
                {
                    name: '区间限制',
                    grammar: '_.clamp(number, [lower], upper)',
                    explain: '返回限制在 lower 和 upper 之间的值。',
                    argus: 'number (number): 被限制的值。\n' +
                        '[lower] (number): 下限。\n' +
                        'upper (number): 上限。',
                    ret: '(number): 返回被限制的值。',
                    ex: `
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5                    
                    `
                },
                {
                    name: '是否在区间内',
                    grammar: '_.inRange(number, [start=0], end)',
                    explain: '检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。',
                    argus: 'number (number): 要检查的值。\n' +
                        '[start=0] (number): 开始范围。\n' +
                        'end (number): 结束范围。',
                    ret: '(boolean): 如果number在范围内 ，那么返回true，否则返回 false。',
                    ex: `
_.inRange(3, 2, 4);
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
 
_.inRange(1.2, 2);
// => true
 
_.inRange(5.2, 4);
// => false
 
_.inRange(-3, -2, -6);
// => true                    
                    `
                },
                {
                    name: '随机数',
                    grammar: '_.random([lower=0], [upper=1], [floating])',
                    explain: '产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。',
                    argus: '[lower=0] (number): 下限。\n' +
                        '[upper=1] (number): 上限。\n' +
                        '[floating] (boolean): 指定是否返回浮点数。',
                    ret: '(number): 返回随机数。',
                    ex: `
_.random(0, 5);
// => an integer between 0 and 5
 
_.random(5);
// => also an integer between 0 and 5
 
_.random(5, true);
// => a floating-point number between 0 and 5
 
_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2                    
                    `
                }
            ]
        },
        {
            name: '对象',
            child: [
                {
                    name: '复制/合并属性',
                    grammar: '_.assign(object, [sources])',
                    explain: '分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。',
                    ret: '(Object): 返回 object.',
                    ex: `
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
_.assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }                    
                    `
                },
                {
                    name: '遍历复制/合并属性',
                    grammar: '_.assignIn(object, [sources])',
                    explain: '这个方法类似 _.assign， 除了它会遍历并继承来源对象的属性。\n' +
                        'Note: 这方法会改变 object。',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。',
                    ret: '(Object): 返回 object。',
                    ex: `
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
_.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }                    
                    `
                },
                {
                    name: '通过自定义函数来遍历复制/合并属性',
                    grammar: '_.assignInWith(object, sources, [customizer])',
                    explain: '这个方法类似 _.assignIn， 除了它接受一个 customizer ，被调用以产生所分配的值。 如果 customizer 返回 undefined 将会由分配处理方法代替。 customizer 会传入5个参数： (objValue, srcValue, key, object, source)。\n' +
                        'Note: 这方法会改变 object。',
                    argus: 'object (Object): 目标对象。\n' +
                        'sources (...Object): 来源对象。\n' +
                        '[customizer] (Function): 这个函数用来自定义分配的值。',
                    ret: '(Object): 返回 object。',
                    ex: `
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}
 
var defaults = _.partialRight(_.assignInWith, customizer);
 
defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }                    
                    `
                },
                {
                    name: '通过自定义函数来复制/合并属性',
                    grammar: '_.assignWith(object, sources, [customizer])',
                    explain: '这个方法类似 _.assign ， 除了它接受一个 customizer 决定如何分配值。 如果customizer返回 undefined 将会由分配处理方法代替。customizer 会传入5个参数： (objValue, srcValue, key, object, source)。\n' +
                        'Note: 这方法会改变 object.',
                    argus: 'object (Object): 目标对象。\n' +
                        'sources (...Object): 来源对象。\n' +
                        '[customizer] (Function): 这个函数用来自定义分配的值。',
                    ret: '(Object): 返回 object.',
                    ex: `
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}
 
var defaults = _.partialRight(_.assignWith, customizer);
 
defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }                    
                    `
                },
                {
                    name: '返回选中值的数组',
                    grammar: '_.at(object, [paths])',
                    explain: '创建一个数组，值来自 object 的paths路径相应的值。',
                    argus: 'object (Object): 要迭代的对象。\n' +
                        '[paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。',
                    ret: '(Array): 返回选中值的数组。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]                    
                    `
                },
                {
                    name: '创建新对象',
                    grammar: '_.create(prototype, [properties])',
                    explain: '创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。',
                    argus: 'prototype (Object): 要继承的对象。\n' +
                        '[properties] (Object): 待分配的属性。',
                    ret: '(Object): 返回新对象。',
                    ex: `
function Shape() {
  this.x = 0;
  this.y = 0;
}
 
function Circle() {
  Shape.call(this);
}
 
Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});
 
var circle = new Circle;
circle instanceof Circle;
// => true
 
circle instanceof Shape;
// => true                    
                    `
                },
                {
                    name: '复制属性（不合并）',
                    grammar: '_.defaults(object, [sources])',
                    explain: '分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。\n' +
                        '注意: 这方法会改变 object.',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。',
                    ret: '(Object): 返回 object。',
                    ex: `
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }                    
                    `
                },
                {
                    name: '递归复制属性（不合并）',
                    grammar: '_.defaultsDeep(object, [sources])',
                    explain: '这个方法类似 _.defaults，除了它会递归分配默认属性。\n' +
                        '注意: 这方法会改变 object.',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。',
                    ret: '(Object): 返回 object。',
                    ex: `
_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }                    
                    `
                },
                {
                    name: '查询匹配key',
                    grammar: '_.findKey(object, [predicate=_.identity])',
                    explain: '这个方法类似 _.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。',
                    argus: 'object (Object): 需要检索的对象。\n' +
                        '[predicate=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(*): 返回匹配的 key，否则返回 undefined。',
                    ex: `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The \`_.matches\` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The \`_.matchesProperty\` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The \`_.property\` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'                    
                    `
                },
                {
                    name: '查询最后匹配key',
                    grammar: '_.findLastKey(object, [predicate=_.identity])',
                    explain: '这个方法类似 _.findKey。 不过它是反方向开始遍历的。',
                    argus: 'object (Object): 需要检索的对象。\n' +
                        '[predicate=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(*): 返回匹配的 key，否则返回 undefined.',
                    ex: `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming \`_.findKey\` returns 'barney'
 
// The \`_.matches\` iteratee shorthand.
_.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'
 
// The \`_.matchesProperty\` iteratee shorthand.
_.findLastKey(users, ['active', false]);
// => 'fred'
 
// The \`_.property\` iteratee shorthand.
_.findLastKey(users, 'active');
// => 'pebbles'                    
                    `
                },
                {
                    name: '遍历属性（自身和继承）',
                    grammar: '_.forIn(object, [iteratee=_.identity])',
                    explain: '使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回 object。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。                    
                    `
                },
                {
                    name: '倒序遍历属性（自身和继承）',
                    grammar: '_.forInRight(object, [iteratee=_.identity])',
                    explain: '这个方法类似 _.forIn。 除了它是反方向开始遍历object的。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回 object。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => 输出 'c', 'b', 然后 'a'， \`_.forIn\` 会输出 'a', 'b', 然后 'c'。                    
                    `
                },
                {
                    name: '遍历属性（自身）',
                    grammar: '_.forOwn(object, [iteratee=_.identity])',
                    explain: '使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回 object。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => 输出 'a' 然后 'b' (无法保证遍历的顺序)。                    
                    `
                },
                {
                    name: '倒序遍历属性（自身）',
                    grammar: '_.forOwnRight(object, [iteratee=_.identity])',
                    explain: '这个方法类似 _.forOwn。 除了它是反方向开始遍历object的。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回 object。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// =>  输出 'b' 然后 'a'， \`_.forOwn\` 会输出 'a' 然后 'b'                    
                    `
                },
                {
                    name: '根据路径获取值',
                    grammar: '_.get(object, path, [defaultValue])',
                    explain: '根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。',
                    argus: 'object (Object): 要检索的对象。\n' +
                        'path (Array|string): 要获取属性的路径。\n' +
                        '[defaultValue] (*): 如果解析值是 undefined ，这值会被返回。',
                    ret: '(*): 返回解析的值。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'                                     
                    `
                },
                {
                    name: '组装函数属性名称为数组（自身属性）',
                    grammar: '_.functions(object)',
                    explain: '创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性。',
                    argus: 'object (Object): 要检查的对象。',
                    ret: '(Array): 返回函数名。',
                    ex: `
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functions(new Foo);
// => ['a', 'b']                                     
                    `
                },
                {
                    name: '组装函数属性名称为数组（自身及继承属性）',
                    grammar: '_.functionsIn(object)',
                    explain: '创建一个函数属性名称的数组，函数属性名称来自object对象自身和继承的可枚举属性。',
                    argus: 'object (Object): 要检查的对象。',
                    ret: '(Array): 返回函数名。',
                    ex: `
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functionsIn(new Foo);
// => ['a', 'b', 'c']                                     
                    `
                },
                {
                    name: '是否为自身属性',
                    grammar: '_.has(object, path)',
                    explain: '检查 path 是否是object对象的直接属性。',
                    argus: 'object (Object): 要检索的对象。\n' +
                        'path (Array|string): 要检查的路径path。',
                    ret: '(boolean): 如果path存在，那么返回 true ，否则返回 false。',
                    ex: `
var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.has(object, 'a');
// => true
 
_.has(object, 'a.b');
// => true
 
_.has(object, ['a', 'b']);
// => true
 
_.has(other, 'a');
// => false                                     
                    `
                },
                {
                    name: '是否为自身或继承属性',
                    grammar: '_.hasIn(object, path)',
                    explain: '检查 path 是否是object对象的直接或继承属性。',
                    argus: 'object (Object): 要检索的对象。\n' +
                        'path (Array|string): 要检查的路径path。',
                    ret: '(boolean): 如果path存在，那么返回 true ，否则返回 false。',
                    ex: `
var object = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.hasIn(object, 'a');
// => true
 
_.hasIn(object, 'a.b');
// => true
 
_.hasIn(object, ['a', 'b']);
// => true
 
_.hasIn(object, 'b');
// => false                                     
                    `
                },
                {
                    name: '键值倒置',
                    grammar: '_.invert(object)',
                    explain: '创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。',
                    argus: 'object (Object): 要键值倒置对象。',
                    ret: '(Object): 返回新的键值倒置后的对象。',
                    ex: `
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }                                     
                    `
                },
                {
                    name: '通过迭代器实现键值倒置',
                    grammar: '_.invertBy(object, [iteratee=_.identity])',
                    explain: '这个方法类似 _.invert，除了倒置对象 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。每个反转键相应反转的值是一个负责生成反转值key的数组。iteratee 会传入3个参数：(value) 。',
                    argus: 'object (Object): 要键值倒置对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回新的键值倒置后的对象。',
                    ex: `
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
 
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }                                     
                    `
                },
                {
                    name: '调用对象path上的方法',
                    grammar: '_.invoke(object, path, [args])',
                    explain: '调用object对象path上的方法。',
                    argus: 'object (Object): 要检索的对象。\n' +
                        'path (Array|string): 用来调用的方法路径。\n' +
                        '[args] (...*): 调用的方法的参数。',
                    ret: '(*): 返回调用方法的结果。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]                                     
                    `
                },
                {
                    name: '组装属性为数组（自身）',
                    grammar: '_.keys(object)',
                    explain: '创建一个 object 的自身可枚举属性名为数组。\n' +
                        'Note: 非对象的值会被强制转换为对象，查看 ES spec 了解详情。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回包含属性名的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)
 
_.keys('hi');
// => ['0', '1']                                     
                    `
                },
                {
                    name: '组装属性为数组（自身和继承）',
                    grammar: '_.keysIn(object)',
                    explain: '创建一个 object 自身 和 继承的可枚举属性名为数组。\n' +
                        '注意: 非对象的值会被强制转换为对象。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回包含属性名的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)                                     
                    `
                },
                {
                    name: '通过迭代器改变key',
                    grammar: '_.mapKeys(object, [iteratee=_.identity])',
                    explain: '反向版 _.mapValues。 这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。iteratee调用三个参数： (value, key, object)。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回映射后的新对象。',
                    ex: `
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }                                     
                    `
                },
                {
                    name: '通过迭代器改变value',
                    grammar: '_.mapValues(object, [iteratee=_.identity])',
                    explain: '创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee调用三个参数： (value, key, object)。',
                    argus: 'object (Object): 要遍历的对象。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
                    ret: '(Object): 返回映射后的新对象。',
                    ex: `
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
// The \`_.property\` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)                                     
                    `
                },
                {
                    name: '合并两个对象',
                    grammar: '_.merge(object, [sources])',
                    explain: '该方法类似 _.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。\n' +
                        'Note: 这方法会改变对象 object.',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。',
                    ret: '(Object): 返回 object.',
                    ex: `
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }                                     
                    `
                },
                {
                    name: '通过自定义函数合并两个对象',
                    grammar: '_.mergeWith(object, sources, customizer)',
                    explain: '该方法类似 _.merge，除了它接受一个 customizer，调用以产生目标对象和来源对象属性的合并值。如果customizer 返回 undefined，将会由合并处理方法代替。 customizer调用与7个参数：(objValue, srcValue, key, object, source, stack)。\n' +
                        'Note: 这方法会改变对象 object.',
                    argus: 'object (Object): 目标对象。\n' +
                        '[sources] (...Object): 来源对象。\n' +
                        'customizer (Function): 这个函数定制合并值。',
                    ret: '(Object): 返回 object。',
                    ex: `
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
 
_.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }                                     
                    `
                },
                {
                    name: '删除属性',
                    grammar: '_.omit(object, [props])',
                    explain: '反向版 _.pick; 这个方法一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（可以理解为删除object对象的属性）。',
                    argus: 'object (Object): 来源对象。\n' +
                        '[props] (...(string|string[])): 要被忽略的属性。（单独指定或指定在数组中。）',
                    ret: '(Object): 返回新对象。',
                    ex: `
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }                                     
                    `
                },
                {
                    name: '通过断言函数删除属性',
                    grammar: '_.omitBy(object, [predicate=_.identity])',
                    explain: '反向版 _.pickBy；这个方法一个对象，这个对象忽略 predicate（断言函数）判断不是真值的属性后，object自身和继承的可枚举属性组成。predicate调用与2个参数：(value, key)。',
                    argus: 'object (Object): 来源对象。\n' +
                        '[predicate=_.identity] (Function): 调用每一个属性的函数。',
                    ret: '(Object): 返回新对象。',
                    ex: `
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }                                     
                    `
                },
                {
                    name: '选择属性',
                    grammar: '_.pick(object, [props])',
                    explain: '创建一个从 object 中选中的属性的对象。',
                    argus: 'object (Object): 来源对象。\n' +
                        '[props] (...(string|string[])): 要被忽略的属性。（单独指定或指定在数组中。）',
                    ret: '(Object): 返回新对象。',
                    ex: `
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }                                     
                    `
                },
                {
                    name: '通过断言函数选择属性',
                    grammar: '_.pickBy(object, [predicate=_.identity])',
                    explain: '创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性。 predicate调用2个参数：(value, key)。',
                    argus: 'object (Object): 来源对象。\n' +
                        '[predicate=_.identity] (Function): 调用每一个属性的函数。',
                    ret: '(Object): 返回新对象。',
                    ex: `
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }                                     
                    `
                },
                {
                    name: '查询匹配key的结果',
                    grammar: '_.result(object, path, [defaultValue])',
                    explain: '这个方法类似 _.get， 除了如果解析到的值是一个函数的话，就绑定 this 到这个函数并返回执行后的结果。',
                    argus: 'object (Object): 要检索的对象。\n' +
                        'path (Array|string): 要解析的属性路径。\n' +
                        '[defaultValue] (*): 如果值解析为 undefined，返回这个值。',
                    ret: '(*): 返回解析后的值。',
                    ex: `
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 
_.result(object, 'a[0].b.c1');
// => 3
 
_.result(object, 'a[0].b.c2');
// => 4
 
_.result(object, 'a[0].b.c3', 'default');
// => 'default'
 
_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'                                     
                    `
                },
                {
                    name: '设置属性',
                    grammar: '_.set(object, path, value)',
                    explain: '设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用 _.setWith 定制path创建。\n' +
                        'Note: 这个方法会改变 object。',
                    argus: 'object (Object): 要修改的对象。\n' +
                        'path (Array|string): 要设置的对象路径。\n' +
                        'value (*): 要设置的值。',
                    ret: '(Object): 返回 object。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4
 
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5                                     
                    `
                },
                {
                    name: '通过定制器设置属性',
                    grammar: '_.setWith(object, path, value, [customizer])',
                    explain: '这个方法类似 _.set，除了它接受一个 customizer，调用生成对象的 path。 如果 customizer 返回 undefined 将会有它的处理方法代替。 customizer 调用3个参数： (nsValue, key, nsObject)。\n' +
                        '注意: 这个方法会改变 object.',
                    argus: 'object (Object): 要修改的对象。\n' +
                        'path (Array|string): 要设置的对象路径。\n' +
                        'value (*): 要设置的值。\n' +
                        '[customizer] (Function): 这个函数用来定制分配的值。',
                    ret: '(Object): 返回 object。',
                    ex: `
var object = {};
 
_.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }                                     
                    `
                },
                {
                    name: '组装属性值为数组（自身属性）',
                    grammar: '_.values(object)',
                    explain: '创建 object 自身可枚举属性的值为数组。\n' +
                        '注意: 注意: 非对象的值会强制转换为对象。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回对象属性的值的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.values(new Foo);
// => [1, 2] (无法保证遍历的顺序)
 
_.values('hi');
// => ['h', 'i']                                     
                    `
                },
                {
                    name: '组装属性值为数组（自身和继承属性）',
                    grammar: '_.valuesIn(object)',
                    explain: '创建 object 自身和继承的可枚举属性的值为数组\n' +
                        '注意: 注意: 非对象的值会强制转换为对象。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回对象属性的值的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.valuesIn(new Foo);
// => [1, 2, 3] (无法保证遍历的顺序)                                     
                    `
                },
                {
                    name: '键值对数组化（自身属性）',
                    grammar: '_.toPairs(object)',
                    explain: '创建一个object对象自身可枚举属性的键值对数组。这个数组可以通过 _.fromPairs撤回。如果object 是 map 或 set，返回其条目。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回键值对的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)                                     
                    `
                },
                {
                    name: '键值对数组化（自身和继承属性）',
                    grammar: '_.toPairsIn(object)',
                    explain: '创建一个object对象自身和继承的可枚举属性的键值对数组。这个数组可以通过 _.fromPairs撤回。如果object 是 map 或 set，返回其条目。',
                    argus: 'object (Object): 要检索的对象。',
                    ret: '(Array): 返回键值对的数组。',
                    ex: `
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)                                     
                    `
                },
                {
                    name: '通过迭代器转变',
                    grammar: '_.transform(object, [iteratee=_.identity], [accumulator])',
                    explain: '_.reduce的替代方法;此方法将转换object对象为一个新的accumulator对象，结果来自iteratee处理自身可枚举的属性。 每次调用可能会改变 accumulator 对象。如果不提供accumulator，将使用与[[Prototype]]相同的新对象。iteratee调用4个参数：(accumulator, value, key, object)。如果返回 false，iteratee 会提前退出。',
                    argus: 'object (Object): 要遍历的对象\n' +
                        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。\n' +
                        '[accumulator] (*): 定制叠加的值。',
                    ret: '(*): 返回叠加后的值。',
                    ex: `
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]
 
_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }                                     
                    `
                },
                {
                    name: '移除属性是否成功',
                    grammar: '_.unset(object, path)',
                    explain: '移除object对象 path 路径上的属性。\n' +
                        '注意: 这个方法会改变源对象 object。',
                    argus: 'object (Object): 要修改的对象。\n' +
                        'path (Array|string): 要移除的对象路径。',
                    ret: '(boolean): 如果移除成功，那么返回 true ，否则返回 false。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
 
_.unset(object, ['a', '0', 'b', 'c']);
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };                                     
                    `
                },
                {
                    name: '通过自定义函数更新属性值',
                    grammar: '_.update(object, path, updater)',
                    explain: '该方法类似 _.set，除了接受updater以生成要设置的值。使用 _.updateWith来自定义生成的新path。updater调用1个参数：(value)。\n' +
                        'Note: 这个方法会改变 object。',
                    argus: 'object (Object): 要修改的对象。\n' +
                        'path (Array|string): 要设置属性的路径。\n' +
                        'updater (Function): 用来生成设置值的函数。',
                    ret: '(Object): 返回 object 。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9
 
_.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0                                     
                    `
                },
                {
                    name: '通过定制器和自定义函数更新属性值',
                    grammar: '_.updateWith(object, path, updater, [customizer])',
                    explain: '该方法类似 _.update，不同之处在于它接受customizer，调用来生成新的对象的path。如果customizer返回undefined，路径创建由该方法代替。customizer调用有三个参数：(nsValue, key, nsObject) 。\n' +
                        'Note: 这个方法会改变 object.',
                    argus: 'object (Object): 要修改的对象。\n' +
                        'path (Array|string): 要设置属性的路径。\n' +
                        'updater (Function): 用来生成设置值的函数。\n' +
                        '[customizer] (Function): 用来自定义分配值的函数。',
                    ret: '(Object): 返回 object.',
                    ex: `
var object = {};
 chain
_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }                                     
                    `
                }
            ]
        },
        {
            name: '序列',
            child: [
                {
                    name: '创建lodash对象',
                    grammar: '_(value)',
                    explain: '创建一个lodash对象，包装value后的对象启用隐式方法链。返回的数组、集合、方法相互之间能够链式调用。检索唯一值或返回原始值会自动解除链条并返回计算后的值，否则需要调用 _#value 方法解除链(即获得计算结果)。\n' +
                        '显式链式调用，在任何情况下需要先用 _#value 解除链后，才能使用 _.chain 开启。\n' +
                        '链式方法是惰性计算的，直到隐式或者显式调用了 _#value 才会执行计算。',
                    argus: 'value (*): 需要被包装为 lodash 实例的值。',
                    ret: '(Object): 返回 lodash 包装后的实例。',
                    ex: `
function square(n) {
  return n * n;
}
 
var wrapped = _([1, 2, 3]);
 
// 返回未包装的值
wrapped.reduce(_.add);
// => 6
 
// 返回链式包装的值
var squares = wrapped.map(square);
 
_.isArray(squares);
// => false
 
_.isArray(squares.value());
// => true                                     
                    `
                },
                {
                    name: '创建lodash包装实例',
                    grammar: '_.chain(value)',
                    explain: '创建一个lodash包装实例，包装value以启用显式链模式。要解除链必须使用 _#value 方法。',
                    argus: 'value (*): 要包装的值。',
                    ret: '(Object): 返回 lodash 包装的实例。',
                    ex: `
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
 
var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
// => 'pebbles is 1'                                     
                    `
                },
                {
                    name: '拦截器',
                    grammar: '_.tap(value, interceptor)',
                    explain: '这个方法调用一个 interceptor 并返回 value。interceptor调用1个参数： (value)。 该方法的目的是 进入 方法链序列以便修改中间结果。',
                    argus: 'value (*): 提供给 interceptor 的值。\n' +
                        'interceptor (Function): 用来调用的函数。',
                    ret: '(*): 返回 value.',
                    ex: `
_([1, 2, 3])
 .tap(function(array) {
// 改变传入的数组
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]                                     
                    `
                },
                {
                    name: '拦截器升级',
                    grammar: '_.thru(value, interceptor)',
                    explain: '这个方法类似 _.tap， 除了它返回 interceptor 的返回结果。该方法的目的是"传递" 值到一个方法链序列以取代中间结果。',
                    argus: 'value (*): 提供给 interceptor 的值。\n' +
                        'interceptor (Function): 用来调用的函数。',
                    ret: '(*): 返回 interceptor 的返回结果。',
                    ex: `
_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']                                     
                    `
                },
                {
                    name: '包装对象为可迭代',
                    grammar: '_.prototype',
                    explain: '启用包装对象为 iterable。',
                    argus: '',
                    ret: '(Object): 返回包装对象。',
                    ex: `
var wrapped = _([1, 2]);
 
wrapped[Symbol.iterator]() === wrapped;
// => true
 
Array.from(wrapped);
// => [1, 2]                                     
                    `
                },
                {
                    name: '_.at的包装版本',
                    grammar: '_.prototype.at([paths])',
                    explain: '这个方法是 _.at 的包装版本 。',
                    argus: '[paths] (...(string|string[])): 要选择元素的属性路径（ 单独指定或者数组）。',
                    ret: '(Object): 返回 lodash 的包装实例。',
                    ex: `
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]                                     
                    `
                },
                {
                    name: '启用显示链模式',
                    grammar: '_.prototype.chain()',
                    explain: '创建一个lodash包装实例，启用显式链模式。   ',
                    argus: '',
                    ret: '(Object): 返回 lodash 的包装实例。',
                    ex: `
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];
 
// 不启用显式链
_(users).head();
// => { 'user': 'barney', 'age': 36 }
 
// 启用显式链
_(users)
  .chain()
  .head()
  .pick('user')
  .value();
// => { 'user': 'barney' }                                     
                    `
                },
                {
                    name: '执行链式队列',
                    grammar: '_.prototype.commit()',
                    explain: '执行链式队列并返回结果。',
                    argus: '',
                    ret: '(Object): 返回 lodash 的包装实例。',
                    ex: `
var array = [1, 2];
var wrapped = _(array).push(3);
 
console.log(array);
// => [1, 2]
 
wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]
 
wrapped.last();
// => 3
 
console.log(array);
// => [1, 2, 3]                               
                    `
                },
                {
                    name: '获取下一个值',
                    grammar: '_.prototype.next()',
                    explain: '获得包装对象的下一个值，遵循 iterator protocol。',
                    argus: '',
                    ret: '(Object): 返回下一个 iterator 值。',
                    ex: `
var wrapped = _([1, 2]);
 
wrapped.next();
// => { 'done': false, 'value': 1 }
 
wrapped.next();
// => { 'done': false, 'value': 2 }
 
wrapped.next();
// => { 'done': true, 'value': undefined }                               
                    `
                },
                {
                    name: '创建一个链式队列的拷贝',
                    grammar: '_.prototype.plant(value)',
                    explain: '创建一个链式队列的拷贝，传入的 value 作为链式队列的值。',
                    argus: 'value (*): 替换原值的值。',
                    ret: '(Object): 返回 lodash 的包装实例。',
                    ex: `
function square(n) {
  return n * n;
}
 
var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);
 
other.value();
// => [9, 16]
 
wrapped.value();
// => [1, 4]                               
                    `
                },
                {
                    name: '反转数组',
                    grammar: '_.prototype.reverse()',
                    explain: '这个方法是 _.reverse 的包装版本 。\n' +
                        '注意: 这种方法会改变包装数组。',
                    argus: '',
                    ret: '(Object): 返回新的 lodash 包装实例。',
                    ex: `
var array = [1, 2, 3];
 
_(array).reverse().value()
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]                               
                    `
                },
                {
                    name: '提取解链后的值',
                    grammar: '_.prototype.value()',
                    explain: '执行链式队列并提取解链后的值。',
                    argus: '',
                    ret: '(*): 返回解链后的值。',
                    ex: `
_([1, 2, 3]).value();
// => [1, 2, 3]                               
                    `
                }
            ]
        },
        {
            name: '字符串',
            child: [
                {
                    name: '转换为驼峰语法',
                    grammar: '_.camelCase([string=\'\'])',
                    explain: '转换字符串string为 驼峰写法。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回驼峰写法的字符串。',
                    ex: `
_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'                               
                    `
                },
                {
                    name: '首字母大写其余小写',
                    grammar: '_.capitalize([string=\'\'])',
                    explain: '转换字符串string首字母为大写，剩下为小写。',
                    argus: '[string=\'\'] (string): 要大写开头的字符串。',
                    ret: '(string): 返回大写开头的字符串。',
                    ex: `
_.capitalize('FRED');
// => 'Fred'                               
                    `
                },
                {
                    name: '是否以给定target字符开头',
                    grammar: '_.startsWith([string=\'\'], [target], [position=0])',
                    explain: '检查字符串string是否以 target 开头。',
                    argus: '[string=\'\'] (string): 要检索的字符串。\n' +
                        '[target] (string): 要检查的字符串。\n' +
                        '[position=0] (number): 检索的位置。',
                    ret: '(boolean): 如果string以 target，那么返回true，否则返回 false ',
                    ex: `
_.startsWith('abc', 'a');
// => true
 
_.startsWith('abc', 'b');
// => false
 
_.startsWith('abc', 'b', 1);
// => true                               
                    `
                },
                {
                    name: '是否以给定的target字符结尾',
                    grammar: '_.endsWith([string=\'\'], [target], [position=string.length])',
                    explain: '检查字符串string是否以给定的target字符串结尾。',
                    argus: '[string=\'\'] (string): 要检索的字符串。\n' +
                        '[target] (string): 要检索字符。\n' +
                        '[position=string.length] (number): 检索的位置。',
                    ret: '(boolean): 如果字符串string以target字符串结尾，那么返回 true，否则返回 false。',
                    ex: `
_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
_.endsWith('abc', 'b', 2);
// => true                               
                    `
                },
                {
                    name: '首字母小写',
                    grammar: '_.lowerFirst([string=\'\'])',
                    explain: '转换字符串string的首字母为小写。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.lowerFirst('Fred');
// => 'fred'
 
_.lowerFirst('FRED');
// => 'fRED'                               
                    `
                },
                {
                    name: '转换为小写',
                    grammar: '_.toLower([string=\'\'])',
                    explain: '转换整个string字符串的字符为小写，类似 String#toLowerCase。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回小写的字符串。',
                    ex: `
_.toLower('--Foo-Bar--');
// => '--foo-bar--'
 
_.toLower('fooBar');
// => 'foobar'
 
_.toLower('__FOO_BAR__');
// => '__foo_bar__'                               
                    `
                },
                {
                    name: '转换为大写',
                    grammar: '_.toUpper([string=\'\'])',
                    explain: '转换整个string字符串的字符为大写，类似 String#toUpperCase.',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回大写的字符串。',
                    ex: `
_.toUpper('--foo-bar--');
// => '--FOO-BAR--'
 
_.toUpper('fooBar');
// => 'FOOBAR'
 
_.toUpper('__foo_bar__');
// => '__FOO_BAR__'                               
                    `
                },
                {
                    name: '首字母大写',
                    grammar: '_.upperFirst([string=\'\'])',
                    explain: '转换字符串string的首字母为大写。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.upperFirst('fred');
// => 'Fred'
 
_.upperFirst('FRED');
// => 'FRED'                               
                    `
                },
                {
                    name: '首尾填充字符',
                    grammar: '_.pad([string=\'\'], [length=0], [chars=\' \'])',
                    explain: '如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。',
                    argus: '[string=\'\'] (string): 要填充的字符串。\n' +
                        '[length=0] (number): 填充的长度。\n' +
                        '[chars=\' \'] (string): 填充字符。',
                    ret: '(string): 返回填充后的字符串。',
                    ex: `
_.pad('abc', 8);
// => '  abc   '
 
_.pad('abc', 8, '_-');
// => '_-abc_-_'
 
_.pad('abc', 3);
// => 'abc'                               
                    `
                },
                {
                    name: '尾部填充字符',
                    grammar: '_.padEnd([string=\'\'], [length=0], [chars=\' \'])',
                    explain: '如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。',
                    argus: '[string=\'\'] (string): 要填充的字符串。\n' +
                        '[length=0] (number): 填充的长度。\n' +
                        '[chars=\' \'] (string): 填充字符。',
                    ret: '(string): 返回填充后的字符串。',
                    ex: `
_.padEnd('abc', 6);
// => 'abc   '
 
_.padEnd('abc', 6, '_-');
// => 'abc_-_'
 
_.padEnd('abc', 3);
// => 'abc'                               
                    `
                },
                {
                    name: '头部填充字符',
                    grammar: '_.padStart([string=\'\'], [length=0], [chars=\' \'])',
                    explain: '如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。',
                    argus: '[string=\'\'] (string): 要填充的字符串。\n' +
                        '[length=0] (number): 填充的长度。\n' +
                        '[chars=\' \'] (string): 填充字符。',
                    ret: '(string): 返回填充后的字符串。',
                    ex: `
_.padStart('abc', 6);
// => '   abc'
 
_.padStart('abc', 6, '_-');
// => '_-_abc'
 
_.padStart('abc', 3);
// => 'abc'                               
                    `
                },
                {
                    name: '转换为Int',
                    grammar: '_.parseInt(string, [radix=10])',
                    explain: '转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，则radix基数默认是10，如果string字符串是16进制，则radix基数为 16。',
                    argus: 'string (string): 要转换的字符串。\n' +
                        '[radix=10] (number):转换基数。',
                    ret: '(number): 返回转换后的整数。',
                    ex: `
_.parseInt('08');
// => 8
 
_.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]                               
                    `
                },
                {
                    name: '重复字符串',
                    grammar: '_.repeat([string=\'\'], [n=1])',
                    explain: '重复 N 次给定字符串。',
                    argus: '[string=\'\'] (string): 要重复的字符串。\n' +
                        '[n=1] (number): 重复的次数。',
                    ret: '(string): 返回重复的字符串。',
                    ex: `
_.repeat('*', 3);
// => '***'
 
_.repeat('abc', 2);
// => 'abcabc'
 
_.repeat('abc', 0);
// => ''                               
                    `
                },
                {
                    name: '替换',
                    grammar: '_.replace([string=\'\'], pattern, replacement)',
                    explain: '替换string字符串中匹配的pattern为给定的replacement 。',
                    argus: '[string=\'\'] (string): 待替换的字符串。\n' +
                        'pattern (RegExp|string): 要匹配的内容。\n' +
                        'replacement (Function|string): 替换的内容。',
                    ret: '(string): 返回替换后的字符串',
                    ex: `
_.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'                               
                    `
                },
                {
                    name: '分割',
                    grammar: '_.split([string=\'\'], separator, [limit])',
                    explain: '根据separator 拆分字符串string。',
                    argus: '[string=\'\'] (string): 要拆分的字符串。\n' +
                        'separator (RegExp|string): 拆分的分隔符。\n' +
                        '[limit] (number): 限制结果的数量。',
                    ret: '(Array): 返回拆分部分的字符串的数组。',
                    ex: `
_.split('a-b-c', '-', 2);
// => ['a', 'b']                               
                    `
                },
                {
                    name: '转换为下划线连接的字符（小写）',
                    grammar: '_.snakeCase([string=\'\'])',
                    explain: '转换字符串string为 snake case.',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
_.snakeCase('--FOO-BAR--');
// => 'foo_bar'                               
                    `
                },
                {
                    name: '转换为空格分隔的字符（首字母大写）',
                    grammar: '_.startCase([string=\'\'])',
                    explain: '转换 string 字符串为 start case.',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.startCase('--foo-bar--');
// => 'Foo Bar'
 
_.startCase('fooBar');
// => 'Foo Bar'
 
_.startCase('__FOO_BAR__');
// => 'FOO BAR'                               
                    `
                },
                {
                    name: '转换为空格分隔的字符（大写）',
                    grammar: '_.upperCase([string=\'\'])',
                    explain: '转换字符串string为 空格 分隔的大写单词。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回大写单词。',
                    ex: `
_.upperCase('--foo-bar');
// => 'FOO BAR'
 
_.upperCase('fooBar');
// => 'FOO BAR'
 
_.upperCase('__foo_bar__');
// => 'FOO BAR'                               
                    `
                },
                {
                    name: '转换为横杠连接的字符（小写）',
                    grammar: '_.kebabCase([string=\'\'])',
                    explain: '转换字符串string为 kebab case.',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'                               
                    `
                },
                {
                    name: '转换为空格分割的字符（小写）',
                    grammar: '_.lowerCase([string=\'\'])',
                    explain: '转换字符串string以空格分开单词，并转换为小写。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'                               
                    `
                },
                {
                    name: '移除空格或者给定字符',
                    grammar: '_.trim([string=\'\'], [chars=whitespace])',
                    explain: '从string字符串中移除前面和后面的 空格 或 指定的字符。',
                    argus: '[string=\'\'] (string): 要处理的字符串。\n' +
                        '[chars=whitespace] (string): 要移除的字符。',
                    ret: '(string): 返回处理后的字符串。',
                    ex: `
_.trim('  abc  ');
// => 'abc'
 
_.trim('-_-abc-_-', '_-');
// => 'abc'
 
_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']                               
                    `
                },
                {
                    name: '移除尾部的空格或者给定字符',
                    grammar: '_.trimEnd([string=\'\'], [chars=whitespace])',
                    explain: '从string字符串中移除后面的 空格 或 指定的字符。',
                    argus: '[string=\'\'] (string): 要处理的字符串。\n' +
                        '[chars=whitespace] (string): 要移除的字符。',
                    ret: '(string): 返回处理后的字符串。',
                    ex: `
_.trimEnd('  abc  ');
// => '  abc'
 
_.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'                               
                    `
                },
                {
                    name: '移除头部的空格或者给定字符',
                    grammar: '_.trimStart([string=\'\'], [chars=whitespace])',
                    explain: '从string字符串中移除前面的 空格 或 指定的字符。',
                    argus: '[string=\'\'] (string): 要处理的字符串。\n' +
                        '[chars=whitespace] (string): 要移除的字符。',
                    ret: '(string): 返回处理后的字符串。',
                    ex: `
_.trimStart('  abc  ');
// => 'abc  '
 
_.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'                               
                    `
                },
                {
                    name: '转义 RegExp 字符串中特殊的字符',
                    grammar: '_.escapeRegExp([string=\'\'])',
                    explain: '转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .',
                    argus: '[string=\'\'] (string): 要转义的字符串。',
                    ret: '(string): 返回转义后的字符串。',
                    ex: `
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\\[lodash\\]\\(https://lodash\\.com/\\)'                               
                    `
                },
                {
                    name: 'HTML标签转义',
                    grammar: '_.unescape([string=\'\'])',
                    explain: '_.escape的反向版。 这个方法转换string字符串中的 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符。',
                    argus: '[string=\'\'] (string): 要转换的字符串。',
                    ret: '(string): 返回转换后的字符串。',
                    ex: `
_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'                               
                    `
                },
                {
                    name: '转换为HTML实体字符',
                    grammar: '_.escape([string=\'\'])',
                    explain: '转义string中的 "&", "<", ">", \'"\', "\'", 和 "`" 字符为HTML实体字符。\n' +
                        '注意: 不会转义其他字符。如果需要，可以使用第三方库，例如 he。',
                    argus: '[string=\'\'] (string): 要转义的字符串。',
                    ret: '(string): 返回转义后的字符串。',
                    ex: `
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'                               
                    `
                },
                {
                    name: '拆分字符串为数组',
                    grammar: '_.words([string=\'\'], [pattern])',
                    explain: '拆分字符串string中的词为数组 。',
                    argus: '[string=\'\'] (string): 要拆分的字符串。\n' +
                        '[pattern] (RegExp|string): 匹配模式。',
                    ret: '(Array): 返回拆分string后的数组。',
                    ex: `
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']                               
                    `
                }
            ]
        },
        {
            name: '实用程序',
            child: [
                {
                    name: '尝试调用函数',
                    grammar: '_.attempt(func, [args])',
                    explain: '尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。',
                    argus: 'func (Function): 要尝试调用的函数。\n' +
                        '[args] (...*): 调用func时，传递的参数。',
                    ret: '(*): 返回func结果或者错误对象。',
                    ex: `
// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
 
if (_.isError(elements)) {
  elements = [];
}                               
                    `
                },
                {
                    name: '绑定一个对象的方法到自身',
                    grammar: '_.bindAll(object, methodNames)',
                    explain: '绑定一个对象的方法到对象本身，覆盖现有的方法。\n' +
                        '注意: 这个方法不会设置绑定函数的 "length" 属性。',
                    argus: 'object (Object): 用来绑定和分配绑定方法的对象。\n' +
                        'methodNames (...(string|string[])): 对象绑定方法的名称。',
                    ret: '(Object): 返回 object.',
                    ex: `
var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};
 
_.bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.                               
                    `
                },
                {
                    name: '迭代断言函数对并返回第一个真值对应的函数',
                    grammar: '_.cond(pairs)',
                    explain: '创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。',
                    argus: 'pairs (Array): 断言函数对。',
                    ret: '(Function): 返回新的复合函数。',
                    ex: `
var func = _.cond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.stubTrue,                      _.constant('no match')]
]);
 
func({ 'a': 1, 'b': 2 });
// => 'matches A'
 
func({ 'a': 0, 'b': 1 });
// => 'matches B'
 
func({ 'a': '1', 'b': '2' });
// => 'no match'                               
                    `
                },
                {
                    name: '断言',
                    grammar: '_.conforms(source)',
                    explain: '创建一个函数。 这个函数会 调用 source 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 true ，否则返回 false 。',
                    argus: 'source (Object): 包含断言属性值的对象。',
                    ret: '(Function): 返回新的函数',
                    ex: `
var objects = [
  { 'a': 2, 'b': 1 },
  { 'a': 1, 'b': 2 }
];
 
_.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
// => [{ 'a': 1, 'b': 2 }]                               
                    `
                },
                {
                    name: '创建一个返回value的函数',
                    grammar: '_.constant(value)',
                    explain: '创建一个返回 value 的函数。',
                    argus: 'value (*): 要新函数返回的值。',
                    ret: '(Function): 返回新的常量函数。',
                    ex: `
var objects = _.times(2, _.constant({ 'a': 1 }));
 
console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]
 
console.log(objects[0] === objects[1]);
// => true                               
                    `
                },
                {
                    name: '检查value',
                    grammar: '_.defaultTo(value, defaultValue)',
                    explain: '检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回defaultValue默认值。',
                    argus: 'value (*): 要检查的值。\n' +
                        'defaultValue (*): 默认值。',
                    ret: '(*): 返回 resolved 值。',
                    ex: `
_.defaultTo(1, 10);
// => 1
 
_.defaultTo(undefined, 10);
// => 10                               
                    `
                },
                {
                    name: '函数传递',
                    grammar: '_.flow([funcs])',
                    explain: '创建一个函数。 返回的结果是调用提供函数的结果，this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。',
                    argus: '[funcs] (...(Function|Function[])): 要调用的函数。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
function square(n) {
  return n * n;
}
 
var addSquare = _.flow([_.add, square]);
addSquare(1, 2);
// => 9                               
                    `
                },
                {
                    name: '函数传递（从右向左）',
                    grammar: '_.flowRight([funcs])',
                    explain: '这个方法类似 _.flow，除了它调用函数的顺序是从右往左的。',
                    argus: '[funcs] (...(Function|Function[])): 要调用的函数。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
function square(n) {
  return n * n;
}
 
var addSquare = _.flowRight([square, _.add]);
addSquare(1, 2);
// => 9                               
                    `
                },
                {
                    name: '两个对象深比较',
                    grammar: '_.matches(source)',
                    explain: '创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。',
                    argus: 'source (Object): 要匹配属性值的源对象。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];
 
_.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]                               
                    `
                },
                {
                    name: '调用给定对象path上的函数',
                    grammar: '_.method(path, [args])',
                    explain: '创建一个调用给定对象 path 上的函数。 任何附加的参数都会传入这个调用函数中。',
                    argus: 'path (Array|string): 调用函数所在对象的路径。\n' +
                        '[args] (...*): 传递给调用函数的参数。',
                    ret: '(Function): 返回新的调用函数。',
                    ex: `
var objects = [
  { 'a': { 'b': _.constant(2) } },
  { 'a': { 'b': _.constant(1) } }
];
 
_.map(objects, _.method('a.b'));
// => [2, 1]
 
_.map(objects, _.method(['a', 'b']));
// => [2, 1]                               
                    `
                },
                {
                    name: '释放_变量',
                    grammar: '_.noConflict()',
                    explain: '释放 _ 变量为原来的值，并返回一个 lodash 的引用。',
                    argus: '',
                    ret: '(Function): 返回 lodash 函数。',
                    ex: `
var lodash = _.noConflict();                               
                    `
                },
                {
                    name: '返回undefined',
                    grammar: '_.noop()',
                    explain: '这个方法返回 undefined。',
                    argus: '',
                    ret: 'undefined',
                    ex: `
_.times(2, _.noop);
// => [undefined, undefined]                               
                    `
                },
                {
                    name: '创建一个返回参数的函数',
                    grammar: '_.nthArg([n=0])',
                    explain: '创建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数。',
                    argus: '[n=0] (number): 要返回参数的索引值。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var func = _.nthArg(1);
func('a', 'b', 'c', 'd');
// => 'b'
 
var func = _.nthArg(-2);
func('a', 'b', 'c', 'd');
// => 'c'                               
                    `
                },
                {
                    name: '创建一个执行迭代器的函数',
                    grammar: '_.over([iteratees=[_.identity]])',
                    explain: '创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果。',
                    argus: '[iteratees=[_.identity]] (...(Function|Function[])): 要调用的 iteratees。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var func = _.over([Math.max, Math.min]);
 
func(1, 2, 3, 4);
// => [4, 1]                               
                    `
                },
                {
                    name: '创建一个执行迭代器并全部为真值的函数',
                    grammar: '_.overEvery([predicates=[_.identity]])',
                    explain: '建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。',
                    argus: '[predicates=[_.identity]] (...(Function|Function[])): 要调用的 predicates。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var func = _.overEvery([Boolean, isFinite]);
 
func('1');
// => true
 
func(null);
// => false
 
func(NaN);
// => false                               
                    `
                },
                {
                    name: '创建一个执行迭代器并存在真值的函数',
                    grammar: '_.overSome([predicates=[_.identity]])',
                    explain: '创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。',
                    argus: '[predicates=[_.identity]] (...(Function|Function[])): 要调用的 predicates。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var func = _.overSome([Boolean, isFinite]);
 
func('1');
// => true
 
func(null);
// => true
 
func(NaN);
// => false                               
                    `
                },
                {
                    name: '创建一个返回给定对象的 path 的值的函数',
                    grammar: '_.property(path)',
                    explain: '创建一个返回给定对象的 path 的值的函数。',
                    argus: 'path (Array|string): 要得到值的属性路径。',
                    ret: '(Function): 返回新的函数。',
                    ex: `
var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];
 
_.map(objects, _.property('a.b'));
// => [2, 1]
 
_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
// => [1, 2]                               
                    `
                },
                {
                    name: '范围区间',
                    grammar: '_.range([start=0], end, [step=1])',
                    explain: '创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step。',
                    argus: '[start=0] (number): 开始的范围。\n' +
                        'end (number): 结束的范围。\n' +
                        '[step=1] (number): 范围的增量 或者 减量。',
                    ret: '(Array): 返回范围内数字组成的新数组。',
                    ex: `
_.range(4);
// => [0, 1, 2, 3]
 
_.range(-4);
// => [0, -1, -2, -3]
 
_.range(1, 5);
// => [1, 2, 3, 4]
 
_.range(0, 20, 5);
// => [0, 5, 10, 15]
 
_.range(0, -4, -1);
// => [0, -1, -2, -3]
 
_.range(1, 4, 0);
// => [1, 1, 1]
 
_.range(0);
// => []                               
                    `
                },
                {
                    name: '范围区间（降序）',
                    grammar: '_.rangeRight([start=0], end, [step=1])',
                    explain: '这个方法类似 _.range ， 除了它是降序生成值的。',
                    argus: '[start=0] (number): 开始的范围。\n' +
                        'end (number): 结束的范围。\n' +
                        '[step=1] (number):范围的增量 或者 减量。',
                    ret: '(Array): 返回范围内数字组成的新数组。',
                    ex: `
_.rangeRight(4);
// => [3, 2, 1, 0]
 
_.rangeRight(-4);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 5);
// => [4, 3, 2, 1]
 
_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
 
_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 4, 0);
// => [1, 1, 1]
 
_.rangeRight(0);
// => []                               
                    `
                },
                {
                    name: '返回空数组',
                    grammar: '_.stubArray()',
                    explain: '这个方法返回一个新的空数组。',
                    argus: '',
                    ret: '(Array): 返回新的空数组。',
                    ex: `
var arrays = _.times(2, _.stubArray);
 
console.log(arrays);
// => [[], []]
 
console.log(arrays[0] === arrays[1]);
// => false                               
                    `
                },
                {
                    name: '返回false',
                    grammar: '_.stubFalse()',
                    explain: '这个方法返回 false.',
                    argus: '',
                    ret: '(boolean): 返回 false.',
                    ex: `
_.times(2, _.stubFalse);
// => [false, false]                               
                    `
                },
                {
                    name: '返回空对象',
                    grammar: '_.stubObject()',
                    explain: '这个方法返回一个空对象.',
                    argus: '',
                    ret: '(Object): 返回新的空对象。',
                    ex: `
var objects = _.times(2, _.stubObject);
 
console.log(objects);
// => [{}, {}]
 
console.log(objects[0] === objects[1]);
// => false                               
                    `
                },
                {
                    name: '返回空字符串',
                    grammar: '_.stubString()',
                    explain: '这个方法返回一个空字符串。',
                    argus: '',
                    ret: '(string): 返回新的空字符串',
                    ex: `
_.times(2, _.stubString);
// => ['', '']                               
                    `
                },
                {
                    name: '返回true',
                    grammar: '_.stubTrue()',
                    explain: '这个方法返回 true。',
                    argus: '',
                    ret: '(boolean): 返回 true。',
                    ex: `
_.times(2, _.stubTrue);
// => [true, true]                               
                    `
                },
                {
                    name: '重复调用',
                    grammar: '_.times(n, [iteratee=_.identity])',
                    explain: '调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。',
                    argus: 'n (number): 调用 iteratee 的次数。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
                    ret: '(Array): 返回调用结果的数组。',
                    ex: `
_.times(3, String);
// => ['0', '1', '2']
 
 _.times(4, _.constant(0));
// => [0, 0, 0, 0]                               
                    `
                },
                {
                    name: '转化为属性路径的数组',
                    grammar: '_.toPath(value)',
                    explain: '转化 value 为属性路径的数组 。',
                    argus: 'value (*): 要转换的值',
                    ret: '(Array): 返回包含属性路径的数组。',
                    ex: `
_.toPath('a.b.c');
// => ['a', 'b', 'c']
 
_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']                               
                    `
                },
                {
                    name: '生成唯一ID',
                    grammar: '_.uniqueId([prefix=\'\'])',
                    explain: '生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。',
                    argus: '[prefix=\'\'] (string): 要添加到ID前缀的值。',
                    ret: '(string): 返回唯一ID。',
                    ex: `
_.uniqueId('contact_');
// => 'contact_104'
 
_.uniqueId();
// => '105'                               
                    `
                }
            ]
        }
    ]
}