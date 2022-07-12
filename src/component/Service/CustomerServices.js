import axios from "axios";

const id = localStorage.getItem('CusomerId')
const token = localStorage.getItem('Token')
console.log(id)
class CustomerServices {
  baseUrl = "http://localhost:8080/customer";

  addperson(data) {
    return axios.post(`${this.baseUrl}/add`, data);
  }

  // getUserById(id) {
  //   return axios.get(`${this.baseUrl}/get/${id}`);
  // }
}

export default new CustomerServices();