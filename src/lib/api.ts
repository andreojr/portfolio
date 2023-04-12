import axios from "axios";
import { io } from "socket.io-client";

export const api_url = "https://chatrecruiterbot-api.onrender.com/";
export const socketIo = io(api_url);
export const api = axios.create({
	baseURL: api_url,
});