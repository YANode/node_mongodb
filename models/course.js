const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


class Course {
    constructor(title, price, img) {
        this.title = title
        this.price = price
        this.img = img
        this.id = uuid.v4()
    }


    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }


    //find and save the edited 'course' -> by id
    static async update(course) {
        const courses = await Course.getAll();

        //find the 'course' index that we want to update
        const idx = courses.findIndex(c => c.id === course.id); //iteration, returns the index in the array
        courses[idx] = course;

        //save the 'course' with the specified index
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'courses.json'),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }



    async save() {

        const courses = await Course.getAll();
        courses.push(this.toJSON());

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'courses.json'),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }



    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'courses.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log('content', content)
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }



    //based on the id, get the one "course" from the database
    static async getById(id) {
        const courses  = await Course.getAll();
        return courses.find(c => c.id === id); //iteration, comparison by identifier
    }



}

module.exports = Course


