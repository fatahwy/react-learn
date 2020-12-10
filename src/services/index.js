import Delete from "./Delete"
import Get from "./Get"
import Post from "./Post"
import Put from "./Put"

// EMPLOYEE
export const getListEmployee = () => Get('employees')
export const getDetailEmployee = (id) => Get(`employees/${id}`)
export const updateEmployee = (id, data) => Put(`employees/${id}`, data)
export const addEmployee = (data) => Post('employees', data);
export const deleteEmployee = (id) => Delete(`employees/${id}`)
