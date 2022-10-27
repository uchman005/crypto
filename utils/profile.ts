import Cookies from 'universal-cookie';
const cookies = new Cookies();
const storedToken = cookies.get('token');

export const savedProfileState = async <ILoggedInUser>() => {
    try {
        const response = await fetch('/api/users/info', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: storedToken }),
        });
        if (response.status == 200) {
            const profile = (await response.json()) as ILoggedInUser;
            return profile;
        }
    } catch {}
};
