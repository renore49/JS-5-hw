// #1
let obj = {
	sasha: 2000,
	vasya: 3000,
	kolya: 5000,
}
for (let sasha in obj) {
	console.log(`${sasha} его зп составляет ${obj[sasha]}`)
}
// #2
let mas = [19, 5, 9, 15, 10, 4]
for (i = 0; i < mas.length; i++) {
	if (mas[i] >= 5 && mas[i] <= 20) {
		console.log(mas[i])
	}
}
// #3
let arr = [10, 20, 30, 50, 235, 3000]
for (let i of arr) {
	s = i.toString()
	if (s[0] == '1' || s[0] == '2' || s[0] == '5') {
		console.log(i)
	}
}
// #4
for (let i = 10; i <= 100; i++) {
	if (i % 10 == 0) {
		console.log(i)
	}
}
// #5
for (let i = 2; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}
