import axios from "axios";
import config from "../../setup/config";

/**
 * @function patchSubject
 * @param {Object} obj 
 */
export async function patchSubject(obj) {
    try {
        const res = await axios.patch(`${config.BACKEND_URL}/subjects`, obj);
        return res.status;
    } catch (error) {

    }
}

export async function deleteRoom(roomId) {
    try {
        const res = await axios.delete(`${config.BACKEND_URL}/rooms/${roomId}`);
        console.log(res);
    } catch (error) {

    }
}

export async function addRoom(roomId) {
    try {
        const res = await axios.post(`${config.BACKEND_URL}/rooms`, { roomId: roomId })
        return res;
    } catch (error) {

    }
}