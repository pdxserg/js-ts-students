import {corses, CourseType} from "./04";



const tasks= [
	{id: 1, title: "JS", isDone: true},
	{id: 2, title: "HTML", isDone: false},
	{id: 3, title: "CSS", isDone: false},
	{id: 4, title: "REACT", isDone: true},
]
test("Get men older than 90years", ()=>{
	const  ages  = [18, 20, 22, 1, 100, 90, 14]

	const oldAges= ages.filter(a => a > 90)

	expect(oldAges.length).toBe(1)
	expect(oldAges[0]).toBe(100)
})

test("Get cheap corses less 160", ()=>{

	const cheapCourse = corses.filter(c => c.price < 160)

expect(cheapCourse.length).toBe(2)
	expect(cheapCourse[0].price).toBe(110)
	expect(cheapCourse[0].title).toBe("CSS")
	expect(cheapCourse[1].price).toBe(150)

})

test("get onli complited tasks", () => {


	const complited = tasks.filter(t => t.isDone)

	expect(complited.length).toBe(2)
	expect(complited[1].id).toBe(4)
})
test("get onli mot complited tasks", () => {


	const notComplited = tasks.filter(t => t.isDone !== true)

	expect(notComplited.length).toBe(2)
	expect(notComplited[0].id).toBe(2)
})