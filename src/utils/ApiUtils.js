const api = require("./api")

module.exports.getAcademics = async () => {
    const academics = await api.get("academic")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return academics;
}

module.exports.getSupervisor = async () => {
    const supervisors = await api.get("supervisor")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return supervisors;
}

module.exports.getAllStudents = async () => {
    const students = await api.get("students")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return students;
}

module.exports.getAllProjects = async () => {
    const projects = await api.get("projects")
    .then(res => {return res.data})
    .catch(err => console.error(err));
    return projects;
}
