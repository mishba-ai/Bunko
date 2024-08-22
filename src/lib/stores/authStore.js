import { writable } from "svelte/store";
//we have created this file to store the user data
//this writable keyword is used to create a writable store 

export const user = writable(null);