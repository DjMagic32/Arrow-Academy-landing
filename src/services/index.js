import axios from "axios";

const baseUrl = "https://fakestoreapi.com/"

export async function getProducts() {
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
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
        formData.append("firstname", productData.firstname)
        formData.append("lastname", productData.lastname)
        formData.append("mail", productData.mail)
        formData.append("phone", productData.phone)
        /* const response = await axios({
            url: `${baseUrl}/products`,
            method: "POST",
            data: formData,
        })

        return response */
    } catch (e) { 
        console.log(e)
    }
};
