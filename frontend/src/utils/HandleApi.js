import axios from 'axios'
const baseUrl = "http://localhost:5000"
const getAllTasks = (setTasks) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log("Data ---> ", data)
            setTasks(data)
    })
}
export { getAllTasks }