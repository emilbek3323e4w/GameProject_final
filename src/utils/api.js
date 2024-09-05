import axios from 'axios';

export const getToken = async () => {
    try {
        const response = await axios.post('https://capr11.pythonanywhere.com/api/login', {
            "phone_number": "+996400400400",
            "password": "admin123"
        });
        return response.data.token;
    } catch (error) {
        console.error('Failed to fetch token', error);
        throw error;
    }
};


export const fetchData = async (token) => {
    try {
        const response = await axios.get('https://capr11.pythonanywhere.com/api/data', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        console.log("dddddddddddddddddd"+response.data)
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data', error);
        throw error;
    }
};
