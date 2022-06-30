import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/user-app/v1/students/"
const request = "/students/"
export async function getProducts() {
    try {
        const response = await axios({
            url: `${baseUrl + request}`,
            method: "GET",
        })

        return response
    } catch (e) { 
        console.log(e)
    }
};

export async function saveProduct(productData) {
    try {
        console.log(productData)
        const formData = new FormData()
        formData.append("first_name", productData.firstname)
        formData.append("last_name", productData.lastname)
        formData.append("mail", productData.mail)
        formData.append("phone", productData.phone)
         const response = await axios({
            url: `${baseUrl}`,
            method: "POST",
            data: formData,
        })

        return response 
    } catch (e) { 
        console.log(e)
    }
};
