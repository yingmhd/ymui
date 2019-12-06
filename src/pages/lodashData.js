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
                    grammar:'_.concat(array, [values])',
                    explain: '创建一个新数组，将array与任何数组 或 值连接在一起。',
                    argus: 'array (Array): 被连接的数组。\n' +
                        '[values] (...*): 连接的值。',
                    ret: '(Array): 返回连接后的新数组。',
                    ex:`
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
                    grammar:'_.difference(array, [values])',
                    explain: '创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
                    `
                },
                {
                    name: '通过迭代器排除给定值',
                    grammar:'_.differenceBy(array, [values], [iteratee=_.identity])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。\n',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The \`_.property\` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数排除给定值',
                    grammar:'_.differenceWith(array, [values], [comparator])',
                    explain: '这个方法类似 _.difference ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...Array): 排除的值。\n' +
                        '[comparator] (Function): comparator 调用每个元素。',
                    ret: '(Array): 返回一个过滤值后的新数组。',
                    ex:`
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
                    `
                },
                {
                    name: '删除前N个元素',
                    grammar:'_.drop(array, [n=1])',
                    explain: '创建一个切片数组，去除array前面的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex:`
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
                    grammar:'_.dropRight(array, [n=1])',
                    explain: '创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=1] (number): 要去除的元素个数。',
                    ret: '(Array): 返回array剩余切片。',
                    ex:`
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
                    grammar:'_.fill(array, value, [start=0], [end=array.length])',
                    explain: '使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。',
                    argus: 'array (Array): 要填充改变的数组。\n' +
                        'value (*): 填充给 array 的值。\n' +
                        '[start=0] (number): 开始位置（默认0）。\n' +
                        '[end=array.length] (number):结束位置（默认array.length）。',
                    ret: '(Array): 返回 array。',
                    ex:`
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
                    grammar:'_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
                    explain: '该方法类似 _.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。\n' +
                        '[fromIndex=0] (number): The index to search from.',
                    ret: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
                    ex:`
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
                    grammar:'_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
                    explain: '这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。\n' +
                        '[fromIndex=array.length-1] (number): The index to search from.',
                    ret: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
                    ex:`
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
                    grammar:'_.head(array)',
                    explain: '获取数组 array 的第一个元素。',
                    argus: 'array (Array): 要查询的数组。',
                    ret: '(*): 返回数组 array的第一个元素。',
                    ex:`
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
                    `
                },
                {
                    name: '查询值在数组中的索引',
                    grammar:'_.indexOf(array, value, [fromIndex=0])',
                    explain: '使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。',
                    argus: 'array (Array): 需要查找的数组。\n' +
                        'value (*): 需要查找的值。\n' +
                        '[fromIndex=0] (number): 开始查询的位置。',
                    ret: '(number): 返回 值value在数组中的索引位置, 没有找到为返回-1。',
                    ex:`
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the \`fromIndex\`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
                    `
                },
                {
                    name: '去除最后一个元素',
                    grammar:'_.initial(array)',
                    explain: '获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。',
                    argus: 'array (Array): 要查询的数组。',
                    ret: '(Array): 返回截取后的数组array。',
                    ex:`
_.initial([1, 2, 3]);
// => [1, 2]
                    `
                },
                {
                    name: '提取给定数组的交集',
                    grammar:'_.intersection([arrays])',
                    explain: '创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）',
                    argus: '[arrays] (...Array): 待检查的数组。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex:`
_.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
                    `
                },
                {
                    name: '通过迭代器提取给定数组的交集',
                    grammar:'_.intersectionBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。',
                    argus: '[arrays] (...Array): 待检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex:`
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The \`_.property\` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
                    `
                },
                {
                    name: '通过比较函数提取给定数组的交集',
                    grammar:'_.intersectionWith([arrays], [comparator])',
                    explain: '这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)',
                    argus: '[arrays] (...Array): 待检查的数组。\n' +
                        '[comparator] (Function): comparator（比较器）调用每个元素。',
                    ret: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
                    ex:`
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
                    `
                },
                {
                    name: '转换为字符串',
                    grammar:'_.join(array, [separator=\',\'])',
                    explain: '将 array 中的所有元素转换为由 separator 分隔的字符串。',
                    argus: 'array (Array): 要转换的数组。\n' +
                        '[separator=\',\'] (string): 分隔元素。',
                    ret: '(string): 返回连接字符串。',
                    ex:`
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
                    `
                },
                {
                    name: '获取最后一个元素',
                    grammar:'_.last(array)',
                    explain: '获取array中的最后一个元素。',
                    argus: 'array (Array): 要检索的数组。',
                    ret: '(*): 返回array中的最后一个元素',
                    ex:`
_.last([1, 2, 3]);
// => 3
                    `
                },
                {
                    name: '查询值在数组中的倒序索引',
                    grammar:'_.lastIndexOf(array, value, [fromIndex=array.length-1])',
                    explain: '这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        'value (*): 要搜索的值。\n' +
                        '[fromIndex=array.length-1] (number): 开始搜索的索引值。',
                    ret: '(number): 返回匹配值的索引值，否则返回 -1。',
                    ex:`
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the \`fromIndex\`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
                    `
                },
                {
                    name: '获取第N个元素',
                    grammar:'_.nth(array, [n=0])',
                    explain: '获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。',
                    argus: 'array (Array): 要查询的数组。\n' +
                        '[n=0] (number): 要返回元素的索引值。',
                    ret: '(*): 获取array数组的第n个元素。',
                    ex:`
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c'; 
                    `
                },
                {
                    name: '移除与给定值（值）相等的元素',
                    grammar:'_.pull(array, [values])',
                    explain: '移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[values] (...*): 要删除的值',
                    ret: '(Array): 返回 array.',
                    ex:`
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
                    `
                },
                {
                    name: '移除与给定值（数组）相等的元素',
                    grammar:'_.pullAll(array, values)',
                    explain: '这个方法类似 _.pull，区别是这个方法接收一个要移除值的数组。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。',
                    ret: '(Array): 返回 array。',
                    ex:`
var array = [1, 2, 3, 1, 2, 3];
 
_.pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]
                    `
                },
                {
                    name: '通过迭代器移除与给定值（数组）相等的元素',
                    grammar:'_.pullAllBy(array, values, [iteratee=_.identity])',
                    explain: '这个方法类似于 _.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。',
                    ret: '(Array): 返回 array.',
                    ex:`
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数移除与给定值（数组）相等的元素',
                    grammar:'_.pullAllWith(array, values, [comparator])',
                    explain: '这个方法类似于 _.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        'values (Array): 要移除值的数组。\n' +
                        '[comparator] (Function): comparator（比较器）调用每个元素。',
                    ret: '(Array): 返回 array。',
                    ex:`
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
                    `
                },
                {
                    name: '移除给定索引元素',
                    grammar:'_.pullAt(array, [indexes])',
                    explain: '根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[indexes] (...(number|number[])): 要移除元素的索引。',
                    ret: '(Array): 返回移除元素组成的新数组。',
                    ex:`
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
                    grammar:'_.remove(array, [predicate=_.identity])',
                    explain: '移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。',
                    argus: 'array (Array): 要修改的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回移除元素组成的新数组。',
                    ex:`
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
                    grammar:'_.reverse(array)',
                    explain: '反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。',
                    argus: 'array (Array): 要修改的数组。',
                    ret: '(Array): 返回 array.',
                    ex:`
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
                    `
                },
                {
                    name: '裁剪',
                    grammar:'_.slice(array, [start=0], [end=array.length])',
                    explain: '裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。',
                    argus: 'array (Array): 要裁剪数组。\n' +
                        '[start=0] (number): 开始位置。\n' +
                        '[end=array.length] (number): 结束位置。',
                    ret: '(Array): 返回 数组array 裁剪部分的新数组。',
                    ex:`
_.slice([1, 2, 3], 0, 2);
// [1, 2]
                    `
                },
                {
                    name: '通过二进制检索获取插入元素的索引',
                    grammar:'_.sortedIndex(array, value)',
                    explain: '使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex:`
_.sortedIndex([30, 50], 40);
// => 1
                    `
                },
                {
                    name: '通过迭代器获取插入元素的索引',
                    grammar:'_.sortedIndexBy(array, value, [iteratee=_.identity])',
                    explain: '这个方法类似 _.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex:`
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
                    grammar:'_.sortedIndexOf(array, value)',
                    explain: '这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索。',
                    argus: 'array (Array): 要搜索的数组。\n' +
                        'value (*): 搜索的值。',
                    ret: '(number): 返回匹配值的索引位置，否则返回 -1。',
                    ex:`
_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
                    `
                },
                {
                    name: '通过二进制检索查询值在数组的最大索引',
                    grammar:'_.sortedLastIndex(array, value)',
                    explain: '此方法类似于 _.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。',
                    argus: 'array (Array): 要检查的排序数组。\n' +
                        'value (*): 要评估的值。',
                    ret: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
                    ex:`
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
                    `
                },
                {
                    name: '去重（优化）',
                    grammar:'_.sortedUniq(array)',
                    explain: '这个方法类似 _.uniq，除了它会优化排序数组。',
                    argus: 'array (Array): 要检查的数组。',
                    ret: '(Array): 返回一个新的不重复的数组。',
                    ex:`
_.sortedUniq([1, 1, 2]);
// => [1, 2]
                    `
                },
                {
                    name: '通过迭代器去重',
                    grammar:'_.sortedUniqBy(array, [iteratee])',
                    explain: '这个方法类似 _.uniqBy，除了它会优化排序数组。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[iteratee] (Function): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回一个新的不重复的数组。',
                    ex:`
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
                    `
                },
                {
                    name: '获取除第一个元素以外的全部元素',
                    grammar:'_.tail(array)',
                    explain: '获取除了array数组第一个元素以外的全部元素。',
                    argus: 'array (Array): 要检索的数组。',
                    ret: '(Array): 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。',
                    ex:`
_.tail([1, 2, 3]);
// => [2, 3]
                    `
                },
                {
                    name: '获取前N个元素',
                    grammar:'_.take(array, [n=1])',
                    explain: '创建一个数组切片，从array数组的起始元素开始提取n个元素。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[n=1] (number): 要提取的元素个数。',
                    ret: '(Array): 返回 array 数组的切片（从起始元素开始n个元素）。',
                    ex:`
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
                    grammar:'_.takeRight(array, [n=1])',
                    explain: '创建一个数组切片，从array数组的最后一个元素开始提取n个元素。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[n=1] (number): 要提取的元素个数。',
                    ret: '(Array): 返回 array 数组的切片（从结尾元素开始n个元素）。',
                    ex:`
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
                    grammar:'_.takeWhile(array, [predicate=_.identity])',
                    explain: '从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
                    argus: 'array (Array): 需要处理的数组\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回 array 数组的切片。',
                    ex:`
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
                    grammar:'_.takeRightWhile(array, [predicate=_.identity])',
                    explain: '从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
                    argus: 'array (Array): 要检索的数组。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回 array 数组的切片。',
                    ex:`
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
                    grammar:'_.union([arrays])',
                    explain: '创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（ arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）',
                    argus: '[arrays] (...Array): 要检查的数组。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex:`
_.union([2], [1, 2]);
// => [2, 1]
                    `
                },
                {
                    name: '通过迭代器联合数组生成不重复数组',
                    grammar:'_.unionBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex:`
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The \`_.property\` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数联合数组生成不重复数组',
                    grammar:'_.unionWith([arrays], [comparator])',
                    explain: '这个方法类似 _.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[comparator] (Function): 比较函数，调用每个元素。',
                    ret: '(Array): 返回一个新的联合数组。',
                    ex:`
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
                    `
                },
                {
                    name: '去重',
                    grammar:'_.uniq(array)',
                    explain: '创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。',
                    argus: 'array (Array): 要检查的数组。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex:`
_.uniq([2, 1, 2]);
// => [2, 1]
                    `
                },
                {
                    name: '通过迭代器去重',
                    grammar:'_.uniqBy(array, [iteratee=_.identity])',
                    explain: '这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex:`
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The \`_.property\` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数去重',
                    grammar:'_.uniqWith(array, [comparator])',
                    explain: '这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[comparator] (Function): 比较函数，调用每个元素。',
                    ret: '(Array): 返回新的去重后的数组。',
                    ex:`
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
                    `
                },
                {
                    name: '元素（值）分组',
                    grammar:'_.zip([arrays])',
                    explain: '创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。',
                    argus: '[arrays] (...Array): 要处理的数组。',
                    ret: '(Array): 返回分组元素的新数组。',
                    ex:`
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
                    `
                },
                {
                    name: '元素（键值对）分组',
                    grammar:'_.zipObject([props=[]], [values=[]])',
                    explain: '这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。',
                    argus: '[props=[]] (Array): The property identifiers.\n' +
                        '[values=[]] (Array): The property values.',
                    ret: '(Object): Returns the new object.',
                    ex:`
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
                    `
                },
                {
                    name: '元素（键值对——属性路径）分组',
                    grammar:'_.zipObjectDeep([props=[]], [values=[]])',
                    explain: '这个方法类似 _.zipObject，除了它支持属性路径。',
                    argus: '[props=[]] (Array): 属性标识符（属性名）。\n' +
                        '[values=[]] (Array): 属性值。',
                    ret: '(Object): 返回新对象。',
                    ex:`
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
                    `
                },
                {
                    name: '通过迭代器实现元素分组',
                    grammar:'_.zipWith([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似于 _.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).',
                    argus: '[arrays] (...Array): 要处理的数组。\n' +
                        '[iteratee=_.identity] (Function): 函数用来组合分组的值。',
                    ret: '(Array): 返回分组元素的新数组。',
                    ex:`
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
                    `
                },
                {
                    name: '恢复元素分组',
                    grammar:'_.unzip(array)',
                    explain: '这个方法类似于 _.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）',
                    argus: 'array (Array): 要处理的分组元素数组。',
                    ret: '(Array): 返回重组元素的新数组。',
                    ex:`
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
 
_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
                    `
                },
                {
                    name: '通过函数实现元素重组',
                    grammar:'_.unzipWith(array, [iteratee=_.identity])',
                    explain: '此方法类似于 _.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。',
                    argus: 'array (Array): 要处理的分组元素数组。\n' +
                        '[iteratee=_.identity] (Function): 这个函数用来组合重组的值。',
                    ret: '(Array): 返回重组元素的新数组。',
                    ex:`
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
                    `
                },
                {
                    name: '移除与给定值（值）相等的元素并返回新数组',
                    grammar:'_.without(array, [values])',
                    explain: '创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。',
                    argus: 'array (Array): 要检查的数组。\n' +
                        '[values] (...*): 要剔除的值',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex:`
_.without([2, 1, 2, 3], 1, 2);
// => [3]
                    `
                },
                {
                    name: '联合数组去交集',
                    grammar:'_.xor([arrays])',
                    explain: '创建一个给定数组唯一值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。',
                    argus: '[arrays] (...Array): 要检查的数组。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex:`
_.xor([2, 1], [2, 3]);
// => [1, 3]
                    `
                },
                {
                    name: '通过迭代器联合数组去交集',
                    grammar:'_.xorBy([arrays], [iteratee=_.identity])',
                    explain: '这个方法类似 _.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 调用每一个元素的迭代函数。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex:`
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The \`_.property\` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
                    `
                },
                {
                    name: '通过比较函数联合数组去交集',
                    grammar:'_.xorWith([arrays], [comparator])',
                    explain: '该方法是像 _.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).',
                    argus: '[arrays] (...Array): 要检查的数组。\n' +
                        '[comparator] (Function): 调用每一个元素的比较函数。',
                    ret: '(Array): 返回过滤值后的新数组。',
                    ex:`
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
                    grammar:'_.countBy(collection, [iteratee=_.identity])',
                    explain: '创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（迭代次数）。 iteratee 调用一个参数：(value)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 一个迭代函数，用来转换key（键）。',
                    ret: '(Object): 返回一个组成集合对象。',
                    ex:`
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The \`_.property\` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
                    `
                },
                {
                    name: '遍历',
                    grammar:'_.forEach(collection, [iteratee=_.identity])',
                    explain: '调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
                    ret: '(*): 返回集合 collection。',
                    ex:`
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
                    grammar:'_.forEachRight(collection, [iteratee=_.identity])',
                    explain: '这个方法类似 _.forEach，不同之处在于， _.forEachRight 是从右到左遍历集合中每一个元素的。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
                    ret: '(*): 返回集合 collection。',
                    ex:`
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs \`2\` then \`1\`.
                    `
                },
                {
                    name: '检查',
                    grammar:'_.every(collection, [predicate=_.identity])',
                    explain: '通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(boolean): 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false 。',
                    ex:`
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
                    grammar:'_.filter(collection, [predicate=_.identity])',
                    explain: '遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回一个新的过滤后的数组。',
                    ex:`
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
                    grammar:'_.find(collection, [predicate=_.identity], [fromIndex=0])',
                    explain: '遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[fromIndex=0] (number): 开始搜索的索引位置。',
                    ret: '(*): 返回匹配元素，否则返回 undefined。',
                    ex:`
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
                    grammar:'_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])',
                    explain: '这个方法类似 _.find ，不同之处在于， _.findLast是从右至左遍历collection （集合）元素的。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[fromIndex=collection.length-1] (number): 开始搜索的索引位置。',
                    ret: '(*): 返回匹配元素，否则返回 undefined。',
                    ex:`
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组',
                    grammar:'_.flatMap(collection, [iteratee=_.identity])',
                    explain: '创建一个扁平化（同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。',
                    argus: 'collection (Array|Object): 一个用来迭代遍历的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex:`
function duplicate(n) {
  return [n, n];
}
 
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]                    
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组（递归映射）',
                    grammar:'_.flatMapDeep(collection, [iteratee=_.identity])',
                    explain: '这个方法类似 _.flatMap 不同之处在于， _.flatMapDeep 会继续扁平化递归映射的结果。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex:`
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]                    
                    `
                },
                {
                    name: '通过迭代器创建扁平化数组（指定深度递归映射）',
                    grammar:'_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])',
                    explain: '该方法类似 _.flatMap，不同之处在于， _.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。\n' +
                        '[depth=1] (number): 最大递归深度。',
                    ret: '(Array): 返回新扁平化数组。',
                    ex:`
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
                    `
                },
                {
                    name: '通过迭代器分组',
                    grammar:'_.groupBy(collection, [iteratee=_.identity])',
                    explain: '创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。',
                    argus: 'collection (Array|Object): 一个用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。',
                    ret: '(Object): 返回一个组成聚合的对象。',
                    ex:`
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The \`_.property\` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }                    
                    `
                },
                {
                    name: '检查是否包含',
                    grammar:'_.includes(collection, value, [fromIndex=0])',
                    explain: '检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。',
                    argus: 'collection (Array|Object|string): 要检索的集合。\n' +
                        'value (*): 要检索的值。\n' +
                        '[fromIndex=0] (number): 要检索的 索引位置。',
                    ret: '(boolean): 如果找到 value 返回 true， 否则返回 false。',
                    ex:`
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
                    grammar:'_.invokeMap(collection, path, [args])',
                    explain: '调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。如果methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        'path (Array|Function|string): 用来调用方法的路径 或 者每次迭代调用的函数。\n' +
                        '[args] (...*): 调用每个方法的参数。',
                    ret: '(Array): 返回的结果数组。',
                    ex:`
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
 
_.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]                    
                    `
                },
                {
                    name: '遍历生成键值对',
                    grammar:'_.keyBy(collection, [iteratee=_.identity])',
                    explain: '创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。',
                    ret: '(Object): 返回一个组成聚合的对象。',
                    ex:`
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
                    grammar:'_.map(collection, [iteratee=_.identity])',
                    explain: '创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：\n' +
                        '(value, index|key, collection).\n' +
                        '\n' +
                        'lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some。\n' +
                        '\n' +
                        '受保护的方法有（即这些方法不能使用 _.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some作为 iteratee 迭代函数参数） ：\n' +
                        'ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回新的映射后数组。',
                    ex:`
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
                    grammar:'_.orderBy(collection, [iteratees=[_.identity]], [orders])',
                    explain: '此方法类似于 _.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。\n' +
                        '[orders] (string[]): iteratees迭代函数的排序顺序。',
                    ret: '(Array): 排序排序后的新数组。',
                    ex:`
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
                    grammar:'_.partition(collection, [predicate=_.identity])',
                    explain: '创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回元素分组后的数组。',
                    ex:`
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
                    grammar:'_.reduce(collection, [iteratee=_.identity], [accumulator])',
                    explain: '压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：\n' +
                        '(accumulator, value, index|key, collection).\n' +
                        '\n' +
                        'lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.reduce, _.reduceRight, 和 _.transform。\n' +
                        '\n' +
                        '受保护的方法有（即这些方法不能使用 _.reduce, _.reduceRight, 和 _.transform作为 iteratee 迭代函数参数）：\n' +
                        '\n' +
                        'assign, defaults, defaultsDeep, includes, merge, orderBy, 和 sortBy',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。\n' +
                        '[accumulator] (*): 初始值。',
                    ret: '(*): 返回累加后的值。',
                    ex:`
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
                    grammar:'_.reduceRight(collection, [iteratee=_.identity], [accumulator])',
                    explain: '这个方法类似 _.reduce ，除了它是从右到左遍历collection（集合）中的元素的。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratee=_.identity] (Function): 每次迭代调用的函数。\n' +
                        '[accumulator] (*): 初始值。',
                    ret: '(*): 返回累加后的值。',
                    ex:`
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]                    
                    `
                },
                {
                    name: '反过滤',
                    grammar:'_.reject(collection, [predicate=_.identity])',
                    explain: '_.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（注：非真）。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(Array): 返回过滤后的新数组',
                    ex:`
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
                    grammar:'_.sample(collection)',
                    explain: '从collection（集合）中获得一个随机元素。',
                    argus: 'collection (Array|Object): 要取样的集合。',
                    ret: '(*): 返回随机元素。',
                    ex:`
_.sample([1, 2, 3, 4]);
// => 2                    
                    `
                },
                {
                    name: '随机取样（多个）',
                    grammar:'_.sampleSize(collection, [n=1])',
                    explain: '从collection（集合）中获得 n 个随机元素。',
                    argus: 'collection (Array|Object): 要取样的集合。\n' +
                        '[n=1] (number): 取样的元素个数。',
                    ret: '(Array): 返回随机元素。',
                    ex:`
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]                    
                    `
                },
                {
                    name: '随机排序',
                    grammar:'_.shuffle(collection)',
                    explain: '创建一个被打乱值的集合。',
                    argus: 'collection (Array|Object): 要打乱的集合。',
                    ret: '(Array): 返回打乱的新数组。',
                    ex:`
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]                    
                    `
                },
                {
                    name: '获取长度',
                    grammar:'_.size(collection)',
                    explain: '返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。',
                    argus: 'collection (Array|Object): 要检查的集合',
                    ret: '(number): 返回集合的长度。',
                    ex:`
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
                    grammar:'_.some(collection, [predicate=_.identity])',
                    explain: '通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
                    ret: '(boolean): 如果任意元素经 predicate 检查都为 truthy（真值），返回 true ，否则返回 false 。',
                    ex:`
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
                    grammar:'_.sortBy(collection, [iteratees=[_.identity]])',
                    explain: '创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。',
                    argus: 'collection (Array|Object): 用来迭代的集合。\n' +
                        '[iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 这个函数决定排序。',
                    ret: '(Array): 返回排序后的数组。',
                    ex:`
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
                    grammar:'_.now()',
                    explain: '获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。',
                    argus: '',
                    ret: '(number): 返回时间戳。',
                    ex:`
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
                    grammar:'_.after(n, func)',
                    explain: '_.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。',
                    argus: 'n (number): func 方法应该在调用多少次后才执行。\n' +
                        'func (Function): 用来限定的函数。',
                    ret: '(Function): 返回新的限定函数。',
                    ex:`
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
                    grammar:'_.ary(func, [n=func.length])',
                    explain: '创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。',
                    argus: 'func (Function): 需要被限制参数个数的函数。\n' +
                        '[n=func.length] (number): 限制的参数数量。',
                    ret: '(Function): 返回新的覆盖函数。',
                    ex:`
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]                    
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:`
                    
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:`
                    
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:`
                    
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:`
                    
                    `
                },
                {
                    name: '组成对象',
                    grammar:'',
                    explain: '',
                    argus: '',
                    ret: '',
                    ex:`
                    
                    `
                }
            ]
        }
    ]
}