var arr = [12,2,33,46,5];
console.log(arr);

var arr_to_str = String(arr);
console.log(arr_to_str);

arr_to_str = arr_to_str.replace(/,/g, '');
console.log(arr_to_str);

var arr_to_num = Number(arr_to_str);
console.log(arr_to_num);